// /* eslint-disable linebreak-style */
// const userFunctions = require('../Modules/Users/Controller/control');
// // const axios=require('axios');
// const chai = require('chai');
// // const sinon = require('sinon');
// const chaiHttp = require('chai-http');
// // const schema = require('../Model/model');
// const expect = chai.expect;
// chai.should();
// chai.use(chaiHttp);
// const dotenv = require('dotenv');
// const connection = require('../Configurations/configuration');
// const blogFunctions = require('../Modules/Blogs/Controller/control');
// dotenv.config();
// connection();
// describe('UserBlog Methodes testing', () => {
//   describe('Create Blog Testing', ()=>{
//     it('should create a new blog', (done)=>{
//       const req={
//         params: {
//           userId: '6196d197a31552477d437404',
//         },
//         body:
//          {
//            title: 'Engineering',
//            name: 'reema2',
//            privacy: false,
//          },
//       };
//       userFunctions.createBlog(req.params.userId, req.body.title, req.body.name,
//           req.body.privacy, 'password').then((res)=>{
//         expect(res).to.be.a('object');
//         expect(res.name).to.be.eq( req.body.name);
//         done();
//       }).catch(done);
//     });
//     it('should return false because there is already a blog with the same name'
//         , (done)=>{
//           const req={
//             params: {
//               userId: '6196d197a31552477d437404',
//             },
//             body:
//              {
//                title: 'Engineering',
//                name: 'nour22',
//                privacy: false,
//              },
//           };
//           userFunctions.createBlog(req.params.userId, req.body.title,
//               req.body.name, req.body.privacy, 'password').then((res)=>{
//             expect(res).to.be.eq(null);
//             done();
//           }).catch(done);
//         });
//   });
//   describe('Delete Blog Testing', ()=>{
//     it('should delete the blog', (done)=>{
//       const req={
//         params: {
//           userId: '6196d197a31552477d437404',
//         },
//         body:
//            {
//              blogId: '61b51633be867ae625b47fc1',
//            },
//       };
//       userFunctions.deleteBlog(req.params.userId, req.body.blogId).then((res)=>{
//         expect(res).to.be.a('object');
//         done();
//       }).catch(done);
//     });
//     it('should return false because there is no blog with the requested id'
//         , (done)=>{
//           describe('Delete Blog Testing', ()=>{
//             const req={
//               params: {
//                 userId: '6196d197a31552477d437404',
//               },
//               body:
//                {
//                  blogId: '61b3b9e9ae2911b440a03a35c',
//                },
//             };
//             userFunctions.deleteBlog(req.params.userId, req.body.blogId)
//                 .then((res)=>{
//                   expect(res).to.be.eq(null);
//                   done();
//                 }).catch(done);
//           });
//         });
//   });
//   describe('Retrieve Blog Testing', () => {
//     it('should retrieve all the blog info given its name', (done) => {
//       const req = {
//         params: {
//           blogName: 'nour',
//         },
//       };
//       blogFunctions.retrieveBlog(req.params.blogName).then((res) => {
//         expect(res).to.be.a('object');
//         expect(res.title).to.be.eq('nour');
//         done();
//       }).catch(done);
//     });
//     it('should return null as there is no blog with the given name', (done) => {
//       const req = {
//         params: {
//           blogName: 'nour123',
//         },
//       };
//       blogFunctions.retrieveBlog(req.params.blogName).then((res) => {
//         expect(res).to.be.eq(null);
//         done();
//       }).catch(done);
//     });
//   });
//   describe('Edit Blog Testing', () => {
//     it('should edit the blog and return object', (done) => {
//       const req={
//         params: {
//           blogId: '61b33c94c4bab40beeb82b6f',
//         },
//         body: {
//           title: 'noor',
//           avatar: 'avatar.jpg',
//           accent: 'red',
//           description: 'This is my Blog',
//         },
//       };
//       blogFunctions.editBlog(req).then((res) => {
//         expect(res).to.be.a('object');
//         expect(res.title).to.be.eq( 'noor');
//         expect(res.avatar).to.be.eq('avatar.jpg');
//         expect(res.accent).to.be.eq('red');
//         expect(res.description).to.be.eq('This is my Blog');
//         done();
//       }).catch(done);
//     });
//     it('should return a message as there is another blog with that name'
//         , (done) => {
//           const req={
//             params: {
//               blogId: '61b33c94c4bab40beeb82b6f',
//             },
//             body: {
//               name: 'nour',
//             },
//           };
//           blogFunctions.editBlog(req).then((res) => {
//             expect(res).to.be.eq('URL is not available');
//             done();
//           }).catch(done);
//         });
//     it('should return null as there is no a blog with the given id', (done) => {
//       const req={
//         params: {
//           blogId: '61b33c94c4bab40bee182b6f',
//         },
//         body: {
//           name: 'nour',
//         },
//       };
//       blogFunctions.editBlog(req).then((res) => {
//         expect(res).to.be.eq(null);
//         done();
//       }).catch(done);
//     });
//   });
//   describe('Follow Blog Testing', () => {
//     it('should return object of the followed blog', (done) => {
//       const req={
//         params: {
//           userId: '6196d197a31552477d437404',
//         },
//         body: {

//           blogId: '619957113df6b45019c42d06',
//         },
//       };
//       userFunctions.followBlog(req).then((res) => {
//         expect(res).to.be.a('object');
//         done();
//       }).catch(done);
//     });
//     it('should return null as there is no a blog with the given id', (done) => {
//       const req={
//         params: {
//           userId: '6196d197a31552477d437404',
//         },
//         body: {

//           blogId: '619957913df6b45019c42d06',
//         },
//       };
//       userFunctions.followBlog(req).then((res) => {
//         expect(res).to.be.eq(null);
//         done();
//       }).catch(done);
//     });
//   });
//   describe('Follow Blog Testing', () => {
//     it('should return object of the unfollowed blog', (done) => {
//       const req={
//         params: {
//           userId: '6196d197a31552477d437404',
//         },
//         body: {

//           blogId: '619957113df6b45019c42d06',
//         },
//       };
//       userFunctions.unfollowBlog(req).then((res) => {
//         expect(res).to.be.a('object');
//         done();
//       }).catch(done);
//     });
//     it('should return null as there is no a blog with the given id', (done) => {
//       const req={
//         params: {
//           userId: '6196d197a31552477d437404',
//         },
//         body: {

//           blogId: '619957913df6b45019c42d06',
//         },
//       };
//       userFunctions.unfollowBlog(req).then((res) => {
//         expect(res).to.be.eq(null);
//         done();
//       }).catch(done);
//     });
//   });
//   describe('Unfollow Blog Testing', () => {
//     it('should return object of the unfollowed blog', (done) => {
//       const req={
//         params: {
//           userId: '6196d197a31552477d437404',
//         },
//         body: {

//           blogId: '619957113df6b45019c42d06',
//         },
//       };
//       userFunctions.unfollowBlog(req).then((res) => {
//         expect(res).to.be.a('object');
//         done();
//       }).catch(done);
//     });
//     it('should return null as there is no a blog with the given id', (done) => {
//       const req={
//         params: {
//           userId: '6196d197a31552477d437404',
//         },
//         body: {

//           blogId: '619957913df6b45019c42d06',
//         },
//       };
//       userFunctions.unfollowBlog(req).then((res) => {
//         expect(res).to.be.eq(null);
//         done();
//       }).catch(done);
//     });
//   });
//   describe('Block Blog Testing', () => {
//     it('should return object of the blocked blog', (done) => {
//       const req={
//         params: {
//           blogId: '61b3724efad9ac6d6c719f58',
//         },
//         body: {

//           blockedBlogId: '619957113df6b45019c42d06',

//         },
//       };
//       blogFunctions.blockBlog(req).then((res) => {
//         expect(res).to.be.a('object');
//         done();
//       }).catch(done);
//     });
//     it('should return null as there is no a blog with the given id', (done) => {
//       const req={
//         params: {
//           blogId: '61b3724efad9ac6d6c719f58',
//         },
//         body: {

//           blockedBlogId: '619938113df6b45019c42d06',

//         },
//       };
//       blogFunctions.blockBlog(req).then((res) => {
//         expect(res).to.be.eq(null);
//         done();
//       }).catch(done);
//     });
//   });
//   describe('Unblock Blog Testing', () => {
//     it('should return object of the unblocked blog', (done) => {
//       const req={
//         params: {
//           blogId: '61b3724efad9ac6d6c719f58',
//         },
//         body: {

//           unblockedBlogId: '619957113df6b45019c42d06',

//         },
//       };
//       blogFunctions.unblockBlog(req).then((res) => {
//         expect(res).to.be.a('object');
//         done();
//       }).catch(done);
//     });
//     it('should return null as there is no a blog with the given id', (done) => {
//       const req={
//         params: {
//           blogId: '61b3724efad9ac6d6c719f58',
//         },
//         body: {

//           unblockedBlogId: '619938113df6b45019c42d06',

//         },
//       };
//       blogFunctions.unblockBlog(req).then((res) => {
//         expect(res).to.be.eq(null);
//         done();
//       }).catch(done);
//     });
//   });
// });
