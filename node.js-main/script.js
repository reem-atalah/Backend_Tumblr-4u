/////////////////////////////////////////////////////////////////////
/// <==> /// This File Is The Start Point OF The Project /// <==> ///
/////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const server = express();
const dotenv = require('dotenv');
const Connection = require('./Configurations/configuration');
const searchDashboard=require('./Modules/Search/Search dashborad/Routes/APIs');
const searchControl = require('./Modules/Search/Search dashborad/Controller/control');
const searchSeed= require('./Configurations/seed_db');
// const searchSchema = require('./Modules/Search/Search dashborad/Model/model');


/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Calling Config Function OF dotenv <==> /// ====================== */
dotenv.config();
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Calling Connection Function OF Database <==> /// ====================== */
Connection();
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> MiddleWares <==> /// ====================== */
server.use(express.json());
server.use(searchDashboard);
server.use(express.json());
server.use(express.urlencoded({extended: false}))
/* =========== /// <==> End <==> ===========*/

// searchSeed.seedDB();
// searchControl.autoCompleteSearchDash();

/* ====================== /// <==> Listen Server To Port <==> /// ====================== */
server.listen(process.env.PORT, () => {
    console.log('Server Is Built (:');
});
/* =========== /// <==> End <==> ===========*/