/* eslint-disable linebreak-style */

/* ================ /// <==> Variables Declaration <==> /// ================ */
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/


/* ==================== /// <==> Blog Functions <==> /// ==================== */
/* -------- <---> Block Blog <---> ------- */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name blockBlog
 * @description this function blocks the blog whose id
 *              sent in the body from the blog whose id in params
 * @param {String} blogId - The id of the blog who blocks the other blog
 * @param {String} blockedBlogId - The id of the blog to be blocked
 *
 * @returns {Object} - The blocked blog and null if not found
 */

const blockBlog = async (blogId, blockedBlogId) => {
  try {
    const blockedBlog = await schema.blogs.findOne(
        {$and: [{_id: blockedBlogId}, {isDeleted: false}]});
    if (blockedBlog) {
      const blog = await schema.blogs.findOne(
          {$and: [{_id: blogId}, {isDeleted: false}]});
      if (blog) {
        console.log("block");

        let ids=blog.blockedBlogs;
        ids.push(blockedBlogId);
        ids=Array.from(new Set(ids));
        blog.blockedBlogs=ids;
        blog.save();
        return blockedBlog;
      }
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
};
/* -------- <---> Unblock Blog <---> ------- */ // *** <===> Done <===>  *** //


/**
 *
 * @function
 * @name unblockBlog
 * @description this function remove the blog whose id sent in
 *              the body from blocked blogs of the blog whose id in params
 * @param {String} blogId - The id of the blog who unblocks the other blog
 * @param {String} unblockedBlogId - The id of the blog to be unblocked
 *
 * @returns {Object} - The unblocked blog and null if not found
 */

const unblockBlog = async (blogId, unblockedBlogId) => {
  try {
    const unblockedBlog = await schema.blogs.findOne(
        {$and: [{_id: unblockedBlogId}, {isDeleted: false}]});
    if (unblockedBlog) {
      const blog = await schema.blogs.findOne(
          {$and: [{_id: blogId}, {isDeleted: false}]});
      if (blog) {
        blog.blockedBlogs.pull(unblockedBlogId);
        blog.save();
        return unblockedBlog;
      }
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 *
 * @function
 * @name editBlog
 * @description    -  It edits a blog given its id and the fields that the user wants to edit
 * @param {String} blogId 
 * @param {String} accent
 * @param {String} name 
 * @param {String} headerImage
 * @param {String} avatar
 * @param {Boolean} showAvatar
 * @param {String} title
 * @param {Boolean} showTitle
 * @param {String} titleColor
 * @param {String} background 
 * @param {String} password 
 * @param {String} theme
 * @param {String} description 
 * @param {Boolean} showDescription
 * @param {Boolean} showHeaderImage
 * @param {Boolean} stretchHeaderImage
 * @returns {Object} - An object of the editted blog
 */

const editBlog = async (req) => {
  try {
    const blogId = req.params.blogId;
    const accent = req.body.accent;
    const name = req.body.name;
    const headerImage = req.body.headerImage;
    const avatar = req.body.avatar;
    const title = req.body.title;
    const titleColor = req.body.titleColor;
    const background = req.body.background;
    const password = req.body.password;
    const theme = req.body.theme;
    const description = req.body.description;
    const showDescription = req.body.showDescription;
    const showAvatar=req.body.showAvatar;
    const showHeaderImage = req.body.showHeaderImage;
    const stretchHeaderImage=req.body.stretchHeaderImage;
    const showTitle = req.body.showTitle;
    let message = 'OK';
    const blog = await schema.blogs.findOne({
      $and: [{_id: blogId},
        {isDeleted: false}],
    });
    if (blog) {
      if(blog.showAvatar!=showAvatar)
      {
        blog.showAvatar=!blog.showAvatar;
      }
      if(blog.showDescription!=showDescription)
      {
        blog.showDescription=!blog.showDescription;
      }
      if(blog.showHeaderImage!=showHeaderImage)
      {
        blog.showHeaderImage=!blog.showHeaderImage;
      }
      if(blog.stretchHeaderImage!=stretchHeaderImage)
      {
        blog.stretchHeaderImage=!blog.stretchHeaderImage;
      }
      if(blog.showTitle!=showTitle)
      {
        blog.showTitle=!blog.showTitle;
      }
      if (password) {
        await schema.blogs.findOneAndUpdate({
          $and: [{_id: blogId},
            {isDeleted: false}],
        },{password:password});
      }
      if (theme) {
        blog.theme = theme;
      }
      if (description) {
        blog.description = description;
      }
      if (accent) {
        blog.accent = accent;
      }
      if (headerImage) {
        blog.headerImage = headerImage;
      }
      if (background) {
        blog.background = background;
      }
      if (avatar) {
        blog.avatar = avatar;
      }
      if (title) {
        blog.title = title;
      }
      if (titleColor) {
        blog.titleColor = titleColor;
      }
      if (name) {
        const anotherBlog = await schema.blogs.findOne({'name': name});

        if (!anotherBlog || anotherBlog._id == blogId) {
          if (blog.isPrimary) {
            const user = await schema.users
                .findOneAndUpdate({'name': blog.name});
            user.name = name;
          }
          blog.name = name;
        } else {
          message = 'URL is not available';
        }
      }
        blog.save();
      if (message === 'OK') {
        console.log(blog);
        return blog;
      } else {
        return message;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};
/**
 *
 * @function
 * @name retrieveBlog
 * @description    -  It retrieves a blog given its id
 * @param {String} blogId - Id of the blog
 * @return {Object} - A blog object
 */
const retrieveBlog = async (blogId) => {
  try {
    const blog = await schema.blogs.findOne({
      $and: [{_id: blogId},
        {isDeleted: false}],
    });
    if (blog) {
      return blog;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};
/* --------- <---> Random Blogs <---> ------ */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name retrieveRandomBlogs
 * @description This function gets random blogs for explore/checkout these blogs
 * 
 * @returns {Array}    - Array of blogs
 */

const retrieveRandomBlogs = async () => {
  const randomBlogs = await schema.blogs.find({isDeleted: false});
  randomBlogsLim =[];
  randomNumb= Math.floor(Math.random() * randomBlogs.length-10);
  for (let i=randomNumb; i<randomNumb+10; i++) {
    randomBlogsLim.push(randomBlogs[i]);
  }
  return randomBlogsLim;
};
/* =========== /// <==> End <==> ===========*/

/* ================= /// <==> Export User Functions <==> /// ================ */

module.exports = {
  blockBlog,
  unblockBlog,
  editBlog,
  retrieveBlog,
  retrieveRandomBlogs,
};
/* =========== /// <==> End <==> ===========*/
