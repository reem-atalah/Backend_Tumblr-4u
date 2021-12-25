/* eslint-disable linebreak-style */
// ////////////////////////////////////////////////////
// / <==> /// This File Contains Post APIs /// <==> ///
// ////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// =============== */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const postFunctions = require('../Controller/control');
const {StatusCodes} = require('http-status-codes');
const postJoi = require('../Joi/joi');
const cmMidwReqValidate = '../../../Common/Middlewares/requestValidation';
const validateRequest = require(cmMidwReqValidate);
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const postEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User APIs <==> /// ====================== */

/* ----------- <---> Upload data <---> ----------- */
router.post('/:blogId/posts/data',
    // validateRequest(postJoi.uploadImgValidations),
    // isAuthorized(postEndPoints.uploadeImg),
    async (req, res) => {
      // console.log(req.files);
      result= await postFunctions.uploadImgg();
      // console.log('result: ', result);
      res.json(result);
    });

/* ----------- <---> Upload Img <---> ----------- */
router.post('/:blogId/posts/uploadImg',
    // validateRequest(postJoi.uploadImgValidations),
    isAuthorized(postEndPoints.uploadeImg),
    async (req, res) => {
      // console.log(req.files);
      result= await postFunctions.uploadImg(req, req.body.files);
      console.log('result: ', result);
      res.json(result);
    });


/* ----------- <---> Random Posts <---> ----------- */
// no validation, no authentication
router.get('/ranPosts',
    async (req, res) => {
      result= await postFunctions.retrieveRandomPosts();
      console.log('result: ', result.length);
      res.json(result);
    });

/* ----------- <---> Trending Posts <---> ----------- */
// no validation, no authentication
router.get('/trendPosts',
    async (req, res) => {
      result= await postFunctions.retrieveTrendingPosts();
      console.log('result: ', result);
      res.json(result);
    });

/* ----------- <---> Create Post <---> ----------- */
router.post('/:blogId/posts/create_post',
    validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.createPost),
    (req, res) => {
      postFunctions.createPost(req.params.blogId,
          req.body.postHtml, req.body.type, req.body.state, req.body.tags).then((ret) => {
        if (ret[0] === 'Post Created Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'messege': ret[0],
              'Post Id': ret[1],
            },
          });
        } else if (ret[0] === 'Error in Create Post Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret[0]);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret[0]);
        };
      });
    });


/* ----------- <---> Show Post <---> ----------- */
router.get('/posts/:postId/show_post',
    validateRequest(postJoi.showPostValidations),
    isAuthorized(postEndPoints.showPost),
    (req, res) => {
      postFunctions.showPost(req.params.postId).then((ret) => {
        if (ret[0] === 'Post Returned Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'messege': ret[0],
              'Post Content': ret[1],
            },
          });
        } else if (ret[0] === 'Error in Show post Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret[0]);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret[0]);
        };
      });
    },
);

/* ----------- <---> Comment on a Post <---> ----------- */
router.put('/:blogId/:postId/comment',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.makeComment),
    (req, res) => {
      postFunctions.makeComment(req.params.blogId,
          req.params.postId, req.body.text).then((ret) => {
        if (ret[0] === 'Comment Posted Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'messege': ret[0],
              'commend Id': ret[1],
            },
          });
        } else if (ret[0] === 'Error in Make Comment Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret[0]);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret[0]);
        };
      });
    },
);


/* ----------- <---> Like a Post <---> ----------- */
router.put('/:blogId/:postId/like_press',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.likePress),
    (req, res) => {
      postFunctions.likePress(req.params.blogId, req.params.postId).then((ret) => {
        if (ret === 'Post Liked Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Post Unliked Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error In Press Like Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    },
);

/* ----------- <---> Reblog a Post <---> ----------- */
router.put('/:blogId/:postId/reblog_post',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.reblogPost),
    (req, res) => {
      postFunctions.reblogPost(req.params.blogId,
          req.params.postId, req.body.text).then((ret) => {
        if (ret[0] === 'Post Reblogged Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'messege': ret[0],
              'Reblog Id': ret[1],
            },
          });
        } else if (ret[0] === 'Error in Reblog Post Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret[0]);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret[0]);
        };
      });
    },
);

/* ----------- <---> Remove a comment <---> ----------- */
router.delete('/:postId/:commentId/remove_comment',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.removeComment),
    (req, res) => {
      postFunctions.removeComment(req.params.postId, req.params.commentId).then((ret) => {
        if (ret === 'Comment Removed Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error In Remove Comment Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    },
);

/* ----------- <---> Delete a reboged Post <---> ----------- */
router.delete('/:postId/:reblogId/remove_reblog',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.removeReblog),
    (req, res) => {
      postFunctions.removeReblog(req.params.postId, req.params.reblogId).then((ret) => {
        if (ret === 'Reblog Removed Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error In Remove Reblog Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    },
);

/* ----------- <---> Get Post Notes <---> ----------- */
router.get('/posts/:postId/notes',
    // validateRequest(postJoi.showPostValidations),
    isAuthorized(postEndPoints.getNotes),
    (req, res) => {
      postFunctions.getNotes(req.params.postId).then((ret) => {
        if (ret.msg === 'Notes Got Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'messege': ret.msg,
              'notes': ret.notes,
            },
          });
        } else if (ret.msg === 'Error In Get Notes Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret.msg);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret.msg);
        };
      });
    },
);

/* ----------- <---> Get User Dashboard <---> ----------- */
router.get('/dashboard',
    isAuthorized(postEndPoints.getDashboard),
    (req, res) => {
      postFunctions.getDashboard(req.decoded.email).then((ret) => {
        // console.log('req.decoded.email: ', req.decoded.email);
        if (ret.msg === 'Dashboard Got Successfully') {
          // console.log('ret.user: ', ret.user);
          res.status(StatusCodes.OK).json({
            'res': {
              'messege': ret.msg,
              'user': ret.user,
              'blog': ret.blog,
              'postsToShow': ret.postsToShow,
            },
          });
        } else if (ret.msg === 'Error In Get Dashboard Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret.msg);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret.msg);
        };
      });
    },
);
/* ----------- <---> Get Blog Posts <---> ----------- */
router.get('/blog/:blogId/getBlogPosts',
    isAuthorized(postEndPoints.getBlogPosts),
    (req, res) => {
      postFunctions.getBlogPosts(req.params.blogId).then((ret) => {
        if (ret.msg === 'Blog Posts Got Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'messege': ret.msg,
              'blog': ret.blog,
              'postsToShow': ret.postsToShow,
            }
          });
        } else if (ret.msg === 'Error In Get Blog Posts Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret.msg); 
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret.msg);
        };
      });
    },
);
/* ----------- <---> Delete a Post <---> ----------- */
router.delete('/posts/:postId/delete_post',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.deletePost),
    (req, res) => {
      postFunctions.deletePost(req.params.postId, req.params.reblogId).then((ret) => {
        if (ret === 'Post Deleted Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error In Delete Post Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    },
);

/* ----------- <---> Edit a Post <---> ----------- */
router.put('/:postId/:reblogId/remove_reblog',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.removeReblog),
    (req, res) => {
      postFunctions.removeReblog(req.params.postId, req.params.reblogId).then((ret) => {
        if (ret === 'Reblog Removed Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error In Remove Reblog Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    },
);
/* =========== /// <==> End <==> ===========*/

/* =================== /// <==> Export Post APIs <==> /// =================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
