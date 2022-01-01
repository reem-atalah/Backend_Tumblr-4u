/* eslint-disable linebreak-style */
// // ///////////////////////////////////////////////////////////////////
// // / <==> /// This File Is The Unit Testing OF User APIS  /// <==> ///
// // ///////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// =============== */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../script');
const postFunctions = require('../Modules/Posts/Controller/control');
const {expect} = require('chai');
const {object} = require('joi');
const {makeComment} = require('../Modules/Posts/endPoints');
const mongoose = require('mongoose');
const connect = require('../Configurations/configuration');
const postControl = require('../Modules/Posts/Controller/control');
const assert = require('assert');

chai.should();
chai.use(chaiHttp);
// /* =========== /// <==> End <==> ===========*/


// /* =============== /// <==> Unit Testing <==> /// =============== */
describe('Post APIs', () => {
//   // ----------------// <=====> Create Post <=====> //----------------//

  describe('Function createPost', () => {
    it('It Should Create New Post', (done) => {
      const req = {
        params: {
          blogId: '61c9d6b82569f9abb33ebe04',
        },
        body: {
          postHtml: '</>',
          type: 'link',
          state: 'published',
          tags: ['tumblr', 'cmp'],
        },
      };

      postFunctions.createPost(req.params.blogId, req.body.postHtml, req.body.type, req.body.state, req.body.tags).then((ret) => {
        expect(ret).to.be.a('string');
        expect(ret).to.be.eq('Post Created Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function showPost', () => {
    it('It Should Show Post', (done) => {
      const req = {
        url: '',
        params: {
          postId: '61ca5d91a8a4556c5b24f1f4',
        },
      };

      postFunctions.showPost(req.url,req.params.postId).then((ret) => {
        expect(ret).to.be.a('object');
        expect(ret.msg).to.be.eq('Post Returned Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function makeComment', () => {
    it('It Should Make Comment', (done) => {
      const req = {
        params: {
          blogId: '61c9d6b82569f9abb33ebe04',
          postId: '61ca5d91a8a4556c5b24f1f4',
        },
        body: {
          text: 'Very Good Post',
        },
      };

      postFunctions.makeComment(req.params.blogId, req.params.postId, req.body.text).then((ret) => {
        expect(ret).to.be.a('string');
        expect(ret).to.be.eq('Comment Posted Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function removeComment', () => {
    it('It Should Remove a Comment', (done) => {
      const req = {
        params: {
          postId: '61ca5d91a8a4556c5b24f1f4',
          commentId: '61d09371d53d981f8a647ef6',
        },
      };

      postFunctions.removeComment(req.params.postId, req.params.commentId)
          .then((ret) => {
            expect(ret).to.be.a('string');
            expect(ret).to.be.eq('Comment Removed Successfully');
            done();
          }).catch(done);
    });
  });

  describe('Function reblogPost', () => {
    it('It Should Reblog a Post', (done) => {
      const req = {
        params: {
          blogId: '61c9d6b82569f9abb33ebe04',
          postId: '61ca5d91a8a4556c5b24f1f4',
        },
        body: {
          text: 'Very Good Post',
        },
      };

      postFunctions.reblogPost(req.params.blogId, req.params.postId, req.body.text)
          .then((ret) => {
            expect(ret).to.be.a('string');
            expect(ret).to.be.eq('Post Reblogged Successfully');
            done();
          }).catch(done);
    });
  });

  describe('Function removeReblog', () => {
    it('It Should Remove a Reblog', (done) => {
      const req = {
        params: {
          postId: '61ca5d91a8a4556c5b24f1f4',
          reblogId: '61d09372d53d981f8a647f43',
        },
      };

      postFunctions.removeReblog(req.params.postId, req.params.reblogId)
          .then((ret) => {
            expect(ret).to.be.a('string');
            expect(ret).to.be.eq('Reblog Removed Successfully');
            done();
          }).catch(done);
    });
  });

  describe('Function loopLikeAndCheck', () => {
    it('It Should Loop on an Array and Check if an Element Exists', (done) => {
      const a = '61af36a793d7c3194ff42269';
      const b = '61ae881aab9ea73f2282b03e';
      const c = '61ae887d2676ed5d9b5d532f';
      const arr = [
        {isDeleted: false, blogId: a},
        {isDeleted: false, blogId: b},
        {isDeleted: false, blogId: c},
      ];
      const element = '61ae881aab9ea73f2282b03e';
      postFunctions.loopLikeAndCheck(arr, element)[0].should.be.eq(1);
      postFunctions.loopLikeAndCheck(arr, element)[1].should.be.eq(0);
      postFunctions.loopLikeAndCheck(arr, element)[2].should.be.eq(1);
      done();
    });
  });

  describe('Function loopObjAndCheck', () => {
    it('It Should Loop on an Object in an Array and Check if an Id Exists', (done) => {
      const a = mongoose.Types.ObjectId('61af36a793d7c3194ff42269');
      const b = mongoose.Types.ObjectId('61ae881aab9ea73f2282b03e');
      const c = mongoose.Types.ObjectId('61ae887d2676ed5d9b5d532f');
      const arr = [
        {isDeleted: false, _id: a},
        {isDeleted: false, _id: b},
        {isDeleted: false, _id: c},
      ];
      const element = '61ae881aab9ea73f2282b03e';
      postFunctions.loopObjAndCheck(arr, element)[0].should.be.eq(1);
      postFunctions.loopObjAndCheck(arr, element)[1].should.be.eq(1);
      done();
    });
  });

  describe('Function likePress', () => {
    it('It Should Like or Unlike a Post', (done) => {
      const req = {
        params: {
          blogId: '61c9d6b82569f9abb33ebe04',
          postId: '61ca5d91a8a4556c5b24f1f4',
        },
      };

      postFunctions.likePress(req.params.blogId, req.params.postId).then((ret) => {
        expect(ret).to.be.a('string');
        // expect(ret).to.be.eq('Post Liked Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function getNotes', () => {
    it('It Should Get Post Notes', (done) => {
      const req = {
        params: {
          notesId: '61ca5d92a8a4556c5b24f1f9',
        },
      };

      postFunctions.getNotes(req.params.notesId).then((ret) => {
        expect(ret).to.be.a('object');
        expect(ret.msg).to.be.eq('Notes Got Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function getDashboard', () => {
    it('It Should Get Dashboard', (done) => {
      const req = {
        decoded: {
          email: 'ahmed.ayman.1420@gmail.com'
        },
      };

      postFunctions.getDashboard(req.decoded.email).then((ret) => {
        expect(ret).to.be.a('object');
        expect(ret.msg).to.be.eq('Dashboard Got Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function editPost', () => {
    it('It Should Edit a Post Post', (done) => {
      const req = {
        params: {
          postId: '61cd7bd4c53c43b422960a2c',
        },
        body: {
          postHtml: '</>',
          tags: ['tumblr', 'cmp'],
        },
      };

      postFunctions.editPost(req.params.postId, req.body.postHtml, req.body.tags).then((ret) => {
        expect(ret).to.be.a('string');
        expect(ret).to.be.eq('Post Edited Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function reportPost', () => {
    it('It Should Report a Post', (done) => {
      const req = {
        params: {
          postId: '61cd7bd4c53c43b422960a2c',
        },
      };

      postFunctions.reportPost(req.params.postId).then((ret) => {
        expect(ret).to.be.a('string');
        expect(ret).to.be.eq('Post Reported Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function deletePost', () => {
    it('It Should Delete a Post', (done) => {
      const req = {
        params: {
          postId: '61d09370d53d981f8a647ecc',
        },
      };

      postFunctions.deletePost(req.params.postId).then((ret) => {
        expect(ret).to.be.a('string');
        expect(ret).to.be.eq('Post Deleted Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function getBlogPosts', () => {
    it('It Should Blog Posts', (done) => {
      const req = {
        params: {
          blogId: '61c9d6b82569f9abb33ebe04'
        },
      };

      postFunctions.getBlogPosts(req.params.blogId).then((ret) => {
        expect(ret).to.be.a('object');
        expect(ret.msg).to.be.eq('Blog Posts Got Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function getLikedPosts', () => {
    it('It Should Get Liked Posts', (done) => {
      const req = {
        params: {
          blogId: '61c9d6b82569f9abb33ebe04'
        },
      };

      postFunctions.getLikedPosts(req.params.blogId).then((ret) => {
        expect(ret).to.be.a('object');
        expect(ret.msg).to.be.eq('Liked Posts Got Successfully');
        done();
      }).catch(done);
    });
  });

  describe('Function activityFeed', () => {
    it('It Should Get Activity Feed', (done) => {
      const req = {
        params: {
          blogId: '61c9d6b82569f9abb33ebe04'
        },
      };

      postFunctions.activityFeed(req.params.blogId).then((ret) => {
        expect(ret).to.be.a('object');
        expect(ret.msg).to.be.eq('Activity Feed Got Successfully');
        done();
      }).catch(done);
    });
  });

});
/* =========== /// <==> End <==> ===========*/
