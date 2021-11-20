// ////////////////////////////////////////////////////
// / <==> /// This File Contains Post APIs /// <==> ///
// ////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// =============== */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const postFunctions = require('../Controller/control');
const postJoi = require('../Joi/joi');
const cmMidwReqValidate = '../../../Common/Middlewares/requestValidation';
const validateRequest = require(cmMidwReqValidate);
// const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
// const postEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User APIs <==> /// ====================== */

/* ----------- <---> Create Post <---> ----------- */
router.post('/:blogId/posts/create_post',
    validateRequest(postJoi.createPostValidations),
    // isAuthorized(postEndPoints.createPost),
    postFunctions.createPost,
);


/* ----------- <---> Show Post <---> ----------- */
router.get('/posts/:postId/show_post',
    // validateRequest(postJoi.showPostValidations),
    // isAuthorized(postEndPoints.createPost),
    postFunctions.showPost,
);
/* =========== /// <==> End <==> ===========*/

/* =================== /// <==> Export Post APIs <==> /// =================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
