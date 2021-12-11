// /* eslint-disable linebreak-style */
// const {createBlog}=require('../Modules/Users/Controller/control');
// // const axios=require('axios');
// const chai=require('chai');
// // const sinon = require('sinon');
// const chaiHttp = require('chai-http');
// // const schema = require('../Model/model');
// const expect=chai.expect;
// chai.should();
// chai.use(chaiHttp);
// const dotenv = require('dotenv');
// const connection = require('../Configurations/configuration');
// dotenv.config();
// connection();
// describe('UserBlog Methodes testing', () =>{
//   describe('Create Blog Testing', ()=>{
//     it('should create a new blog', (done)=>{
//       const req={
//         params: {
//           userId: '61b25f1b33c23d832e6f5ba9',
//         },
//         body:
//        {
//          title: 'Engineering',
//          name: 'nour99',
//          privacy: false,
//        },
//       };
//       createBlog(req.params.userId, req.body.title, req.body.name,
//           req.body.privacy, 'password').then((res)=>{
//         expect(res).to.be.a('object');
//         expect(res.name).to.be.eq(req.body.name);
//         done();
//       }).catch(done);
//     });
//     it('should return false because there is already a blog with the same name'
//         , (done)=>{
//           const req={
//             params: {
//               userId: '61b25f1b33c23d832e6f5ba9',
//             },
//             body:
//        {
//          title: 'Engineering',
//          name: 'nour256',
//          privacy: false,
//        },
//           };
//           createBlog(req.params.userId, req.body.title, req.body.name,
//               req.body.privacy, 'password').then((res)=>{
//             expect(res).to.be.eq(null);
//             done();
//           }).catch(done);
//         });
//   });
// });
