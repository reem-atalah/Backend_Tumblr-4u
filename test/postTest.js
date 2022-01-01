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
const fs = require('fs');

chai.should();
chai.use(chaiHttp);
// /* =========== /// <==> End <==> ===========*/


// /* =============== /// <==> Unit Testing <==> /// =============== */
describe('Post APIs', () => {

  // --------// <=====> upload media on cloud <=====> //------------//
  describe('Upload media APIs', () => {
  // --------// <=====> upload image on cloud <=====> //------------//
    it('It tests uploading image on server, gets url', (done) => {
      const blobName = 'image2022-1-1T03-59-05.770Z.jpg';
  
      postFunctions.uploadAny(blobName, 'image/jpeg')
          .then((res)=>{
            expect(res)
              .to.be.equal('https://tumblrstorage.blob.core.windows.net/imagess/'+blobName);
            done();
          }).catch(done);
    });
  
    // --------// <=====> upload video on cloud <=====> //------------//
    it('It tests uploading video on server, gets url', (done) => {
      const blobName = 'video2022-01-01T15-23-27.384Z.mp4';
  
      postFunctions.uploadAny(blobName, 'video/mp4')
          .then((res)=>{
            expect(res)
              .to.be.equal('https://tumblrstorage.blob.core.windows.net/imagess/'+blobName);
            done();
          }).catch(done);
    });
  
    // --------// <=====> upload audio on cloud <=====> //------------//
    it('It tests uploading audio on server, gets url', (done) => {
      const blobName = 'audio2021-12-28T04-06-07.388Z.mpeg';
  
      postFunctions.uploadAny(blobName, 'audio/mpeg')
          .then((res)=>{
            expect(res)
              .to.be.equal('https://tumblrstorage.blob.core.windows.net/imagess/'+blobName);
            done();
          }).catch(done);
    });
  });
  
  describe('Random posts APIs', () => {
      
    // --------// <=====> get radar posts <=====> //------------//
    it('It tests radar posts', (done) => {
  
      postFunctions.retrieveRandomPosts()
          .then((res)=>{
            expect(res.length).to.be.equal(10);
            done();
          }).catch(done);
    });

    // --------// <=====> get trending posts <=====> //------------//
    it('It tests trending posts', (done) => {
      post=[
        {
          "_id": "61ca5d91a8a4556c5b24f1f4",
          "blogId": '61c9d6b82569f9abb33ebe04',
          "postHtml": '<img width="100%" src="https://tumblrstorage.blob.core.windows.net/imagess/image2022-1-1T03-59-05.770Z.jpg]" alt="">',
          "type": 'text',
          "state": 'published',
          "tags": [ 'edit', 'cmp', 'Trending' ],
          "notesId": '61ca5d91a8a4556c5b24f1f3',
          "isDeleted": false,
          "isReported": false,
          "postUrl": '/61ca5d91a8a4556c5b24f1f4/show_post',
          "__v": 1
        }
      ]
      postFunctions.retrieveTrendingPosts()
          .then((res)=>{
            expect(res.trendingPostsLim[0].notesId).to.be.equal(post[0].notesId);
            done();
          }).catch(done);
    });
  });

//   // ----------------// <=====> Create Post <=====> //----------------//

  // describe('Function createPost', () => {
  //   it('It Should Create New Post', (done) => {
  //     const req = {
  //       params: {
  //         blogId: '619957113df6b45019c42d06',
  //       },
  //       body: {
  //         postHtml: '</>',
  //         type: 'link',
  //         state: 'published',
  //         tags: 'tumblr',
  //       },
  //     };

  //     postFunctions.createPost(req.params.blogId, req.body.postHtml, req.body.type, req.body.state, req.body.tags).then((ret) => {
  //       expect(ret).to.be.a('array');
  //       expect(ret[0]).to.be.eq('Post Created Successfully');
  //       done();
  //     }).catch(done);
  //   });
  // });

  // describe('Function showPost', () => {
  //   it('It Should Show Post', (done) => {
  //     const req = {
  //       params: {
  //         postId: '61ae667d8b4d5620ce937992',
  //       },
  //     };

  //     postFunctions.showPost(req.params.postId).then((ret) => {
  //       expect(ret).to.be.a('array');
  //       expect(ret[0]).to.be.eq('Post Returned Successfully');
  //       done();
  //     }).catch(done);
  //   });
  // });

  // describe('Function makeComment', () => {
  //   it('It Should Make Comment', (done) => {
  //     const req = {
  //       params: {
  //         blogId: '619957113df6b45019c42d06',
  //         postId: '61ae667d8b4d5620ce937992',
  //       },
  //       body: {
  //         text: 'Very Good Post',
  //       },
  //     };

  //     postFunctions.makeComment(req.params.blogId, req.params.postId, req.body.text).then((ret) => {
  //       expect(ret).to.be.a('array');
  //       expect(ret[0]).to.be.eq('Comment Posted Successfully');
  //       done();
  //     }).catch(done);
  //   });
  // });

  // describe('Function removeComment', () => {
  //   it('It Should Remove a Comment', (done) => {
  //     const req = {
  //       params: {
  //         postId: '61ae667d8b4d5620ce937992',
  //         commentId: '61b50d9837c346ee39708965',
  //       },
  //     };

  //     postFunctions.removeComment(req.params.postId, req.params.commentId)
  //         .then((ret) => {
  //           expect(ret).to.be.a('string');
  //           expect(ret).to.be.eq('Comment Removed Successfully');
  //           done();
  //         }).catch(done);
  //   });
  // });

  // describe('Function reblogPost', () => {
  //   it('It Should Reblog a Post', (done) => {
  //     const req = {
  //       params: {
  //         blogId: '619957113df6b45019c42d06',
  //         postId: '61ae667d8b4d5620ce937992',
  //       },
  //       body: {
  //         text: 'Very Good Post',
  //       },
  //     };

  //     postFunctions.reblogPost(req.params.blogId, req.params.postId, req.body.text)
  //         .then((ret) => {
  //           expect(ret).to.be.a('array');
  //           expect(ret[0]).to.be.eq('Post Reblogged Successfully');
  //           done();
  //         }).catch(done);
  //   });
  // });

  // describe('Function removeReblog', () => {
  //   it('It Should Remove a Reblog', (done) => {
  //     const req = {
  //       params: {
  //         postId: '61ae667d8b4d5620ce937992',
  //         reblogId: '61b51524807f8f7c61e5c14b',
  //       },
  //     };

  //     postFunctions.removeReblog(req.params.postId, req.params.reblogId)
  //         .then((ret) => {
  //           expect(ret).to.be.a('string');
  //           expect(ret).to.be.eq('Reblog Removed Successfully');
  //           done();
  //         }).catch(done);
  //   });
  // });

  // describe('Function loopAndCheck', () => {
  //   it('It Should Loop on an Array and Check if an Element Exists', (done) => {
  //     const arr = [0, 1, 2];
  //     const element = 1;
  //     // expect(postControl.loopAndCheck(arr, element)).to.be.equal(1);
  //     postFunctions.loopAndCheck(arr, element).should.be.eq(1);
  //     done();
  //   });
  // });

  // describe('Function loopObjAndCheck', () => {
  //   it('It Should Loop on an Object in an Array and Check if an Id Exists', (done) => {
  //     const a = mongoose.Types.ObjectId('61af36a793d7c3194ff42269');
  //     const b = mongoose.Types.ObjectId('61ae881aab9ea73f2282b03e');
  //     const c = mongoose.Types.ObjectId('61ae887d2676ed5d9b5d532f');
  //     const arr = [
  //       {text: 'a', _id: a},
  //       {text: 'shd', _id: b},
  //       {text: 'akj', _id: c},
  //     ];
  //     const element = '61ae881aab9ea73f2282b03e';
  //     postFunctions.loopObjAndCheck(arr, element)[0].should.be.eq(1);
  //     postFunctions.loopObjAndCheck(arr, element)[1].should.be.eq(1);
  //     done();
  //   });
  // });

  // describe('Function likePress', () => {
  //   it('It Should Like or Unlike a Post', (done) => {
  //     const req = {
  //       params: {
  //         blogId: '619957113df6b45019c42d06',
  //         postId: '61ae667d8b4d5620ce937992',
  //       },
  //     };

  //     postFunctions.likePress(req.params.blogId, req.params.postId).then((ret) => {
  //       expect(ret).to.be.a('string');
  //       // expect(ret).to.be.eq('Post Liked Successfully');
  //       done();
  //     }).catch(done);
  //   });
  // });

  // describe('Function getNotes', () => {
  //   it('It Should Get Post Notes', (done) => {
  //     const req = {
  //       params: {
  //         postId: '61ae667d8b4d5620ce937992',
  //       },
  //     };

  //     postFunctions.getNotes(req.params.postId).then((ret) => {
  //       expect(ret).to.be.a('array');
  //       expect(ret[0]).to.be.eq('Notes Got Successfully');
  //       done();
  //     }).catch(done);
  //   });
  // });

  // describe('Function getDashboard', () => {
  //   it('It Should Get Dashboard', (done) => {
  //     const req = {
  //       params: {
  //         userId: '6196d197a31552477d437404',
  //         blogId: '619957113df6b45019c42d06',
  //       },
  //     };

  //     postFunctions.getDashboard(req.params.userId, req.params.blogId).then((ret) => {
  //       expect(ret).to.be.a('array');
  //       expect(ret[0]).to.be.eq('Dashboard Got Successfully');
  //       done();
  //     }).catch(done);
  //   });
  // });
});
/* =========== /// <==> End <==> ===========*/
