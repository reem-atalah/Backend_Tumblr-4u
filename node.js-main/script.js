/////////////////////////////////////////////////////////////////////
/// <==> /// This File Is The Start Point OF The Project /// <==> ///
/////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const server = express();
const dotenv = require('dotenv');
const Connection = require('./Configurations/configuration');
const SEARCH_DASHBOARD=require('./Modules/Search/Search dashborad/Routes/APIs');
const SEARCH_CONTROL = require('./Modules/Search/Search dashborad/Controller/control');
const SEARCH_SEED= require('./Configurations/seed_db');
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
// server.use(express.static(path.join(__dirname, 'public')));
/* =========== /// <==> End <==> ===========*/

// SEARCH_SEED.seedDB();
// SEARCH_CONTROL.autoCompleteSearchDash();

server.get('/', async(request, response) => {
    //request.query["term"]
    var regex= new RegExp('kem','i');

      var tagSpecified;
      var searchHashTags=await SEARCH_SCHEMA.POSTS.find(tagSpecified={tags:{$in: regex}});
      // gets all posts with the needed tag

      var result=[]; 
      searchHashTags.forEach(data => {
            data.tags.forEach(semiData => {
                if(semiData.match(regex))
                {
                    // console.log("semiData: ",semiData);
                    result.push(semiData);
                }
            })
        })
        response.jsonp(result);
});

/* ====================== /// <==> Listen Server To Port <==> /// ====================== */
server.listen(process.env.PORT, () => {
    console.log('Server Is Built (:');
});
/* =========== /// <==> End <==> ===========*/