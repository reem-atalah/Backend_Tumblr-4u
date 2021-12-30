/////////////////////////////////////////////////////////////////////
/// <==> /// This File Is The Start Point OF The Project /// <==> ///
/////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const server = express();
const dotenv = require('dotenv');
const Connection = require('./Configurations/configuration');
const SEARCH_DASHBOARD=require('./Modules/Search/Search dashborad/Routes/APIs');
const SEARCH_SCHEMA = require('./Modules/Search/Search dashborad/Model/model');

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Calling Config Function OF dotenv <==> /// ====================== */
dotenv.config();
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Calling Connection Function OF Database <==> /// ====================== */
Connection();
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> MiddleWares <==> /// ====================== */
server.use(express.json());
server.use(SEARCH_DASHBOARD);
server.use(express.json());
server.use(express.urlencoded({extended: false}))
server.use(express.static(path.join(__dirname, 'public')));
/* =========== /// <==> End <==> ===========*/

server.get('/', async(request, response) => {
    
    var regex= new RegExp(request.query["term"],'i');
    console.log("regex: ",regex);

      var tagSpecified;
      var searchHashTags=SEARCH_SCHEMA.POSTS.find(tagSpecified={tags:{$in: regex}},{'Word':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(10);
      // gets all posts with the needed tag
      searchHashTags.exec(function (err,data) {
          // result array will have all tags needed from each post
          var result=[];
          if(!err)
          {
              if(data && data.length && data.length>0)
              {
                  data.forEach(searchHashTag=>{
                      let obj={
                          label: tagSpecified,
                          post_url: searchHashTag.post_url
                      };
                      result.push(obj);
                  });
              }
              console.log("result: ",result);
              response.jsonp(result);
          }
      });
});

/* ====================== /// <==> Listen Server To Port <==> /// ====================== */
server.listen(process.env.PORT, () => {
    console.log('Server Is Built (:');
});
/* =========== /// <==> End <==> ===========*/