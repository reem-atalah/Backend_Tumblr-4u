// //////////////////////////////////////////////////////////
// / <==> /// This File Is The Start Point OF The Project /// <==> ///
// //////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ============= */
const express = require('express');
const server = express();
const dotenv = require('dotenv');
const connection = require('./Configurations/configuration');
const searchDashboard=require('./Modules/Search/Search dashborad/Routes/APIs');
// const searchSeed= require('./Configurations/seed_db');


/* =========== /// <==> End <==> ===========*/

/* ========== /// <==> Calling Config Function OF dotenv <==> /// =========== */
dotenv.config();
/* =========== /// <==> End <==> ===========*/

/* ========= /// <==> Calling Connection Function OF Database <==> /// ====== */
connection();
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> MiddleWares <==> /// ============= */
server.use(express.json());
server.use(searchDashboard);
server.use(express.json());
server.use(express.urlencoded({extended: false}));
/* =========== /// <==> End <==> ===========*/

// searchSeed.seedDB();

/* ================= /// <==> Listen Server To Port <==> /// =============== */
const app = server.listen(process.env.PORT, () => {
  console.log('Server Is Built (:');
});
module.exports = app;
/* =========== /// <==> End <==> ===========*/
