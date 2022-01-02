/* eslint-disable linebreak-style */
// ====================================================================
// ====================================================================
// ====================================================================
/*
===================== ///////// <--------->
======== <---------> ///////// =====================>
=========  <---------> Unit Testing OF User APIs <---------> /////////=====>
===================== ///////// <---------> =
======= <---------> ///////// =====================>
*/
// ==================================================================
// ==================================================================
// ==================================================================


/* ====================== /// <==> Variables Declaration <==>
========= */
const chai = require('chai');
const chaiHttp = require('chai-http');
// const server = require('../script');
const userServices = require('../Modules/Users/Controller/services');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { expect } = require('chai');
const notificationFunction = require('../Modules/Notifications/Controller/control');
const userFunctions = require('../Modules/Users/Controller/control');


// const connect = require('../Configurations/configuration');

chai.should();
chai.use(chaiHttp);
/* =========== /// <==> End <==> ===========*/


/* =======================================*/
/* ==============================================
===============*/
/* ====================== /// <==> Unit Testing <==> /// =
==== */
/* ========================================================
=====*/
/* =======================================*/

describe('User Functions', () => {
   /*
   ///////// <---------> ======== <---------> ///////// =====================>
   ///////// <---------> Retrieve User <---------> ///////// =====================>
   ///////// <---------> ======== <---------> ///////// =====================>
  */
 describe('Retrieve User Testing', () => {
    it('should return the user with the given id', (done) => {
     
      const userId='61c9e0215954b6332bc203f0';
      userFunctions.retrieveUser(userId).then((res) => {
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return null as the user is not found', (done) => {
     
      const userId='61c9e0215994b6332bc203f0';
      userFunctions.retrieveUser(userId).then((res) => {
        expect(res).to.be.a('null');
        done();
      }).catch(done);
    });
  });
     /*
   ///////// <---------> ======== <---------> ///////// =====================>
   ///////// <---------> Delete User <---------> ///////// =====================>
   ///////// <---------> ======== <---------> ///////// =====================>
  */
  const userEmail='rawaa.2000@gmail.com';
  describe('Delete User Testing', ()=>{
    it('should delete the user and return its primary Blog after deletion', (done)=>{
       userFunctions.deleteUser(userEmail)
        .then((res)=>{
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return false because there is no user with the requested email'
        , (done)=>{
            userFunctions.deleteUser(userEmail)
                .then((res)=>{
                  expect(res).to.be.eq(null);
                  done();
                }).catch(done);
          });
  });
   /*
   ///////// <---------> ======== <---------> ///////// =====================>
   ///////// <---------> Update User <---------> ///////// =====================>
   ///////// <---------> ======== <---------> ///////// =====================>
  */
  describe('Update user', () => {

    
   /*
   ///////// <---------> ======== <---------> ///////// =====================>
   ///////// <---------> Update Interests of user <---------> ///////// =====================>
   ///////// <---------> ======== <---------> ///////// =====================>
  */
    it('It sets interests of the user', (done) => {
      const email = 'nour.2020@gmail.com';
      const interests=[
        "flowers",
        "math",
        "nasa",
        "education"
      ]
      userFunctions.getInterests(email, interests)
      .then((result) => {
        expect(result.followedTags[0]).to.be.eq(interests[0]);
        done();
      }).catch(done);
    });

    
   /*
   ///////// <---------> ======== <---------> ///////// =====================>
   ///////// <---------> Update color theme of user <---------> ///////// =====================>
   ///////// <---------> ======== <---------> ///////// =====================>
  */
    it('It updates color theme of the user', (done) => {
      const email = 'nour.2020@gmail.com';
      const colorNumb=3;
      userFunctions.updateColor(email, colorNumb).then((result) => {
        console.log('result: ', result);
        expect(result.bodyColor).to.be.eq(colorNumb);
        done();
      }).catch(done);
    });
  });

  /*
   ///////// <---------> ======== <---------> ///////// =====================>
   ///////// <---------> Check Mail <---------> ///////// =====================>
   ///////// <---------> ======== <---------> ///////// =====================>
  */

   describe('Check Mail Function', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Return True', (done) => {
      const email = 'ahmed.ayman.1420@gmail.com';
      userServices.checkMail(email).then((result) => {
        expect(result).to.be.eq(true);
        done();
      }).catch(done);
    });
    // ----------------// <=====> 2-Case <=====> //----------------//
    it('It Should Return False', (done) => {
      const email = 'Afnan@gmail.com';
      userServices.checkMail(email).then((result) => {
        expect(result).to.be.eq(false);
        done();
      }).catch(done);
    });
  });

  /*
 ///////// <---------> ======== <---------> ///////// =====================>
 ///////// <---------> Check BlogName <---------> ///////// ===============>
 ///////// <---------> ======== <---------> ///////// =====================>
*/
  describe('Check blogName Function', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Return True', (done) => {
      const blogName = 'CMP-2023';
      userServices.checkBlogName(blogName).then((result) => {
        expect(result).to.be.eq(true);
        done();
      }).catch(done);
    });
    // ----------------// <=====> 2-Case <=====> //----------------//
    it('It Should Return False', (done) => {
      const blogName = 'ABCD';
      userServices.checkBlogName(blogName).then((result) => {
        expect(result).to.be.eq(false);
        done();
      }).catch(done);
    });
  });

  /*
 ///////// <---------> ======== <---------> ///////// =====================>
 ///////// <---------> Create New User <---------> ///////// =================>
 ///////// <---------> ======== <---------> ///////// =====================>
*/
  describe('Create User Function', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Create New User', (done) => {
      const email = 'ahmed.ayman.cmp@gmail.com';
      const blogName = 'CMP';
      const password = '12345';
      const age = '21';

      userServices.createUser(email, password, blogName, age).then((result) => {
        expect(result).to.be.eq('Created');
        done();
      }).catch(done);
    });
  });

  /*
 ///////// <---------> ======== <---------> ///////// =====================>
 ///////// <---------> verify Mail <---------> ///////// =====================>
 ///////// <---------> ======== <---------> ///////// =====================>
*/
  describe('Send Verification Mail To User', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Send Verification Mail To User', (done) => {
      const name = 'Rema';
      const email = 'reem.atala555@gmail.com';
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZW0uYXRhbGE1NTVAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MzkwNzk3MDd9.V3NXoggu_z7xWDQC8XksfFLsfkjuJsIaWqFwH10nBlE';

      userServices.verifyMail(name, email, token).then((result) => {
        expect(result).to.be.eq('verification mail sent');
        done();
      }).catch(done);
    });
  });

  /*
 ///////// <---------> ======== <---------> ///////// =====================>
 ///////// <---------> Check password <---------> ///////// ================>
 ///////// <---------> ======== <---------> ///////// =====================>
*/
  describe('Checks Input Password', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Return True', (done) => {
      const password = '123';
      const oldPassword =
        '$2b$08$0eaSh6V.pAvCyX8LFE12Ve52cSHUUPVrV0h7DDx0SwA5eCSIGsKsq';

      userServices.checkPassword(password, oldPassword).then((result) => {
        expect(result).to.be.eq(true);
        done();
      }).catch(done);
    });

    // ----------------// <=====> 2-Case <=====> //----------------//
    it('It Should Return False', (done) => {
      const password = '12345';
      const oldPassword =
        '$2b$08$0eaSh6V.pAvCyX8LFE12Ve52cSHUUPVrV0h7DDx0SwA5eCSIGsKsq';

      userServices.checkPassword(password, oldPassword).then((result) => {
        expect(result).to.be.eq(false);
        done();
      }).catch(done);
    });
  });

  /*
   ///////// <---------> ======== <---------> ///////// =====================>
   ///////// <---------> Create New Google User <---------> ///////// ===========>
   ///////// <---------> ======== <---------> ///////// =====================>
  */
  describe('Create User Google Function', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Create New Google User', (done) => {
      const email = 'ahmed.ayman.cmp@gmail.com';
      const password = '12345';

      userServices.createUser(email, password).then((result) => {
        expect(result).to.be.eq('Created');
        done();
      }).catch(done);
    });
  });

  /*
   ///////// <---------> ======== <---------> ///////// =====================>
   ///////// <---------> Create Primary Blog <---------> ///////// ===========>
   ///////// <---------> ======== <---------> ///////// =====================>
  */
  describe('Create Primary Blog Function', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Create Primary Blog When User Sign up ', (done) => {
      const email = 'ahmedatcmp@gmail.com';
      const name = 'Game-1';

      userServices.createPrimaryBlog(email, name).then((result) => {
        expect(result).to.be.eq('Blog Created');
        done();
      }).catch(done);
    });
  });

  /*
///////// <---------> ======== <---------> ///////// =====================>
///////// <---------> Forget Password Mail <---------> ///////// ===========>
///////// <---------> ======== <---------> ///////// =====================>
*/
  describe('Forget Passowrd Mail', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Sned Email To User', (done) => {
      const name = 'Rema';
      const email = 'ahmed.ayman.1420@gmail.com';

      userServices.forgetPasswordMail(name, email).then((result) => {
        expect(result).to.be.eq('forget password mail sent');
        done();
      }).catch(done);
    });
  });


  /*
  ///////// <---------> ======== <---------> ///////// =====================>
  ///////// <---------> Check Post Id <---------> ///////// ===========>
  ///////// <---------> ======== <---------> ///////// =====================>
  */
  describe('Check Post Id', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Check Post Id', (done) => {
      const postId = '61ca5d91a8a4556c5b24f1f4';

      userServices.checkPostId(postId).then((result) => {
        expect(result).to.be.eq(true);
        done();
      }).catch(done);
    });
    // ----------------// <=====> 2-Case <=====> //----------------//
    it('It Check Post Id', (done) => {
      const postId = '61ca5d91a8a4556c5b24f1f0';

      userServices.checkPostId(postId).then((result) => {
        expect(result).to.be.eq(false);
        done();
      }).catch(done);
    });
  });

  /*
    ///////// <---------> ======== <---------> ///////// =====================>
    ///////// <---------> get UserId From PostId <---------> ///////// ===========>
    ///////// <---------> ======== <---------> ///////// =====================>
    */
  describe('get UserId From PostId ', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('get UserId From PostId ', (done) => {
      const postId = '61ca5d92a8a4556c5b24f1fa';
      userServices.getUserIdFromPostId(postId).then((result) => {
        expect(result).to.be.eq('61c9d749b33bf76a71baed86');
        done();
      }).catch(done);
    });
  });
//61ca5d92a8a4556c5b24f209
  /*
  ///////// <---------> ======== <---------> ///////// =====================>
  ///////// <---------> add Notification <---------> ///////// ===========>
  ///////// <---------> ======== <---------> ///////// =====================>
  */
  describe('Create Notification', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Create Notification', (done) => {
      const postId = '61ca5d92a8a4556c5b24f1fa';
      const type = 'like';

      notificationFunction.addNotification(postId, type).then((result) => {
        expect(result).to.be.eq('Created');
        done();
      }).catch(done);
    });
  });

  /*
  ///////// <---------> ======== <---------> ///////// =====================>
  ///////// <---------> add Chat <---------> ///////// ===========>
  ///////// <---------> ======== <---------> ///////// =====================>
  */
  describe('Create New Chat', () => {
    // ----------------// <=====> 1-Case <=====> //----------------//
    it('It Should Create New Chat Message', (done) => {

      message = 'Test';
      sendUserId = '61c9d749b33bf76a71baed86';
      receiveUserId = '61c9e0215954b6332bc203f0';
      sendBlogName = 'CMP-2023';
      recieveBlogName = 'Engineer';

      notificationFunction.addchat(message, sendUserId, receiveUserId, sendBlogName, recieveBlogName).then((result) => {
        expect(result).to.be.eq('Created');
        done();
      }).catch(done);
    });
  });

});


/* =========== /// <==> End <==> ===========*/