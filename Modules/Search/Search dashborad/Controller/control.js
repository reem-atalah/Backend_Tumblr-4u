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
 * @description Applies search on posts/tags
 * @param {Object} userId -get id of the user
 * @param {Object} wordName - Holds the request body: wordName.
 *
 *
 * @returns {Array} Result array have 4 arrays.
 *                     - array 1: has the tags in posts with this regex
 *                     - array 2: posts with the tags with this regex
 *                     - array 3: has the blogs this regex
 *                     - array 4: has the posts with interested tags this regex

 */
// use "npm run doc" to make function documentation

const autoCompleteSearchDash = async (userId, wordName) => {
  let result = [];

  if (!wordName) {
    // if there's no word then retrieve interested tags
    const resultFollowedTag=[];

    // gets all posts with the followed tags
    const searchFollowedTag= await schema.users.find({_id: userId});

    // store in result, the blogs
    searchFollowedTag.forEach((data) => {
    // he gets me the user, now get the followedTags
      data.followedTags.forEach((folloedTag) => {
        resultFollowedTag.push(folloedTag);
      });
    });

    result={
      resultFollowedTag: resultFollowedTag,
    };
    return result;
  }

  const regex= new RegExp(wordName, 'i');
  // gets all posts with the needed tag
  const searchTags= await schema.Posts.find(tagSpecified={tags: {$in: regex}});
  // gets all mention blogs with the regex
  const searchMentionBlogs= await schema.blogs.find({name: regex});

  const resultHashTag=[];
  const resultBlogs=[];
  const resultPostHashTag=[];

  // store in result, the hash tags
  // store in result, the posts with hash tags
  searchTags.forEach((data) => {
    data.tags.forEach((semiData) => {
      if (semiData.match(regex)) {
        resultHashTag.push(semiData);
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
  search,
};
// /* =========== /// <==> End <==> ===========*/
