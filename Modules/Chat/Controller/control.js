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
 * @param {Object} wordName - Holds the request body: wordName.
 *
 * @returns {Array} the array having 4 arrays.
 *                     - array 1: has the tags in posts with this regex
 *                     - array 2: posts with the tags
 *                     - array 3: has the blogs this regex
 *                     - array 4: has the posts with interested tags this regex
 */

const autoCompleteSearchDash = async (req, res) => {
  // req.query["term"]
  const regex= new RegExp(req.body.wordName, 'i');

  // gets all posts with the needed tag
  const searchTags= await schema.Posts.find(tagSpecified={tags: {$in: regex}});
  // gets all mention blogs with the regex
  const searchMentionBlogs= await schema.blogs.find({name: regex});
  // gets all posts with the followed tags
  const searchFollowedTag= await schema.blogs.find({followedTags: regex});

  const resultHashTag=[];
  const resultBlogs=[];
  const resultFollowedTag=[];
  // const resultPostHashTag=[];

  // store in result, the hash tags in posts
  searchTags.forEach((data) => {
    data.tags.forEach((semiData) => {
      if (semiData.match(regex)) {
        resultHashTag.push(semiData);
      }
    });
  });

  // store in result, the blogs
  searchMentionBlogs.forEach((data) => {
    resultBlogs.push(data);
  });

  // store in result, the blogs
  searchFollowedTag.forEach((data) => {
    resultFollowedTag.push(data);
  });

  // store in result, the posts with hash tags
  // searchTags.forEach((data) => {
  //   resultPostHashTag.push(data);
  // });

  // store all results in array and send it to front
  const result=[resultHashTag,
    // resultPostHashTag, 
    resultBlogs, resultFollowedTag];
  console.log('result: ', result);
  res.json(result);
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
