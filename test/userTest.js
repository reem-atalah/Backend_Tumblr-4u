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
// const userServices = require('../Modules/Users/Controller/services');
// const {expect} = require('chai');

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
// /*
//  ///////// <---------> ======== <---------> ///////// =====================>
//  ///////// <---------> Check Mail <---------> ///////// =====================>
//  ///////// <---------> ======== <---------> ///////// =====================>
// */

//   describe('Check Mail Function', () => {
//     // ----------------// <=====> 1-Case <=====> //----------------//
//     it('It Should Return True', (done) => {
//       const email = 'ahmed0@gmail.com';
//       userServices.checkMail(email).then((result)=>{
//         expect(result).to.be.eq(true);
//         done();
//       }).catch(done);
//     });
//     // ----------------// <=====> 2-Case <=====> //----------------//
//     it('It Should Return False', (done) => {
//       const email = 'Afnan@gmail.com';
//       userServices.checkMail(email).then((result)=>{
//         expect(result).to.be.eq(false);
//         done();
//       }).catch(done);
//     });
//   });

//   /*
//  ///////// <---------> ======== <---------> ///////// =====================>
//  ///////// <---------> Check BlogName <---------> ///////// =====================>
//  ///////// <---------> ======== <---------> ///////// =====================>
// */
//   describe('Check blogName Function', () => {
//   // ----------------// <=====> 1-Case <=====> //----------------//
//     it('It Should Return True', (done) => {
//       const blogName = 'Gail Marks';
//       userServices.checkBlogName(blogName).then((result)=>{
//         expect(result).to.be.eq(true);
//         done();
//       }).catch(done);
//     });
//     // ----------------// <=====> 2-Case <=====> //----------------//
//     it('It Should Return False', (done) => {
//       const blogName = 'CMP2023';
//       userServices.checkBlogName(blogName).then((result)=>{
//         expect(result).to.be.eq(false);
//         done();
//       }).catch(done);
//     });
//   });

//   /*
//  ///////// <---------> ======== <---------> ///////// =====================>
//  ///////// <---------> Create New User <---------> ///////// =====================>
//  ///////// <---------> ======== <---------> ///////// =====================>
// */
//   describe('Create User Function', () => {
//   // ----------------// <=====> 1-Case <=====> //----------------//
//     it('It Should Create New User', (done) => {
//       const email = 'ahmed.ayman.cmp@gmail.com';
//       const blogName = 'CMP';
//       const password = '12345';
//       const age = '21';

//       userServices.createUser(email, password, blogName, age).then((result)=>{
//         expect(result).to.be.eq('Created');
//         done();
//       }).catch(done);
//     });
//   });

//   /*
//  ///////// <---------> ======== <---------> ///////// =====================>
//  ///////// <---------> verify Mail <---------> ///////// =====================>
//  ///////// <---------> ======== <---------> ///////// =====================>
// */
//   describe('Send Verification Mail To User', () => {
//   // ----------------// <=====> 1-Case <=====> //----------------//
//     it('It Should Send Verification Mail To User', (done) => {
//       const name = 'Ahmed';
//       const email = 'ahmed.ayman.1420@gmail.com';
//       const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobWVkLmF5bWFuLmFhMTQyMDBAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MzkxMjE0ODR9.J6XWRY5oXIEgJmMfikrcJlUwXLIk3D-VlZNOehHb4vc';

//       userServices.verifyMail(name, email, token).then((result)=>{
//         expect(result).to.be.eq('verification mail sent');
//         done();
//       }).catch(done);
//     });
//   });

//   /*
//  ///////// <---------> ======== <---------> ///////// =====================>
//  ///////// <---------> Check password <---------> ///////// =====================>
//  ///////// <---------> ======== <---------> ///////// =====================>
// */
//   describe('Checks Input Password', () => {
//   // ----------------// <=====> 1-Case <=====> //----------------//
//     it('It Should Return True', (done) => {
//       const password = '123';
//       const oldPassword = '$2b$08$0eaSh6V.pAvCyX8LFE12Ve52cSHUUPVrV0h7DDx0SwA5eCSIGsKsq';

//       userServices.checkPassword(password, oldPassword).then((result)=>{
//         expect(result).to.be.eq(true);
//         done();
//       }).catch(done);
//     });

//     // ----------------// <=====> 2-Case <=====> //----------------//
//     it('It Should Return False', (done) => {
//       const password = '12345';
//       const oldPassword = '$2b$08$0eaSh6V.pAvCyX8LFE12Ve52cSHUUPVrV0h7DDx0SwA5eCSIGsKsq';

//       userServices.checkPassword(password, oldPassword).then((result)=>{
//         expect(result).to.be.eq(false);
//         done();
//       }).catch(done);
//     });
//   });

//   /*
//  ///////// <---------> ======== <---------> ///////// =====================>
//  ///////// <---------> Create New Google User <---------> ///////// =====================>
//  ///////// <---------> ======== <---------> ///////// =====================>
// */
//   describe('Create User Google Function', () => {
//   // ----------------// <=====> 1-Case <=====> //----------------//
//     it('It Should Create New Google User', (done) => {
//       const email = 'ahmed.ayman.cmp@gmail.com';
//       const password = '12345';

//       userServices.createUser(email, password).then((result)=>{
//         expect(result).to.be.eq('Created');
//         done();
//       }).catch(done);
//     });
//   });
// });
// /* =========== /// <==> End <==> ===========*/
