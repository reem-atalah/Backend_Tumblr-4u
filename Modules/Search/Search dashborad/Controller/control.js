/* eslint-disable linebreak-style */
// ///////////////////////////////////////////////////////////
// /// <==> /// This File Contains Search Functions /// <==> ///
// ///////////////////////////////////////////////////////////
// /**
//  * Search module
//  * @module searchDashboard
//  */
// /* =============== /// <==> Variables Declaration <==> /// =============== */
const schema = require('../../../../Model/model');
const BreakException = {};
/* ======= /// <==> Calling Connection Function OF Database <==> /// ======== */
const mongoose = require('mongoose');
/* =========== /// <==> End <==> ===========*/

async () => {
  await mongoose.connect(process.env.CONNECTIONSTRING, {}).then(
      (result) => {
        console.log('Database Connection Is Done');
      }).catch(
      (error) => {
        console.log('Error In Database Connection');
      },
  );
};

// /* =========== /// <==> End <==> ===========*/

// /* =================== /// <==> Search Functions <==> /// ================ */

/* ----------- <---> AutoComplete Search Dashboard <---> ----------- */

/**
 * @function
 * @name  autoCompleteSearchDash
 * @description Gets interests of the user
 * @param {String} userEmail -get email of the user
 *
 *
 * @returns {Array} Result array have 2 arrays.
 *                     - array 1: has the tags followed by the user
 *                     - array 2: posts for the tags followed by the user

 */
// use "npm run doc" to make function documentation

const autoCompleteSearchDash = async (userEmail) => {
  // get userId
  const user = await schema.users.find({email: userEmail});
  if (user.isDeleted == true) {
    return null;
  }

  const userId = user[0]._id;
  await schema.users.findOneAndUpdate({$and: [{email: userEmail},
    {isVerified: true}]}, {isDeleted: false});

  let result = [];

  // if (!wordName || wordName==null ) {
  // if there's no word then retrieve interested tags
  const resultFollowedTag=[];
  const resultPostHashTag=[];
  // const totalResultPostHashTag=[];

  // gets all posts with the followed tags
  const searchFollowedTag= await schema.users.find({_id: userId});
  const searchPostFollowedTag= await schema.Posts.find();
  // store in result, the blogs
  searchFollowedTag.forEach(async (data) => {
    // he gets me the user, now get the followedTags
    await data.followedTags.forEach(async (followedTag) => {
      resultFollowedTag.push(followedTag);
      try {
        // resultPostHashTag.push(followedTag);
        searchPostFollowedTag.forEach((dataPosts) => {
          dataPosts.tags.forEach((tag)=>{
            if (tag == followedTag) {
              resultPostHashTag.push(dataPosts);
              throw BreakException;
            }
          });
        });
      } catch (e) {
        // console.log('error..', e);
        if (e !== BreakException) throw e;
      }
      // totalResultPostHashTag.push(resultPostHashTag);
    });
  });
  // console.log('resultPostHashTag: ', resultPostHashTag);
  result={
    resultFollowedTag: resultFollowedTag,
    resultPostHashTag: resultPostHashTag,
  };
  return result;
  // }
};

/* -------- <---> AutoComplete Search Dashboard with word <---> ----------- */

/**
 * @function
 * @name  autoCompleteSearchDashWord
 * @description Applies search on posts/tags/blogs
 * @param {String} wordName - Holds the request body: wordName to search with.
 *
 *
 * @return {Array} Result array have 3 arrays.
 *                     - array 1: has the tags in posts with this regex
 *                     - array 2: posts with the tags with this regex
 *                     - array 3: has the blogs this regex

 */
const autoCompleteSearchDashWord = async (wordName) =>{
  const regex= new RegExp(wordName, 'i');
  // gets all posts with the needed tag
  const searchTags= await schema.Posts.find(tagSpecified={tags: {$in: regex}});
  // gets all mention blogs with the regex
  const searchMentionBlogs= await schema.blogs.find({name: regex});

  const resultHashTag=[];
  const resultBlogs=[];
  const resultPostHashTag=[];

  const same=[];
  // store in result, the hash tags
  // store in result, the posts with hash tags
  searchTags.forEach((data) => {
    data.tags.forEach((semiData) => {
      if (semiData.match(regex)) {
        if (same.includes(semiData)) {
          // console.log('then what?');
        } else {
          resultHashTag.push(semiData);
          same.push(semiData);
        }
        // console.log('same: ', same);
        resultPostHashTag.push(data);
      }
    });
  });

  // store in result, the blogs
  searchMentionBlogs.forEach((data) => {
    resultBlogs.push(data);
  });

  // store all results in array and send it to front
  result={
    resultHashTag: resultHashTag,
    resultPostHashTag: resultPostHashTag,
    resultBlogs: resultBlogs,
    // resultFollowedTag: resultFollowedTag,
  };
  // console.log('resultPostHashTag: ', result.resultHashTag);
  // res.json(result);
  return result;
};

/**
 * @function
 * @name  search
 * @description could be used as a javascript code by front
 *
 */
function search() {
  $( '#search' ).autocomplete({
    source: function(req, res) {
      $.ajax({
        url: 'localhost:3000/autocomplete/',
        // dataType:"jsonp",
        contentType: 'application/json; charset=utf-8',
        data: req,
        // dataType: 'text json',
        success: function(data) {
          // console.log(data);
          res(data);
        },
        error: function(xhr, err) {
          const errorMessage = xhr.status + ': ' + xhr.statusText;
          alert('Error - ' + errorMessage);
          console.log(err.status);
        },
      });
    },

    minLength: 1,
    select: function(event, ui) {
      console.log('fine,now what');
      if (ui.item) {
        $( '#search' ).text(ui.item.label);
      }
      console.log('fine,now what');
    },
  });
};

// /* =========== /// <==> End <==> ===========*/

// /* ============= /// <==> Export Search Functions <==> /// =============== */
module.exports = {
  autoCompleteSearchDash,
  autoCompleteSearchDashWord,
  search,
};
// /* =========== /// <==> End <==> ===========*/
