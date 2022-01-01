/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
// /////////////////////////////////////////////////////////
// / <==> /// This File Contains Post Functions /// <==> ///
// /////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// =============== */
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const {
  StatusCodes
} = require('http-status-codes');
const schema = require('../../../Model/model');
const {
  BlobServiceClient
} = require('@azure/storage-blob');
const azure = require('azure-storage');
const fileUpload = require('express-fileupload');
const express = require('express');
const server = express();
server.use(fileUpload());
const mime = require('mime');
const fs = require('fs');
const formidable = require('formidable');
const multipart = require('parse-multipart');
const {
  Mongoose,
  now
} = require('mongoose');
const multer = require('multer');
const path = require('path');
const inMemoryStorage = multer.memoryStorage();


// const getStream = require('into-stream');

/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Post Functions <==> /// =============== */
// change from base64 to img
// const decodeFileBase64 = (base64String) => {
//   // From Bytestream to Percent-encoding to Original string
//   return decodeURIComponent(
//     atob(base64String)
//       .split("")
//       .map(function (c) {
//         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join("")
//   );
// };

// const decodeBase64 = decodeFileBase64(
//   fileBase64String.substring(fileBase64String.indexOf(",") + 1)
// );

// another code
// var match=req.body.base64image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
// response = {};

// if (match.length !== 3) {
//   return new Error('Invalid input string');
// }

// response.type = match[1];
// response.data = new Buffer(match[2], 'base64');
// let decodedImg = response;
// let imageBuffer = decodedImg.data;
// let type = decodedImg.type;
// let extension = mime.extension(type);
// let fileName =  "image." + extension;
// try {
//   fs.writeFileSync("./images/" + fileName, imageBuffer, 'utf8');
//   return res.send({"status":"success"});
// } catch (e) {
//   next(e);
// }

/* ----------- <---> Upload files locally <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name uploadLocalImg
 * @description This function upload this media(image/audio/video) files  
 *              after changing from base64 on local storage
 *
 * @param {Array} files  - string or array of strings according number of media 
 *                             asserted to the function
 * @returns {String}    - success message
 */

const uploadLocalImg = async (files) => {
  // console.log('files: ', files.file.length);
  if (files.file.length != null) {
    files.file.forEach((file) => {
      const extension = file.mimetype.split('/')[1];
      // console.log('extension:', extension);
      const name = file.name.split('.')[0];
      // console.log('name:', name);
      const filePath = `${__dirname}/images/${name}.` + extension;
      // console.log('filePath:', filePath);

      // const file = files.file;
      file.mv(`${__dirname}/images/${name}.` + extension, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
      });
    });
  } else {
    const extension = files.file.mimetype.split('/')[1];
    // console.log('extension:', extension);
    const name = files.file.name.split('.')[0];
    // console.log('name:', name);
    const filePath = `${__dirname}/images/${name}.` + extension;
    // console.log('filePath:', filePath);

    // const file = files.file;
    files.file.mv(`${__dirname}/images/${name}.` + extension, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });
  }

  // console.log('file local: ', files.file);
  const success = 'Uploaded locally succesfully';
  return success;
};

/* ----------- <---> Upload files on server <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name uploadStream
 * @description This function upload this media(image/audio/video) files not base64
 *
 * @param {Array} files  - file or array of files according number of media 
 *                             asserted to the function
 * @returns {Array}    - Array of names of media on server
 */

const uploadStream = async (files) => {
  const blobServiceClient = await BlobServiceClient
    .fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);

  const containerName = blobServiceClient
    .getContainerClient('imagess');

  const containerClient = await blobServiceClient
    .getContainerClient(containerName.containerName);

  // console.log('files', files);

  const blobNames = [];
  files.file.forEach(async (file) => {
    const extension = file.mimetype.split('/')[1];
    // console.log('file.mimetype:', file.mimetype);

    const name = file.name.split('.')[0];
    const blobName = name + new Date().getTime() + '.' + extension;
    const filePath = `${__dirname}/images/${name}.` + extension;

    // console.log('blobName: ', blobName);

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.uploadFile(filePath);
    await blockBlobClient.setHTTPHeaders({
      blobContentType: file.mimetype
    });
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
    blobNames.push(blobName);
  });

  console.log('\nListing blobs...');
  for await (const blob of containerClient.listBlobsFlat()) {
    console.log('\t', blob.name);
  }
  return blobNames;
  // return 'https://tumblrstorage.blob.core.windows.net/imagess/'+blobName;
};

/* ----------- <---> Upload media on server <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name uploadAny
 * @description This function upload this media(image/audio/video) comes from function uploadImgBase on server cloud
 *
 * @param {String} blobName  - media name
 * @param {String} type  - media type
 * @returns {String}    - Url of media uploaded on server cloud
 */

const uploadAny = async (blobName, type) => {
  // console.log('blobName: ', blobName);
  const blobServiceClient = BlobServiceClient
    .fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);

  const containerName = blobServiceClient
    .getContainerClient('imagess');

  const blobService = azure.createBlobService();

  // console.log("type.split('/')[0]: ", type.split('/')[0]);
  // console.log('containerName.containerName: ', containerName.containerName);
  fs.createReadStream(__dirname + '/' + type.split('/')[0] + '/' + blobName)
    .pipe(blobService
      .createWriteStreamToBlockBlob(containerName.containerName,
        blobName, {
          blockIdPrefix: 'block',
          contentSettings: {
            contentType: type
          }
        }));
  return 'https://tumblrstorage.blob.core.windows.net/imagess/' + blobName;
};

/* ----------- <---> Change base64 media <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name uploadImgBase
 * @description This function changes media from base64 to normal media base according to its type(image/audio/video)
 *              and calls function uploadAny to upload this media on server cloud
 *
 * @param {Array} files  - string or array of strings according number of media 
 *                             asserted to the function
 * @returns {Array}    - Array of Urls with links of media uploaded on server cloud
 */

const uploadImgBase = async (files) => {
  const blobUrls = [];
  // console.log(files);

  if (files.length <= 10) {
    files.forEach(async (file) => {
      // convert image from base64 to original image
      console.log('file: ', file.substr(0, 26));
      const match=file.match(/^data:([A-Za-z1-9-+\/]+);base64,(.+)$/);
      // console.log('match: ', match);
      const response = {};

      if (match.length !== 3) {
        return new Error('Invalid input string');
      }

      response.type = match[1];
      // console.log('response.type: ', response.type);
      response.data = Buffer.from(match[2], 'base64');
      const decodedImg = response;
      const imageBuffer = decodedImg.data;
      const type = decodedImg.type; // mimetype
      // const extension = mime.extension(type);
      const uploadDate = new Date().toISOString().replace(/:/g, '-');
      const blobName = type.split('/')[0] + uploadDate + '.' + type.split('/')[1];
      // console.log('blobName base64 func.: ', blobName);

      try {
        fs.writeFileSync(__dirname + '/' + type.split('/')[0] + '/' + blobName,
          imageBuffer, 'utf8');
        // console.log('upload base64 locally successfully');
      } catch (e) {
        console.log(e);
      }

      blob = await uploadAny(blobName, type);
      blobUrls.push(blob);
    });
  } else {
    // convert image from base64 to original image
    console.log('files: ', files.substr(-20, -1).match((/^data:([A-Za-z1-9-+\/]+);base64,(.+)$/)));
    const match = files.match(/^data:([A-Za-z1-9-+\/]+);base64,(.+)$/);
    const response = {};
    // console.log('match: ', match);

    if (match.length !== 3) {
      return new Error('Invalid input string');
    }

    response.type = match[1];
    response.data = Buffer.from(match[2], 'base64');
    const decodedImg = response;
    const imageBuffer = decodedImg.data;
    const type = decodedImg.type; // mimetype
    // const extension = mime.extension(type);
    const uploadDate = new Date().toISOString().replace(/:/g, '-');
    const blobName = type.split('/')[0] + uploadDate + '.' + type.split('/')[1];
    console.log('imageBuffer: ', imageBuffer.byteLength);

    try {
      fs.writeFileSync(__dirname + '/' + type.split('/')[0] + '/' + blobName,
        imageBuffer, 'utf8');
      // console.log('upload base64 locally successfully');
    } catch (e) {
      console.log(e);
    }

    blob = await uploadAny(blobName, type);
    blobUrls.push(blob);
  }

  // console.log('blobUrls: ', blobUrls);
  return blobUrls;

  // check this link: https://www.py4u.net/discuss/1293154
};

const uploadVideo = async (files) => {
  let match = files.replace(/^data:(.*?);base64,/, ""); // <--- make it any type
  match = files.replace(/ /g, '+'); // <--- this is important
}

/* ----------- <---> Upload data on server <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name uploadImgg
 * @description This function upload data in text file on server cloud
 *
 * @returns {String}    - Url of media uploaded on server cloud
 */

const uploadImgg = async () => {
  const blobServiceClient = await BlobServiceClient
    .fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);

  const containerName = blobServiceClient
    .getContainerClient('imagess');

  // console.log('containerName', containerName.containerName);

  const containerClient = await blobServiceClient
    .getContainerClient(containerName.containerName);

  // console.log('containerClient', containerClient);

  const content = 'Hello Rema!';
  const blobName = 'newblob' + new Date().getTime() + '.txt';
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  // console.log('blockBlobClient: ', blockBlobClient);
  const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
  // console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);

  console.log('\nListing blobs...');

  // List the blob(s) in the container.
  for await (const blob of containerClient.listBlobsFlat()) {
    console.log('\t', blob.name);
  }
  return 'https://tumblrstorage.blob.core.windows.net/imagess/' + blobName;
};

/* ----------- <---> Random Post <---> ------ */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name retrieveRandomPosts
 * @description This function gets random posts for explore/radar
 * 
 * @returns {Array}    - Array of posts
 */

const retrieveRandomPosts = async () => {
  const randomPosts = await schema.Posts.find({
    isDeleted: false
  });
  randomPostsLim = [];
  let i = 0;
  while (i < 10) {
    randomNumb = Math.floor(Math.random() * randomPosts.length - 10);
    if (randomPosts[randomNumb] != null) {
      randomPostsLim.push(randomPosts[randomNumb]);
      i += 1;
    }
  }
  return randomPostsLim;
};

/* --------- <---> Trending Post <---> ------ */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name retrieveTrendingPosts
 * @description This function gets trending posts for explore
 * 
 * @returns {Array}    - Array of trending posts
 */

const retrieveTrendingPosts = async () => {
  // const trendingPosts = await schema.Posts
  //     .find(); // {isDeleted: false} {_id: '61ae667d8b4d5620ce937992'}

  // postId:  new ObjectId("61975a0d6181e2ed7c11aa3e")
  const maxLikes = await schema.notes.find();
  const postss = await schema.Posts.find();
  maxNotes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 10
  trendingPostsLim = [];
  BreakException = {};
  let i = 0;

  maxLikes.forEach(async (data) => {
    if (data.reblogs != null) {
      countReblogs = data.reblogs.length;
    } else {
      countReblogs = 0;
    }

    if (data.comments != null) {
      countComm = data.comments.length;
    } else {
      countComm = 0;
    }

    if (data.likes != null) {
      countLike = data.likes.length;
    } else {
      countLike = 0;
    }
    const notesCount = countLike + countComm + countReblogs;
    console.log('notesCount1: ', notesCount);

    if (notesCount > maxNotes[i]) {
      console.log('notesCount2: ', notesCount);
      maxNotes[i] = notesCount;
      try {
        postss.forEach((dataPosts) => {
          if (dataPosts.notesId == data._id) {
            console.log('dataPosts.notesId: ', dataPosts.notesId);
            trendingPostsLim[i] = dataPosts;
            throw BreakException;
          }
        });
      } catch (e) {
        console.log('error..');
        if (e !== BreakException) throw e;
      }

      i = i + 1;
      console.log('trendingPostsLim: ', trendingPostsLim, 'i: ', i);
    }
  });
  console.log('maxNotes: ', maxNotes);
  let result = [];
  result = {
    countNotesEachPost: maxNotes,
    trendingPostsLim: trendingPostsLim,
  };
  return result;
  // const maxLikes = await schema.notes.aggregate([
  //   {$project: {reblog:
  //   {
  //     $objectToArray: '$reblogs',
  //     $size: {$ifNull: ['reblogs', []]},
  //   },
  //   },
  //   },
  //   {$unwind: '$reblog'},
  //   {$sort: {'$reblog': -1}},
  //   {$limit: 5},
  // ]);
  // console.log('$maxLikes: ', maxLikes);

  // for (let i=0; i<maxNotes.length; i++) {
  // trendingPosts.forEach((posts) =>{
  //   postId=posts._id;
  //   console.log('postId: ', postId);
  //   notesId=posts.notesId;
  // console.log('notesId: ', notesId);
  // getNotes(postId).then((ret) =>{
  //   console.log(ret);
  // });
  // if (notesCount > maxNotes[i]){
  //   if (i != 0 &&
  //       notesCount < maxNotes[i-1] &&
  //     trendingPostsLim[i-1] != trendingPostsLim[i] ) {
  //     maxNotes[i]=notesCount;
  //     trendingPostsLim[i]=posts;
  //   }
  // }

  // }
  // });
  // };

  // for (let i=0; i<10; i++) {
  //   randomNumb= Math.floor(Math.random() * trendingPosts.length);
  //   trendingPostsLim.push(trendingPosts[randomNumb]);
  // }
};

/* ----------- <---> Create Post <---> ------ */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name createPost
 * @description Creates a blog post and saves its content in the database.
 * @param {String} blogId - Id of the blog to create the post.
 * @param {String} postHtml - Post Content.
 * @param {String} type - Post Type.
 * @param {String} state - Post State.
 * @param {Array} tags - Post Tags.
 *
 * @returns {String} Created Post Id.
 */

const createPost = async (blogId, postHtml, type, state, tags) => {
  try {
    ret = '';
    const existingBlog = await schema.blogs.findOne({
      _id: blogId,
    });
    if (existingBlog && existingBlog.isDeleted == false) {
      console.log(existingBlog);
      const newNotes = new schema.notes();
      // newNotes.save();
      const notesId = newNotes._id;
      newPost = new schema.Posts({
        blogId,
        postHtml,
        type,
        state,
        tags,
        notesId,
      });
      newPost = await newPost.save();
      newNotes.postId = newPost._id;
      newNotes.save();
      console.log(newNotes);
      existingBlog.postsIds.push(newPost._id);
      // if the field is not in the database it will be created
      existingBlog.save();
      console.log(existingBlog);
      ret = 'Post Created Successfully';
      console.log(newPost);
      return ret;
    } else {
      ret = 'Blog Not Found';
      return ret;
    };
  } catch (error) {
    ret = 'Error In Create Post Function';
    return ret;
  };
};

/* ----------- <---> Show Post <---> ---- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name showPost
 * @description Shows a blog post by its id.
 * @param {string} postId - Id of the post to show.
 *
 * @returns {Object} the blog post content in the form of html string.
 */

const showPost = async (url, postId) => {
  try {
    ret = {
      msg: '',
      post: {},
    };
    const existingPost = await schema.Posts.findOne({
      _id: postId,
    });
    if (existingPost && existingPost.isDeleted == false) {
      ret.msg = 'Post Returned Successfully';
      ret.post = existingPost;
      return ret;
    } else {
      ret.msg = 'Post Not Found';
      return ret;
    };
  } catch (error) {
    ret.msg = 'Error In Show Post Function';
    return ret;
  };
};

/* ----------- <---> Make Comment <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name makePost
 * @description A blog makes a comment on a blog post.
 * @param {string} blogId - Id of the blog making the comment.
 * @param {string} postId - Id of the post to make the comment on.
 * @param {string} text - text of the comment.
 *
 * @returns {string} The id of the comment.
 */

const makeComment = async (blogId, postId, text) => {
  try {
    var ret = '';
    const existingBlog = await schema.blogs.findOne({
      _id: blogId
    });
    const existingPost = await schema.Posts.findOne({
      _id: postId
    });

    if (existingBlog && existingBlog.isDeleted == false && existingBlog.isPrimary == true) {
      if (existingPost && existingPost.isDeleted == false) {
        const notesId = existingPost.notesId;
        const existingNotes = await schema.notes.findOne({
          _id: notesId
        });
        if (existingNotes && existingNotes.isDeleted == false) {
          const comment = {
            blogId,
            text
          };
          existingNotes.comments.push(comment);
          existingNotes.save();
        } else {
          ret = 'Notes Not Found';
          return ret;
        }
        ret = 'Comment Posted Successfully';
        return ret;
      } else {
        ret = 'Post Not Found';
        return ret;
      }
    } else {
      ret = 'Blog Not Found';
      return ret;
    }
  } catch (error) {
    ret = 'Error in Make Comment Function';
    return ret;
  }
};

/* ----------- <---> Loop on an array and check if an element exists <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name loopLikeAndCheck
 * @description Loop on an array and check if an element exists.
 * @param {array} arr - Array to loop on.
 * @param {string} element - Element to look for.
 *
 * @returns {string} Boolean indicates whether the element exists or not.
 */

const loopLikeAndCheck = (arr, element) => {
  let existAndNotDeletd = 0;
  let existAndDeletd = 0;
  let pos = 0;
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].blogId === element) {
        if (arr[i].isDeleted === false) {
          existAndNotDeletd = 1;
          pos = i;
        } else {
          existAndDeletd = 1;
          pos = i;
        }
      }
    }
  }
  return [existAndNotDeletd, existAndDeletd, pos];
};

/* ----------- <---> Loop on Object in Array of Objects and check if Id exists <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name loopObjAndCheck
 * @description Loop on Object in Array of Objects and check if Id exists.
 * @param {array} arr - Array to loop on.
 * @param {string} element - Element to look for.
 * @param {number} pos - Position of the found element if found.
 *
 * @returns {string} Boolean indicates whether the element exists or not.
 */

const loopObjAndCheck = (arr, element) => {
  let exist = 0;
  let pos = 0;
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id.toString() === element && arr[i].isDeleted === false) {
        exist = 1;
        pos = i;
      }
    }
  }
  return [exist, pos];
};

/* ----------- <---> Press Like of a Post (Like or Unlike) <---> ----------- */ // *** <===> Done <===>  *** //
// Like should be done only one time by one blog

/**
 * @function
 * @name likePress
 * @description Like or Unlike a Post.
 * @param {string} blogId - Id of the blog pressing the like button.
 * @param {string} postId - Id of the post to like or unlike.
 *
 * @returns {string} .
 */

const likePress = async (blogId, postId) => {
  try {
    var ret = '';
    const existingBlog = await schema.blogs.findOne({_id: blogId});
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingBlog && existingBlog.isDeleted == false && existingBlog.isPrimary == true) {
      userEmail = existingBlog.userEmail;
      const existingUser = await schema.users.findOne({email: userEmail});
      if (existingPost && existingPost.isDeleted == false) {
        const notesId = existingPost.notesId;
        const existingNotes = await schema.notes.findOne({_id: notesId});
        if (existingNotes && existingNotes.isDeleted == false) {
          const like = {
            blogId
          };
          const likesArray = existingNotes.likes;
          const existAndNotDeleted = loopLikeAndCheck(likesArray, blogId)[0];
          const existAndDeleted = loopLikeAndCheck(likesArray, blogId)[1];
          const pos = loopLikeAndCheck(likesArray, blogId)[2];
          if (existAndNotDeleted) {
            // existingNotes.likes.pull(likesArray[pos]);
            likesArray[pos].isDeleted = true;
            existingNotes.save();
            ret = 'Post Unliked Successfully';
            if(existingUser) {
              existingUser.likes_posts_id.pull(postId);
              existingUser.save();
            }
            return ret;
          } else if (existAndDeleted) {
            likesArray[pos].isDeleted = false;
            existingNotes.save();
            ret = 'Post Liked Successfully';
            if(existingUser) {
              existingUser.likes_posts_id.push(postId);
              existingUser.save();
            }
        
            return ret;
          } else {
            existingNotes.likes.push(like);
            existingNotes.save();
            ret = 'Post Liked Successfully';
            if(existingUser) {
              existingUser.likes_posts_id.push(postId);
              existingUser.save();
            }
            return ret;
          }
        } else {
          ret = 'Notes Not Found';
          return ret;
        }
      } else {
        ret = 'Post Not Found';
        return ret;
      }
    } else {
      ret = 'Blog Not Found';
      return ret;
    }
  } catch (error) {
    ret = 'Error in Press Like Function';
    return ret;
  }
};

/* ----------- <---> Reblog a Post <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name reblogPost
 * @description A blog reblogs a blog post.
 * @param {string} blogId - Id of the blog making the reblog.
 * @param {string} postId - Id of the post to reblog.
 * @param {string} text - text of the reblog.
 *
 * @returns {string} The id of the reblog.
 */

const reblogPost = async (blogId, postId, text) => {
  try {
    var ret = '';
    const existingBlog = await schema.blogs.findOne({
      _id: blogId,
    });
    const existingPost = await schema.Posts.findOne({
      _id: postId,
    });

    if (existingBlog && existingBlog.isDeleted == false) {
      if (existingPost && existingPost.isDeleted == false) {
        const notesId = existingPost.notesId;
        const existingNotes = await schema.notes.findOne({
          _id: notesId
        });
        if (existingNotes && existingNotes.isDeleted == false) {
          const reblog = {
            blogId,
            text,
          };
          existingNotes.reblogs.push(reblog);
          existingNotes.save();
        } else {
          ret = 'Notes Not Found';
          return ret;
        }
        ret = 'Post Reblogged Successfully';
        return ret;
      } else {
        ret = 'Post Not Found';
        return ret;
      }
    } else {
      ret = 'Blog Not Found';
      return ret;
    }
  } catch (error) {
    ret = 'Error in Reblog Post Function';
    return ret;
  }
};

/* ----------- <---> Remove Comment <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name removeComment
 * @description Remove a comment.
 * @param {string} postId - Id of the post to remove comment from.
 * @param {string} commentId - Id of the comment to remove.
 *
 * @returns {string} .
 */

const removeComment = async (postId, commentId) => {
  try {
    var ret = '';
    const existingPost = await schema.Posts.findOne({
      _id: postId,
    });
    if (existingPost && existingPost.isDeleted == false) {
      const notesId = existingPost.notesId;
      const existingNotes = await schema.notes.findOne({
        _id: notesId,
      });
      if (existingNotes && existingNotes.isDeleted == false) {
        const commentsArray = existingNotes.comments;
        const exist = loopObjAndCheck(commentsArray, commentId)[0];
        const pos = loopObjAndCheck(commentsArray, commentId)[1];
        if (exist) {
          // existingNotes.comments.pull(commentsArray[pos]);
          commentsArray[pos].isDeleted = true;
        } else {
          ret = 'Comment Not Found';
          return ret;
        };
        existingNotes.save(); // whole document in db is saved
        ret = 'Comment Removed Successfully';
        return ret;
      } else {
        ret = 'Notes Not Found';
        return ret;
      };
    } else {
      ret = 'Post Not Found';
      return ret;
    };
  } catch (error) {
    ret = 'Error In Remove Comment Function';
    return ret;
  };
};

/* ----------- <---> Remove Reblog <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name removeReblog
 * @description Remove a reblog.
 * @param {string} postId - Id of the post to remove reblog from.
 * @param {string} reblogId - Id of the reblog to remove.
 *
 * @returns {string} .
 */

const removeReblog = async (postId, reblogId) => {
  try {
    ret = '';
    const existingPost = await schema.Posts.findOne({
      _id: postId,
    });
    if (existingPost && existingPost.isDeleted == false) {
      const notesId = existingPost.notesId;
      const existingNotes = await schema.notes.findOne({
        _id: notesId,
      });
      if (existingNotes && existingNotes.isDeleted == false) {
        const reblogsArray = existingNotes.reblogs;
        const exist = loopObjAndCheck(reblogsArray, reblogId)[0];
        const pos = loopObjAndCheck(reblogsArray, reblogId)[1];
        if (exist) {
          // existingNotes.reblogs.pull(reblogsArray[pos]);
          reblogsArray[pos].isDeleted = true;
        } else {
          ret = 'Reblog Not Found';
          return ret;
        };
        existingNotes.save();
        ret = 'Reblog Removed Successfully';
        return ret;
      } else {
        ret = 'Notes Not Found';
        return ret;
      };
    } else {
      ret = 'Post Not Found';
      return ret;
    };
  } catch (error) {
    ret = 'Error In Remove Reblog Function';
    return ret;
  };
};

/* ----------- <---> Get Post Notes <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name getNotes
 * @description Get notes of a post.
 * @param {string} postId - Id of the post to get its notes.
 *
 * @returns {string} Array of arrays, contains 4 arrays: likesArray, commentsArray, reblogsArray, countsArray(likesCount, reblogsCount, notesCount)
 */

const getNotes = async (notesId) => {
  try {
    ret = {
      msg: '',
      notes: [],
      likesCount: 0,
      reblogsCount: 0,
      notesCount: 0
    };

    const existingNotes = await schema.notes.findOne({
      _id: notesId,
    });
    if (existingNotes && existingNotes.isDeleted == false) {
      const likesArray = existingNotes.likes;
      const commentsArray = existingNotes.comments;
      const reblogsArray = existingNotes.reblogs;
      likesCount = 0;
      reblogsCount = 0;
      commentsCount = 0;
      notesArray = [];
      for (let i = 0; i < likesArray.length; i++) {
        if (likesArray[i].isDeleted == false) {
          likesCount++;
          notesArray.push(likesArray[i]);
        }
      }
      for (let i = 0; i < commentsArray.length; i++) {
        if (commentsArray[i].isDeleted == false) {
          commentsCount++;
          notesArray.push(commentsArray[i]);
        }
      }
      for (let i = 0; i < reblogsArray.length; i++) {
        if (commentsArray[i].isDeleted == false) {
          reblogsCount++;
          notesArray.push(reblogsArray[i]);
        }
      }
      const notesCount = likesCount + commentsCount + reblogsCount;
      countsArray = [likesCount, reblogsCount, notesCount];

      
      // for (let i = 0; i < notesCount; i++) {
      //   if (likesArray[i].isDeleted == false) {
      //     notesArray.push(likesArray[i]);
      //   }
      //   if (commentsArray[i].isDeleted == false) {
      //     notesArray.push(commentsArray[i]);
      //   }
      //   if (commentsArray[i].isDeleted == false) {
      //     notesArray.push(reblogsArray[i]);
      //   }
      // }
      notesArray.sort(function (x, y) {
        if(x && y) {
          return y._id.getTimestamp() - x._id.getTimestamp();
        }
        
      });
      const notes = [];
      for (let i = 0; i < notesCount; i++) {
        notes.push(notesArray[i]);
      }

      ret.msg = 'Notes Got Successfully';
      ret.likesCount = countsArray[0];
      ret.reblogsCount = countsArray[1];
      ret.notesCount = countsArray[2];
      ret.notes = notes;
      return ret;
    } else {
      ret.msg = 'Notes Not Found';
      return ret;
    }
  } catch (error) {
    ret.msg = 'Error in Get Notes Function';
    return ret;
  };
};

/* ----------- <---> Get User Dashboard <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name getDashboard
 * @description Get dashboard of a blog.
 * @param {string} userId - Id of the user to get its blogs' posts.
 * @param {string} blogId - Id of the blog to get its posts.
 *
 * @returns {string} Array of posts objects.
 */

const getDashboard = async (userEmail) => {
  try {
    ret = {
      msg: '',
      user: {},
      blog: {},
      postsToShow: [],
    };
    postsToShow = [];
    const existingUser = await schema.users.findOne({
      email: userEmail,
    });
    if (existingUser) {
      ret.user = existingUser;
      const userId = existingUser._id;
      const blogId = existingUser.blogsId[0];
      const existingBlog = await schema.blogs.findOne({
        _id: blogId,
      });
      // Getting posts of primary blog
      if (existingBlog && existingBlog.isDeleted == false && existingBlog.isBlockedFromPrimary == false) {
        ret.blog = existingBlog;
        const postsArray = existingBlog.postsIds;
        for (let i = 0; i < postsArray.length; i++) {
          const existingPost = await schema.Posts.findOne({
            _id: postsArray[i],
          });
          if (existingPost && existingPost.isDeleted == false && existingPost.isReported == false) {
            postsToShow.push(existingPost);
          }
        }
      } else {
        ret.msg = 'Blog Not Found';
        return ret;
      }
      // checking all follwed blogs to get their posts
      const followingBlogsArray = existingUser.following_blogs;
      for (let i = 0; i < followingBlogsArray.length; i++) {
        const existingFoBlog = await schema.blogs.findOne({
          _id: followingBlogsArray[i],
        });
        if (existingFoBlog && existingFoBlog.isDeleted == false && existingFoBlog.isBlockedFromPrimary == false) {
          const foPostsArray = existingFoBlog.postsIds;
          for (let j = 0; j < foPostsArray.length; j++) {
            const existingFoPost = await schema.Posts.findOne({
              _id: foPostsArray[j],
            });
            if (existingFoPost && existingFoPost.isDeleted == false && existingFoPost.isReported == false) {
              postsToShow.push(existingFoPost);
            }
          }
        } 
      }
      postsToShow.sort(function (x, y) {
        return y._id.getTimestamp() - x._id.getTimestamp();
      });
      ret.msg = 'Dashboard Got Successfully';
      ret.postsToShow = postsToShow;
      return ret;
    } else {
      ret.msg = 'User Not Found';
      return ret;
    }
  } catch (error) {
    ret.msg = 'Error In Get Dashboard Function';
    return ret;
  }
};

/* ----------- <---> Get Blog Posts <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name getBlogPosts
 * @description Get dashboard of a blog.
 * @param {string} blogId - Id of the blog to get its posts.
 *
 * @returns {string} Array of posts objects.
 */

const getBlogPosts = async (blogId) => {
  try {
    ret = {
      msg: '',
      blog: {},
      postsToShow: [],
    };
    postsToShow = [];
    const existingBlog = await schema.blogs.findOne({
      _id: blogId,
    });
    if (existingBlog && existingBlog.isDeleted == false) {
      const postsArray = existingBlog.postsIds;
      for (let i = 0; i < postsArray.length; i++) {
        const existingPost = await schema.Posts.findOne({
          _id: postsArray[i],
        });
        if (existingPost && existingPost.isDeleted == false) {
          postsToShow.push(existingPost);
        }
      }
    } else {
      ret.msg = 'Blog Not Found';
      return ret;
    }
    postsToShow.sort(function (x, y) {
      return y._id.getTimestamp() - x._id.getTimestamp();
    });
    ret.msg = 'Blog Posts Got Successfully';
    ret.blog = existingBlog;
    ret.postsToShow = postsToShow;
    return ret;
  } catch (error) {
    ret.msg = 'Error In Get Blog Posts Function';
    return ret;
  }
};

/* ----------- <---> Delete Post <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name deletePost
 * @description Deletes a Post.
 * @param {string} postId - Id of the post to delete.
 *
 * @returns {string} .
 */

const deletePost = async (postId) => {
  try {
    ret = '';
    const existingPost = await schema.Posts.findOne({
      _id: postId,
    });
    if (existingPost && existingPost.isDeleted == false) {
      existingPost.isDeleted = true;
      existingNotes = await schema.notes.findOne({
        _id: existingPost.notesId
      });
      if (existingNotes && existingNotes.isDeleted == false) {
        existingNotes.isDeleted = true;
        existingNotes.save();
      }
      existingPost.save();
      const existingBlog = await schema.blogs.findOne({
        _id: existingPost.blogId
      });
      if (existingBlog && existingBlog.isDeleted == false) {
        existingBlog.postsIds.pull(existingPost._id);
        existingBlog.save();
      }
      ret = 'Post Deleted Successfully';
      return ret;
    } else {
      ret = 'Post Not Found';
      return ret;
    };
  } catch (error) {
    ret = 'Error In Delete Post Function';
    return ret;
  };
};

/* ----------- <---> Edit Post <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name editPost
 * @description Edits a Post.
 * @param {string} postId - Id of the post to edit.
 *
 * @returns {string} .
 */

const editPost = async (postId, postHtml, tags) => {
  try {
    ret = '';
    const existingPost = await schema.Posts.findOne({
      _id: postId,
    });
    if (existingPost && existingPost.isDeleted == false) {
      existingPost.postHtml = postHtml;
      existingPost.tags = tags;
      existingPost.save();
      ret = 'Post Edited Successfully';
      return ret;
    } else {
      ret = 'Post Not Found';
      return ret;
    }
  } catch (error) {
    ret = 'Error In Edit Post Function';
    return ret;
  };
};

/* ----------- <---> Report Post <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name reportPost
 * @description Reports a Post.
 * @param {string} postId - Id of the post to report.
 *
 * @returns {string} .
 */

const reportPost = async (postId) => {
  try {
    ret = '';
    const existingPost = await schema.Posts.findOne({
      _id: postId,
    });
    if (existingPost && existingPost.isDeleted == false) {
      existingPost.isReported = true;
      existingPost.save();
      ret = 'Post Reported Successfully';
      return ret;
    } else {
      ret = 'Post Not Found';
      return ret;
    }
  } catch (error) {
    ret = 'Error In Report Post Function';
    return ret;
  };
};

/* ----------- <---> Activity Feed <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name activityFeed
 * @description Gets activity feed of a post.
 * @param {string} blogId - Id of the blog to get its activity feed.
 *
 * @returns {string} .
 */

const activityFeed = async (blogId) => {
  try {
    const existingBlog = await schema.blogs.findOne({
      _id: blogId
    });
    ret = {
      msg: '',
      daily: [],
      hourly: [],
      lastDay: [],
      lastThreeDays: [],
      lastWeek: []
    };
    daily = []
    hourly = [],
      lastDay = [],
      lastThreeDays = [],
      lastWeek = []

    var mydate = new Date();

    if (existingBlog && existingBlog.isDeleted == false) {
      for (let i = 0; i < existingBlog.postsIds.length; i++) {
        const existingPost = await schema.Posts.findOne({
          _id: existingBlog.postsIds[i]
        });
        if (existingPost && existingPost.isDeleted == false) {
          existingNotes = await schema.notes.findOne({
            _id: existingPost.notesId
          });
          if (existingNotes && existingNotes.isDeleted == false) {
            notesObj = await getNotes(existingNotes._id);
            notesArray = notesObj.notes;
            for (let j = 0; j < notesArray.length; j++) {
              idDay = notesArray[j]._id.getTimestamp().getDate();
              if (notesArray[j]._id.getTimestamp().getHours() == mydate.getHours()) {
                hourly.push(notesArray[j]);
                hourly.push({
                  'postId': existingPost._id
                });
              }
              if (idDay == mydate.getDate()) {
                daily.push(notesArray[j]);
                daily.push({
                  'postId': existingPost._id
                });
              }
              if (idDay == mydate.getDate() - 1) {
                lastDay.push(notesArray[j]);
                lastDay.push({
                  'postId': existingPost._id
                });
              }
              if (idDay == mydate.getDate() - 1 ||
                idDay == mydate.getDate() - 2 ||
                idDay == mydate.getDate() - 3) {
                lastThreeDays.push(notesArray[j]);
                lastThreeDays.push({
                  'postId': existingPost._id
                });
              }
              if (idDay == mydate.getDate() - 1 ||
                idDay == mydate.getDate() - 2 ||
                idDay == mydate.getDate() - 3 ||
                idDay == mydate.getDate() - 4 ||
                idDay == mydate.getDate() - 5 ||
                idDay == mydate.getDate() - 6 ||
                idDay == mydate.getDate() - 7) {
                lastWeek.push(notesArray[j]);
                lastWeek.push({
                  'postId': existingPost._id
                });
              }
            }
          } else {
            ret.msg = 'Notes Not Found';
            return ret;
          }
        } else {
          ret.msg = 'Post Not Found';
          return ret;
        }
      }
    } else {
      ret.msg = 'Blog Not Found';
      return ret;
    }
    ret.msg = 'Activity Feed Got Successfully';
    ret.hourly = hourly;
    ret.daily = daily;
    ret.lastDay = lastDay;
    ret.lastThreeDays = lastThreeDays;
    ret.lastWeek = lastWeek;
    return ret;
  } catch (error) {
    ret.msg = 'Error In Activity Feed Function';
    return ret;
  };
};

/* ----------- <---> Get Liked Posts <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name getLikedPosts
 * @description Get Liked Posts of a user.
 * @param {string} blogId - Id of the blog to get its posts.
 *
 * @returns {string} Array of posts objects.
 */

 const getLikedPosts = async (blogId) => {
  try {
    ret = {
      msg: '',
      blog: {},
      postsToShow: [],
    };
    postsToShow = [];
    const existingBlog = await schema.blogs.findOne({
      _id: blogId,
    });
    if (existingBlog && existingBlog.isDeleted == false) {
      const userEmail = existingBlog.userEmail;
      const existingUser = await schema.users.findOne({email: userEmail});
      if(existingUser) {
        likedPosts = existingUser.likes_posts_id;
      } else {
        ret.msg = 'User Not Found';
        return ret;
      }
      for (let i = 0; i < likedPosts.length; i++) {
        const existingPost = await schema.Posts.findOne({
          _id: likedPosts[i],
        });
        if (existingPost && existingPost.isDeleted == false) {
          postsToShow.push(existingPost);
        }
      }
    } else {
      ret.msg = 'Blog Not Found';
      return ret;
    }
    postsToShow.sort(function (x, y) {
      return y._id.getTimestamp() - x._id.getTimestamp();
    });
    ret.msg = 'Liked Posts Got Successfully';
    ret.blog = existingBlog;
    ret.postsToShow = postsToShow;
    return ret;
  } catch (error) {
    ret.msg = 'Error In Get Liked Posts Function';
    return ret;
  }
};

/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Export Post Functions <==> /// =============== */
module.exports = {
  createPost,
  showPost,
  makeComment,
  loopLikeAndCheck,
  loopObjAndCheck,
  likePress,
  reblogPost,
  removeComment,
  removeReblog,
  editPost,
  deletePost,
  reportPost,
  activityFeed,
  getNotes,
  getDashboard,
  uploadImgBase,
  uploadImgg,
  retrieveRandomPosts,
  retrieveTrendingPosts,
  getBlogPosts,
  uploadStream,
  uploadLocalImg,
  uploadVideo,
  getLikedPosts,
  uploadAny, // added this after thursday, to call it in unit testing
};

/* =========== /// <==> End <==> ===========*/