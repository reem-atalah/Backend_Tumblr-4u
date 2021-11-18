// ///////////////////////////////////////////////////////////
// /// <==> /// This File Contains User Functions /// <==> ///
// ///////////////////////////////////////////////////////////

// /* ====================== /// <==> Variables Declaration <==> /// ====================== */
const searchSchema = require('../Model/model');
const { StatusCodes } = require('http-status-codes');

/* ====================== /// <==> Calling Connection Function OF Database <==> /// ====================== */
const mongoose = require('mongoose');
// const { name } = require('faker');
/* =========== /// <==> End <==> ===========*/ 

const Connection = async() => {
    await mongoose.connect(process.env.CONNECTIONSTRING, {}).then(
        (result) => { console.log('Database Connection Is Done'); }).catch(
        (error) => { console.log('Error In Database Connection'); }
    );
};

// /* =========== /// <==> End <==> ===========*/
 
// /* ====================== /// <==> Search Functions <==> /// ====================== */

/* ----------- <---> AutoComplete <---> ----------- */ // *** <===> Done <===>  *** //
//could be used by front
function search() {
    
    $( "#search" ).autocomplete({
      source: function(req,res){
        $.ajax({
          url:"/autocomplete/",
          // dataType:"jsonp",
          contentType: 'application/json; charset=utf-8',
          data: req,
          // dataType: 'text json',
          success: function (data) {
            // console.log(data);
            res(data);
          },
          error: function (xhr,err) {
            var errorMessage = xhr.status + ': ' + xhr.statusText;
            // alert('Error - ' + errorMessage);
            console.log(err.status);
          }
        });
      },
      
     minLength:1,
     select: function (event,ui) {
      console.log("fine,now what");
       if(ui.item){
        $( "#search" ).text(ui.item.label);
       }
       console.log("fine,now what");
     }
    });
    
}; 

//fakes frequent/past_used words
// 1. tags followed, at the beginning (done)
// 2. hashtags autocomplete from search (done)
// 3. mention blogs autocomplete from search (done)

const autoCompleteSearchDash = async(data,req,res) => {
    //req.query["term"]
      var regex= new RegExp(data,'i');
      console.log(regex);
      // gets all posts with the needed tag
      var searchHashTags=await searchSchema.posts.find(tagSpecified={tags:{$in: regex}});
      // gets all mention blogs with the regex
      var searchMentionBlogs=await searchSchema.blogs.find({name: regex});
      // gets all posts with the followed tags
      var searchFollowedTags=await searchSchema.blogs.find({followedTags: regex});
      
      //store results of needed tag
      var resultHashTag=[]; 
      //store results of blogs
      var resultBlogs=[]; 
      //store results of blogs
      var resultFollowedTag=[]; 

      //store in result, the hash tags
      searchHashTags.forEach(data => {
            data.tags.forEach(semiData => {
                if(semiData.match(regex))
                {
                  resultHashTag.push(semiData);
                }
            })
        })

      //store in result, the blogs
      searchMentionBlogs.forEach(data => {
        resultBlogs.push(data);
      })

      //store in result, the blogs
      searchFollowedTags.forEach(data => {
        resultFollowedTag.push(data);
      })

        //store all results in array 
        var result=[resultHashTag,resultBlogs,resultFollowedTag]; 
        console.log("result: ", result);
        res.jsonp(result);
        res.status(StatusCodes.OK).json('No errors');
        return result;
};

// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Export User Functions <==> /// ====================== */
module.exports = {
  autoCompleteSearchDash
};
// /* =========== /// <==> End <==> ===========*/