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
const fileUpload = require('express-fileupload');

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User APIs <==> /// ====================== */

/* ----------- <---> Upload stream <---> ----------- */
router.post('/uploadLocal',
    // validateRequest(postJoi.uploadImgValidations),
    // isAuthorized(postEndPoints.uploadStream),
    async (req, res) => {
      result = await postFunctions.uploadLocalImg(req.files);
      console.log('result: ', result);
      res.json(result);
    });

/* ----------- <---> Upload stream <---> ----------- */
router.post('/uploadStream',
    // validateRequest(postJoi.uploadImgValidations),
    // isAuthorized(postEndPoints.uploadStream),
    async (req, res) => {
      result = await postFunctions.uploadStream(req.files);
      console.log('result: ', result);
      res.json(result);
    });
/* ----------- <---> Upload data <---> ----------- */
router.post('/data',
    // validateRequest(postJoi.uploadImgValidations),
    // isAuthorized(postEndPoints.uploadeImg),
    async (req, res) => {
      // console.log(req.files);

      result= await postFunctions.uploadImgg();
      // console.log('result: ', result);
      res.json(result);
    });

/* ----------- <---> Upload Img Base64 <---> ----------- */
router.post('/uploadImg',
    //validateRequest(postJoi.uploadImgValidations),
    isAuthorized(postEndPoints.uploadeImg),
    async (req, res) => {
      console.log('req.body: ', req.body.file.length);
      result= await postFunctions.uploadImgBase(req.body.file);
      result={
        images: result,
      };
      console.log('result: ', result);
      res.json(result);
    });


/* ----------- <---> Random Posts <---> ----------- */
// no validation, no authentication
router.get('/ranPosts',
    async (req, res) => {
      result= await postFunctions.retrieveRandomPosts();
      console.log('result: ', result.length);
      result={
        postsToShow: result,
      };
      res.json(result);
    });

/* ----------- <---> Trending Posts <---> ----------- */
// no validation, no authentication
router.get('/trendPosts',
    async (req, res) => {
      result= await postFunctions.retrieveTrendingPosts();
      console.log('result: ', result);
      result={
        postsToShow: result,
      };
      res.json(result);
    });

/* ----------- <---> Create Post <---> ----------- */
router.post('/:blogId/create_post',
    validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.createPost),
    (req, res) => {
      postFunctions.createPost(req.params.blogId,
          req.body.postHtml, req.body.type, req.body.state, req.body.tags).then((ret) => {
        if (ret === 'Post Created Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error in Create Post Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    });


/* ----------- <---> Show Post <---> ----------- */
router.get('/:postId/show_post',
    //validateRequest(postJoi.showPostValidations),
    isAuthorized(postEndPoints.showPost),
    (req, res) => {
      postFunctions.showPost(req.url, req.params.postId).then((ret) => {
        if (ret.msg === 'Post Returned Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'message': ret.msg,
              'post': ret.post,
            },
          });
        } else if (ret.msg === 'Error in Show post Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret.msg);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret.msg);
        };
      });
    },
);

/* ----------- <---> Comment on a Post <---> ----------- */
router.put('/:blogId/:postId/comment',
    //validateRequest(postJoi.commentPostValidations),
    isAuthorized(postEndPoints.makeComment),
    (req, res) => {
      postFunctions.makeComment(req.params.blogId,
          req.params.postId, req.body.text).then((ret) => {
        if (ret === 'Comment Posted Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error in Make Comment Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    },
);


/* ----------- <---> Like a Post <---> ----------- */
router.put('/:blogId/:postId/like_press',
    //validateRequest(postJoi.likePostValidations),
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
    //validateRequest(postJoi.reblogPostValidations),
    isAuthorized(postEndPoints.reblogPost),
    (req, res) => {
      postFunctions.reblogPost(req.params.blogId,
          req.params.postId, req.body.text).then((ret) => {
        if (ret === 'Post Reblogged Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error in Reblog Post Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    },
);

/* ----------- <---> Remove a comment <---> ----------- */
router.delete('/:postId/:commentId/remove_comment',
    //validateRequest(postJoi.removeCommentValidations),
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

/* ----------- <---> Delete a rebloged Post <---> ----------- */
router.delete('/:postId/:reblogId/remove_reblog',
    //validateRequest(postJoi.removeReblogValidations),
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
router.get('/:notesId/notes',
    //validateRequest(postJoi.getNotesValidations),
    isAuthorized(postEndPoints.getNotes),
    (req, res) => {
      postFunctions.getNotes(req.params.notesId).then((ret) => {
        if (ret.msg === 'Notes Got Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'message': ret.msg,
              'notes': ret.notes,
              'likesCount': ret.likesCount,
              'reblogsCount': ret.reblogsCount,
              'notesCount': ret.notesCount
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
    //validateRequest(postJoi.getDashboardValidations), 
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
    //validateRequest(postJoi.getBlogPostsValidations),
    isAuthorized(postEndPoints.getBlogPosts),
    (req, res) => {
      postFunctions.getBlogPosts(req.params.blogId).then((ret) => {
        if (ret.msg === 'Blog Posts Got Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'messege': ret.msg,
              'blog': ret.blog,
              'postsToShow': ret.postsToShow,
            },
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
router.delete('/:postId/delete_post',
    //validateRequest(postJoi.deletePostValidations),
    isAuthorized(postEndPoints.deletePost),
    (req, res) => {
      postFunctions.deletePost(req.params.postId).then((ret) => {
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
router.put('/:postId/edit_post',
    //validateRequest(postJoi.editPostValidations),
    isAuthorized(postEndPoints.editPost),
    (req, res) => {
      postFunctions.editPost(req.params.postId, req.body.postHtml, req.body.tags).then((ret) => {
        if (ret === 'Post Edited Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error In Edit Post Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    },
);

/* ----------- <---> Report a Post <---> ----------- */
router.put('/:postId/report_post',
    //validateRequest(postJoi.reportPostValidations),
    isAuthorized(postEndPoints.reportPost),
    (req, res) => {
      postFunctions.reportPost(req.params.postId).then((ret) => {
        if (ret === 'Post Reported Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret === 'Error In Report Post Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret);
        };
      });
    },
);

/* ----------- <---> Activity Feed <---> ----------- */
router.get('/blog/:blogId/activity_feed',
    //validateRequest(postJoi.activityFeedValidations),
    isAuthorized(postEndPoints.activityFeed),
    (req, res) => {
      postFunctions.activityFeed(req.params.blogId).then((ret) => {
        if (ret.msg === 'Activity Feed Got Successfully') {
          res.status(StatusCodes.OK).json(ret);
        } else if (ret.msg === 'Error In Activity Feed Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret.msg);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret.msg);
        };
      });
    },
);

/* ----------- <---> Get Liked Posts <---> ----------- */
router.get('/blog/:blogId/getLikedPosts',
    //validateRequest(postJoi.getBlogPostsValidations),
    isAuthorized(postEndPoints.getLikedPosts),
    (req, res) => {
      postFunctions.getLikedPosts(req.params.blogId).then((ret) => {
        if (ret.msg === 'Liked Posts Got Successfully') {
          res.status(StatusCodes.OK).json({
            'res': {
              'messege': ret.msg,
              'blog': ret.blog,
              'postsToShow': ret.postsToShow,
            },
          });
        } else if (ret.msg === 'Error In Get Blog Posts Function') {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ret.msg);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(ret.msg);
        };
      });
    },
);

/* =========== /// <==> End <==> ===========*/

/* =================== /// <==> Export Post APIs <==> /// =================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
