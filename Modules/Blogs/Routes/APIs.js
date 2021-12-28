/* eslint-disable linebreak-style */

// ////////////////////////////////////////////////////
// / <==> /// This File Contains blog APIs /// <==> ///
// ////////////////////////////////////////////////////

/* ================= /// <==> Variables Declaration <==> /// ================ */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const blogFunctions = require('../Controller/control');
const blogJoi = require('../Joi/joi');
const cmMidwReqValidate='../../../Common/Middlewares/requestValidation';
const validateRequest = require(cmMidwReqValidate);
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const blogEndPoints = require('../endPoints');
const {StatusCodes} = require('http-status-codes');

/* =========== /// <==> End <==> ===========*/

/* ------- <---> Block Account <---> ------- */ // *** <===> Done <===>  *** //
const VLDRQBB=validateRequest(blogJoi.BlockBlogValidations);
const ISABB=isAuthorized(blogEndPoints.blockBlog);

router.post('/blog/block/:blogId',
    VLDRQBB,
    ISABB,
    (req, res)=>{
      blogFunctions.blockBlog(req.params.blogId, req.body.blockedBlogId )
          .then((blog)=>{
            if (blog) {
              res.status(StatusCodes.OK).json({
                'meta': {
                  'status': 200,
                  'msg': 'OK',
                },

                'res': {
                  'message': 'Blog Blocked Successfully',
                  'data': blog,
                },
              });
            } else {
              res.status(StatusCodes.NOT_FOUND).json({
                'meta': {
                  'status': 404,
                  'msg': 'NOT FOUND',
                },

                'res': {
                  'message': 'Blog Not FOUND',
                  'data': '',
                },
              });
            }
          });
    });

/* ------- <---> Un Block Account <---> ----- */ // *** <===> Done <===>  *** //
const VLDRQUB=validateRequest(blogJoi.UnblockBlogValidations);
const ISAUB=isAuthorized(blogEndPoints.unblockBlog);

router.post('/blog/unblock/:blogId',
    VLDRQUB,
    ISAUB,
    (req, res)=>{
      blogFunctions.unblockBlog(req.params.blogId, req.body.unblockedBlogId)
          .then((blog)=>{
            if (blog) {
              res.status(StatusCodes.OK).json({
                'meta': {
                  'status': 200,
                  'msg': 'OK',
                },

                'res': {
                  'message': 'Blog Unblocked Successfully',
                  'data': blog,
                },
              });
            } else {
              res.status(StatusCodes.NOT_FOUND).json({
                'meta': {
                  'status': 404,
                  'msg': 'NOT FOUND',
                },

                'res': {
                  'message': 'Blog Not FOUND',
                  'data': '',
                },
              });
            }
          });
    });


const VLDRQEB=validateRequest(blogJoi.EditBlogValidations);
const ISAEB=isAuthorized(blogEndPoints.editBlog);
// const EB=blogFunctions.editBlog;

router.post('/blog/edit/:blogId',
    VLDRQEB,
    ISAEB,
    (req, res)=>{
      blogFunctions.editBlog(req).then((blog)=>{
        if (blog==='URL is not available') {
          res.status(StatusCodes.BAD_REQUEST).json({
            'meta': {
              'status': 400,
              'msg': 'BAD REQUEST',
            },

            'res': {
              'message': 'URL is not available',
              'data': '',
            },
          });
        } else if (blog) {
          res.status(StatusCodes.OK).json({
            'meta': {
              'status': 200,
              'msg': 'OK',
            },

            'res': {
              'message': 'Blog Editted Successfully',
              'data': blog,
            },
          });
        } else {
          res.status(StatusCodes.NOT_FOUND).json({
            'meta': {
              'status': 404,
              'msg': 'NOT FOUND',
            },

            'res': {
              'message': 'Blog Not FOUND',
              'data': '',
            },
          });
        }
      });
    });

const VLDRQRB=validateRequest(blogJoi.RetrieveBlogValidations);
const ISARB=isAuthorized(blogEndPoints.retrieveBlog);

router.get('/blog/view/:blogId',
    VLDRQRB,
    ISARB,
    (req, res)=>{
      blogFunctions.retrieveBlog(req.params.blogId).then((blog)=>{
        if (blog) {
          res.status(StatusCodes.OK).json({
            'meta': {
              'status': 200,
              'msg': 'OK',
            },

            'res': {
              'message': 'Blog Retrieved Successfully',
              'data': blog,
            },
          });
        } else {
          res.status(StatusCodes.NOT_FOUND).json({
            'meta': {
              'status': 404,
              'msg': 'NOT FOUND',
            },

            'res': {
              'message': 'Blog Not FOUND',
              'data': '',
            },
          });
        }
      });
    });
/* ----------- <---> Random Blogs <---> ----------- */
// no validation, no authentication
router.get('/ranBlogs',
    async (req, res) => {
      result= await blogFunctions.retrieveRandomBlogs();
      console.log('result: ', result.length);
      result={
        ranBlogs: result,
      };
      res.json(result);
    });


/* =========== /// <==> End <==> ===========*/
/* ================ /// <==> Export blog APIs <==> /// ====================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
