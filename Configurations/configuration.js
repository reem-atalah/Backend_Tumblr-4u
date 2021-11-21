/* eslint-disable linebreak-style */
// /////////////////////////////////////////////////////////////////////
// / <==> /// This File Contains Configurations OF Database /// <==> ///
// /////////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// =============== */
/**
 * This Function Used To Connect With Database.
 *
 * @returns {string} - Database Connection Is Done
 */

const mongoose = require('mongoose');
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Variables Declaration <==> /// =============== */
const Connection = async () => {
  await mongoose.connect(process.env.CONNECTIONSTRINGATLAS, {}).then(
      (result) => {
        console.log('Database Connection Is Done');
      }).catch(
      (error) => {
        console.log('Error In Database Connection');
      },
  );
};
/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Export Connection Function <==> ///  ============= */
module.exports = Connection;
/* =========== /// <==> End <==> ===========*/
