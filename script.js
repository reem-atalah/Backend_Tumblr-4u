/* eslint-disable linebreak-style */
// //////////////////////////////////////////////////////////
// / <==> /// This File Is The Start Point OF The Project /// <==> ///
// //////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ============= */
const express = require('express');
const server = express();
const dotenv = require('dotenv');
const connection = require('./Configurations/configuration');
const searchDashboard=require('./Modules/Search/Search dashborad/Routes/APIs');
const userRoutes = require('./Modules/Users/Routes/APIs');
const blogRoutes = require('./Modules/Blogs/Routes/APIs');
const postRoutes = require('./Modules/Posts/Routes/APIs');
const cors =require('cors');

const passport = require('passport');
require('./Common/passport-setup/passport-setup');

server.use(passport.initialize());
server.use(passport.session());

// const seed= require('./Configurations/seed_db');


/* =========== /// <==> End <==> ===========*/

/* ========== /// <==> Calling Config Function OF dotenv <==> /// =========== */
dotenv.config();
/* =========== /// <==> End <==> ===========*/

/* ========= /// <==> Calling Connection Function OF Database <==> /// ====== */
connection();
/* =========== /// <==> End <==> ===========*/

/* =========== /// <==> End <==> ===========*/
server.use(cors());
/* ====================== /// <==> MiddleWares <==> /// ============= */
server.use(express.json());
server.use(searchDashboard);
server.use(userRoutes);
server.use(blogRoutes);
server.use(postRoutes);
server.use(express.json());
server.use(express.urlencoded({extended: false}));


// seed.seedDB();

/* ================= /// <==> Listen Server To Port <==> /// =============== */
const app = server.listen(process.env.PORT, () => {
  console.log('Server Is Built (:');
});
module.exports = app;
/* =========== /// <==> End <==> ===========*/
