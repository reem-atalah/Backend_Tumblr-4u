/////////////////////////////////////////////////////////////////////
/// <==> /// This File Is The Unit Testing OF User APIS  /// <==> ///
/////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../script");
const connect = require('../Configurations/configuration');
const postControl = require('../Modules/Posts/Controller/control');
var assert = require('assert');

var mongoose = require('mongoose');

chai.should();
chai.use(chaiHttp);
/* =========== /// <==> End <==> ===========*/


/* ====================== /// <==> Unit Testing <==> /// ====================== */
describe('Post APIs', () => {

  //----------------// <=====> Create Post <=====> //----------------//

  // describe('Function createPost', () => {
  //   it('It Should Create New Post', (done) => {
  //     const blogPost = {
  //       postHtml: '</>',
  //       type: 'link',
  //       state: 'published',
  //       tags: 'tumblr'
  //     };

  //     chai.request(server)
  //         .post('/61968c974f161173940ea9cb/posts/create_post')
  //         .send(blogPost)
  //         .end((err, res) => {
  //           res.should.have.status(200);
  //           res.body.should.be.eq('Post Created Successfully (<:>)');
  //           done();
  //         });
  //   });
  // });

  describe('Function createPost Don\'t Post Blog Post', () => {
    it('It Should Not Create New Post Because Blog Doesn\'t Exist', (done) => {
      const blogPost = {
        postHtml: '</>',
        type: 'video',
        state: 'published',
        tags: 'engineering'
      };

      chai.request(server)
          .post('/61968c974f161173940ea9ca/posts/create_post')  //no blog with this id
          .send(blogPost)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.eq('Blog Not Found (<:>)');
            done();
          });
    });
  });

    describe('Function createPost Internal Server Error', () => {
      it('It Should Not Create New Post Due To Server Error', (done) => {
        const blogPost = {
          postHtml: '</>',
          type: 'video',
          state: 'published',
          tags: 'engineering'
        };
    
        chai.request(server)
            .post('/1/posts/create_post')  //no blog with this id
            .send(blogPost)
            .end((err, res) => {
              res.should.have.status(500);
              res.body.should.be.eq('Error In Create Post Function (<:>)');
              done();
            });
      });
    });

    describe('Function showPost', () => {
      it('It Should Get a Post and Show it', (done) => {
        chai.request(server)
            .get('/posts/6196df230578db004e05d179/show_post') 
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.eq('</>');
              done();
            });
      });
    });

    // describe('Make Comment', () => {
    //   it('It Should Make Comment', (done) => {
    //     const comment = {
    //       //commentingBlogTitle: '',
    //       text: 'very good post',
    //     };

    //     chai.request(server)
    //         .put('/61968c974f161173940ea9cb/61ae667d8b4d5620ce937992/comment')
    //         .send(comment)
    //         .end((err, res) => {
    //           res.should.have.status(200);
    //           res.body.should.be.eq('Comment Posted Successfully');
    //           done();
    //         });
    //   });
    // });

    describe('Function loopAndCheck', () => {
      it('It Should Loop on an Array and Check if an Element Exists', (done) => {
        let arr = [0,1,2];
        let element = 1;
        //expect(postControl.loopAndCheck(arr, element)).to.be.equal(1);
        postControl.loopAndCheck(arr, element).should.be.eq(1);
            done();
      });
    });

    describe('Function loopObjAndCheck', () => {
      it('It Should Loop on an Object in an Array and Check if an Id Exists', (done) => {
        let a = mongoose.Types.ObjectId("61af36a793d7c3194ff42269");
        let b = mongoose.Types.ObjectId("61ae881aab9ea73f2282b03e");
        let c = mongoose.Types.ObjectId("61ae887d2676ed5d9b5d532f");
        let arr = [
          {text: 'a',_id: a},
          {text: 'shd',_id: b},
          {text: 'akj',_id: c}
        ];
        let element = '61ae881aab9ea73f2282b03e';
        let pos = 0;
        postControl.loopObjAndCheck(arr, element, pos).should.be.eq(1);
            done();
      });
    });

    describe('Function likePress', () => {
      it('It Should Like or Unlike a Post', (done) => {
        chai.request(server)
            .put('/61968c974f161173940ea9cb/61ae667d8b4d5620ce937992/like_press')
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.eq('Post Liked Successfully');
              done();
            });
      });
    });

    // describe('Function reblogPost', () => {
    //   it('It Should Reblog a Post', (done) => {
    //     const reblog = {
    //       //commentingBlogTitle: '',
    //       text: 'great post',
    //     };

    //     chai.request(server)
    //         .put('/61968c974f161173940ea9cb/61ae667d8b4d5620ce937992/reblog_post')
    //         .send(reblog)
    //         .end((err, res) => {
    //           res.should.have.status(200);
    //           res.body.should.be.eq('Post Reblogged Successfully');
    //           done();
    //         });
    //   });
    // });

    describe('Function removeComment', () => {
      it('It Should Remove a Comment', (done) => {
        chai.request(server)
            .delete('/61ae667d8b4d5620ce937992/61ae881aab9ea73f2282b03e/remove_comment')
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.eq('Comment Removed Successfully');
              done();
            });
      });
    });

  //});

});
/* =========== /// <==> End <==> ===========*/