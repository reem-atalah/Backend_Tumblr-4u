/* eslint-disable linebreak-style */
// //////////////////////////////////////////////////////
// /// <==> /// This File Contains Search APIs /// <==> ///
// //////////////////////////////////////////////////////

// /* =============== /// <==> Variables Declaration <==> /// ============== */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const seachDashboard = require('../Controller/control');
const searchJoi = require('../Joi/joi');
const cmMidwReqValidate= '../../../../Common/Middlewares/requestValidation';
const validateRequest = require(cmMidwReqValidate);
const isAuthorized = require('../../../../Common/Middlewares/isAuthorized');
const searchEndPoints = require('../endPoints');
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Search APIs <==> /// ================= */

router.get('/autoCompleteSearchDash/:wordName',
    validateRequest(searchJoi.searchValidations),
    // isAuthorized(searchEndPoints.getSearchDash),// no need for authentication
    async (req, res)=>{
      result=await seachDashboard
          .autoCompleteSearchDashWord(req.params.wordName);
      if (result == null) {
        res.status(StatusCodes.NOT_FOUND).json({
          'meta': {
            'status': 404,
            'msg': 'NOT FOUND',
          },

          'res': {
            'message': 'User Is Deleted',
            'data': '',
          },
        });
      }
      res.json(result);
    },
);

router.get('/autoCompleteSearchDash',
    validateRequest(searchJoi.searchValidations),
    isAuthorized(searchEndPoints.getSearchDash),
    async (req, res)=>{
      result=await seachDashboard
          .autoCompleteSearchDash(req.decoded.email);
      if (result == null) {
        res.status(StatusCodes.NOT_FOUND).json({
          'meta': {
            'status': 404,
            'msg': 'NOT FOUND',
          },

          'res': {
            'message': 'User Is Deleted',
            'data': '',
          },
        });
      }
      res.json(result);
    },
);

// /* =========== /// <==> End <==> ===========*/

// /* ================= /// <==> Export User APIs <==> /// ================= */
module.exports = router;
// /* =========== /// <==> End <==> ===========*/
