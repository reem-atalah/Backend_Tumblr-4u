// // ====================================================================
// // ====================================================================
// // ====================================================================
// /*
// ===================== ///////// <--------->
// ======== <---------> ///////// =====================>
// =========  <---------> Unit Testing OF User APIs <---------> /////////=====>
// ===================== ///////// <---------> =
// ======= <---------> ///////// =====================>
// */
// // ==================================================================
// // ==================================================================
// // ==================================================================


// /* ====================== /// <==> Variables Declaration <==>
// ========= */
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../script');

// // const connect = require('../Configurations/configuration');

// chai.should();
// chai.use(chaiHttp);
// /* =========== /// <==> End <==> ===========*/


// /* =======================================*/
// /* ==============================================
// ===============*/
// /* ====================== /// <==> Unit Testing <==> /// =
// ==== */
// /* ========================================================
// =====*/
// /* =======================================*/

// describe('User APIs', () => {
//   /*
//  ///////// <---------> ======== <---------> ///////// =====================>
//  ///////// <---------> Sign Up <---------> ///////// =====================>
//  ///////// <---------> ======== <---------> ///////// =====================>
//     */

//   describe('User /signup', () => {
//     // ----------------// <=====> 1-Case <=====> //----------------//
//     it('It Should Create New User', (done) => {
//       const user = {
//         email: 'Ayman023@gmail.com',
//         password: '123',
//         blogName: 'CMP-023',
//         age: '21',
//         city: 'Giza',
//         country: 'Egypt',
//       };

//       chai
//           .request(server)
//           .post('/signup')
//           .send(user)
//           .end((err, res) => {
//             res.should.have.status(201);
//             res.body.should.be.a('object');
//             res.body.should.have
//                 .property('res')
//                 .have.property('message')
//                 .eq('Sign Up Successfully (<:>)');

//             done();
//           });
//     });

//     // ----------------// <=====> 2-Case <=====> //----------------//
//     it('It Should Return Email is Already Exists', (done) => {
//       const user = {
//         email: 'ahmed@gmail.com',
//         password: '123',
//         blogName: 'CMP-100',
//         age: '21',
//         city: 'Giza',
//         country: 'Egypt',
//       };

//       chai
//           .request(server)
//           .post('/SignUp')
//           .send(user)
//           .end((err, res) => {
//             res.should.have.status(400);
//             res.body.should.be.a('object');
//             res.body.should.have
//                 .property('res')
//                 .have.property('error')
//                 .eq('Email is Already Exists (<:>)');
//             done();
//           });
//     });

//     // ----------------// <=====> 3-Case <=====> //----------------//
//     it('It Should Return Blog Name is Already Exists (<:>)', (done) => {
//       const user = {
//         email: 'Omr@gmail.com',
//         password: '123',
//         blogName: 'CMP-013',
//         age: '21',
//         city: 'Giza',
//         country: 'Egypt',
//       };

//       chai
//           .request(server)
//           .post('/SignUp')
//           .send(user)
//           .end((err, res) => {
//             res.should.have.status(400);
//             res.body.should.be.a('object');
//             res.body.should.have
//                 .property('res')
//                 .have.property('error')
//                 .eq('Blog Name is Already Exists (<:>)');
//             done();
//           });
//     });
//   });

//   /*
//     ================ ///////// <---------> ======== <---------> /////////
//     =====>
//     ================ ///////// <---------> Log In <---------> ///////// ==
//     ==>
//     =============== ///////// <---------> ======== <---------> /////////
//     ====>
//     */

//   describe('User /login', () => {
//     // ----------------// <=====> 1-Case <=====> //----------------//
//     it('It Should Login User', (done) => {
//       const user = {
//         email: 'ahmed@gmail.com',
//         password: '123',
//       };

//       chai
//           .request(server)
//           .post('/login')
//           .send(user)
//           .end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have
//                 .property('res')
//                 .have.property('message')
//                 .eq('LogIn Successfully (<:>)');

//             done();
//           });
//     });

//     // ----------------// <=====> 2-Case <=====> //----------------//
//     it('It Should Incorrect Password', (done) => {
//       const user = {
//         email: 'ahmed@gmail.com',
//         password: '1234',
//       };

//       chai
//           .request(server)
//           .post('/login')
//           .send(user)
//           .end((err, res) => {
//             res.should.have.status(400);
//             res.body.should.be.a('object');
//             res.body.should.have
//                 .property('res')
//                 .have.property('error')
//                 .eq('InCorrect Password (<:>)');

//             done();
//           });
//     });

//     // ----------------// <=====> 3-Case <=====> //----------------//
//     it('It Should get Email Is Not Found', (done) => {
//       const user = {
//         email: 'Omr@gmail.com',
//         password: '123',
//       };

//       chai
//           .request(server)
//           .post('/login')
//           .send(user)
//           .end((err, res) => {
//             res.should.have.status(400);
//             res.body.should.be.a('object');
//             res.body.should.have
//                 .property('res')
//                 .have.property('error')
//                 .eq('Email Is Not Found (<:>)');

//             done();
//           });
//     });
//   });
// });
// /* =========== /// <==> End <==> ===========*/
