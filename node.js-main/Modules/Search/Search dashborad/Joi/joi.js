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
      wordName: joi.string().required(),
    }),
  },
};
/* =========== /// <==> End <==> ===========*/

/* ============ /// <==> Exports Search Joi Validations <==> /// ============ */
module.exports = searchJoi;
/* =========== /// <==> End <==> ===========*/
