/////////////////////////////////////////////////////////////////////
/// <==> /// This File Is The Start Point OF The Project /// <==> ///
/////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const server = express();
const dotenv = require('dotenv');
const Connection = require('./Configurations/configuration');
const userRoutes = require('./Modules/Users/Routes/APIs');
const postRoutes = require('./Modules/Posts/Routes/APIs');
const reportRoutes = require('./Modules/Report/Routes/APIs');
const advertisingRoutes = require('./Modules/Advertising/Routes/APIs');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Calling Config Function OF dotenv <==> /// ====================== */
dotenv.config();
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Calling Connection Function OF Database <==> /// ====================== */
Connection();
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> MiddleWares <==> /// ====================== */
server.use(express.json());
server.use(userRoutes);
server.use(postRoutes);
server.use(reportRoutes);
server.use(advertisingRoutes);
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Listen Server To Port <==> /// ====================== */
server.listen(process.env.PORT, () => {
    console.log('Server Is Built (:');
});
/* =========== /// <==> End <==> ===========*/