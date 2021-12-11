// // //////////////////////////////////////////////////////////////////////////
// //  <==> This File Contains Function That Validate Requests <==> ////
// // //////////////////////////////////////////////////////////////////////////

// /* ============= /// <==> Variables Declaration <==> /// ================ */
// const {StatusCodes} = require('http-status-codes');
// /* =========== /// <==> End <==> ===========*/

// /* ============= /// <==> Validate req Fucntion <==> /// ================ */
// /**
//  * This Function Checks Validity OF Sent Request.
//  *
//  * @param {string} schema - schema
//  *
//  * @returns {object} - { Object }
//  */

// const ValidateRequest = (schema) => {
//   return (req, res, next) => {
//     try {
//       const validationErorrs = [];
//       [('headers', 'params', 'query', 'body')].forEach((key) => {
//         const validation = schema[key].validate(req[key]);
//         if (validation.error) {
//           const valMesg=validation
// .error
// .details[0]
// .message
// .split('\"')
// .join();
//           validationErorrs.push(valMesg);
//         }
//       });

//       if (validationErorrs.length) {
//         res.status(StatusCodes.BAD_REQUEST).json({
//           'meta': {
//             'status': 400,
//             'msg': 'BAD_REQUEST',
//           },

//           'res': {
//             'error': validationErorrs[0],
//             'data': '',
//           },
//         });
//         console.log('Error in Sent Request');
//       } else {
//         next();
//       }
//     } catch (error) {
//       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//         'meta': {
//           'status': 400,
//           'msg': 'BAD_REQUEST',
//         },

//         'res': {
//           'error': 'Error In Validate Request Function',
//           'data': '',
//         },
//       });
//     }
//   };
// };
// /* =========== /// <==> End <==> ===========*/

// /* =========== /// <==> Export Validate req Function <==> /// =========== */
// module.exports = ValidateRequest;
// /* =========== /// <==> End <==> ===========*/

// /////////////////////////////////////////////////////////////////////////////
//  <==> This File Contains Function That Validate Requests <==> ////
// /////////////////////////////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================ */
const {StatusCodes} = require('http-status-codes');
/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Validate req Fucntion <==> /// ================ */
const ValidateRequest = (schema) => {
  return (req, res, next) => {
    try {
      const validationErorrs = [];
      [('headers', 'params', 'query', 'body')].forEach((key) => {
        const validation = schema[key].validate(req[key]);
        if (validation.error) {
          const valMesg=validation.error.details[0].message.split('\"').join();
          validationErorrs.push(valMesg);
        }
      });

      if (validationErorrs.length) {
        res.status(StatusCodes.BAD_REQUEST).json(validationErorrs[0]);
        console.log('Error in Sent req');
      } else {
        next();
      }
    } catch (error) {
      console.log('Error In Validate req Function');
      const msg='Error In Validate req Function';
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(msg);
    }
  };
};
/* =========== /// <==> End <==> ===========*/

/* ============= /// <==> Export Validate req Function <==> /// ============= */
module.exports = ValidateRequest;
/* =========== /// <==> End <==> ===========*/
