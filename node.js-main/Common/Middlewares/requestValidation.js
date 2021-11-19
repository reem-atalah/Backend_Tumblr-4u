// //////////////////////////////////////////////////////////////////////////
// / <==> /// This File Contains Function That Validate Requests /// <==> ///
// //////////////////////////////////////////////////////////////////////////

/* ============= /// <==> Variables Declaration <==> /// ================== */
const {StatusCodes} = require('http-status-codes');
/* =========== /// <==> End <==> ===========*/

/* ================= /// <==> Validate Request Fucntion <==> /// ============ */
const ValidateRequest = (schema) => {
  return (request, response, next) => {
    try {
      const validationErorrs = [];
      [('headers', 'params', 'query', 'body')].forEach((key) => {
        const validation = schema[key].validate(request[key]);
        if (validation.error) {
          const MSG=validation.error.details[0].message.split('\"');
          validationErorrs.push(MSG.join());
        }
      });

      if (validationErorrs.length) {
        response.status(StatusCodes.BAD_REQUEST).json(validationErorrs[0]);
        console.log('Error in Sent Request');
      } else {
        next();
      }
    } catch (error) {
      console.log('Error In Validate Request Function');
      const ERROR='Error In blockBlog Function (<:>)';
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ERROR);
    }
  };
};
/* =========== /// <==> End <==> ===========*/

/* =========== /// <==> Export Validate Request Function <==> /// =========== */
module.exports = ValidateRequest;
/* =========== /// <==> End <==> ===========*/
