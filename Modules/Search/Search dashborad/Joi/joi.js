/* eslint-disable linebreak-style */
// ///////////////////////////////////////////////////////////////
// / <==> /// This File Contains Search Joi Validations /// <==> ///
// ///////////////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================= */
const joi = require('joi');
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Search Joi Validations <==> /// ================= */
const searchJoi = {
  searchValidations: {
    body: joi.object().required().keys({
      wordName: joi.string().optional(),
    }),
  },
};
/* =========== /// <==> End <==> ===========*/

/* ============ /// <==> Exports Search Joi Validations <==> /// ============ */
module.exports = searchJoi;
/* =========== /// <==> End <==> ===========*/
