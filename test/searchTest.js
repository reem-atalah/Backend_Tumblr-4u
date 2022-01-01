/* eslint-disable linebreak-style */
// ///////////////////////////////////////////////////////////////////
// / <==> /// This File Is The Unit Testing OF Search APIS  /// <==> ///
// ///////////////////////////////////////////////////////////////////

// ================ /// <==> Variables Declaration <==> /// ================
const chai = require('chai');
const chaiHttp = require('chai-http');
// const server = require('../script');
const search=require('../Modules/Search/Search dashborad/Controller/control');

const expect=chai.expect;

chai.should();
chai.use(chaiHttp);

// =========== /// <==> Database Connection <==> ===========*/

const dotenv = require('dotenv');
const connection = require('../Configurations/configuration');
dotenv.config();
connection();
// =========== /// <==> End <==> ===========*/

// ================ /// <==> Unit Testing for Search <==> /// ===============
describe('Search APIs', () => {
// ----------------// <=====> Search for hashtags <=====> //--------------//

  describe('Search Dashboard Testing', () => {
    it('It Should get element of hashtags in posts', (done) => {
      const wordName ={
        wordName: 'cm',
      };
      search.autoCompleteSearchDashWord(wordName.wordName)
          .then((res)=>{
            expect(res.resultHashTag[0]).to.be.equal('cmp');
            done();
          }).catch(done);
    });


    // --------// <=====> hashtags are not sensitive case <=====> //----------//
    it('It shows that it is not case sensitive', (done) => {
      const wordName ={
        wordName: 'CM',
      };
      search.autoCompleteSearchDashWord(wordName.wordName)
          .then((res)=>{
            expect(res.resultHashTag[0]).to.be.equal('cmp');
            done();
          }).catch(done);
    });

    // // --------// <=====> get posts has the hashtags <=====> //------------//
    it('It Should get posts has the hashtags with the regex', (done) => {
      const wordName ={
        wordName: 'cm',
      };
      search.autoCompleteSearchDashWord(wordName.wordName)
          .then((res)=>{
            post=[
              {
                "_id": "61ca5d91a8a4556c5b24f1f4",
                "blogId": "61c9d6b82569f9abb33ebe04",
                "postHtml": "<img width=\"100%\" src=\"https://64.media.tumblr.com/45dde30f17353eb13ca1be55063e3484/1ef148912162fc2f-7e/s400x600/739708b94fe41c6b50eee06fd95d8d08eeaa0cb4.jpg]\" alt=\"\">",
                "type": "text",
                "state": "published",
                "tags": [
                    "edit",
                    "cmp",
                    "Trending"
                ],
                "notesId": "61ca5d91a8a4556c5b24f1f3",
                "isDeleted": false,
                "isReported": false,
                "postUrl": "/61ca5d91a8a4556c5b24f1f4/show_post",
                "__v": 1
            },
            ];
            expect(res.resultPostHashTag[0].blogId).to.be.equal(post[0].blogId);
            done();
          }).catch(done);
    });

    // // --------// <=====> Search for blogs <=====> //------------//
    it('It Should get blog with the regex', (done) => {
      const wordName ={
        wordName: 'CMP',
      };
      search.autoCompleteSearchDashWord(wordName.wordName)
          .then((res)=>{
            expect(res.resultBlogs[0].name)
                .to.be.equal('CMP-2023');
            done();
          }).catch(done);
    });

    // // --------// <=====> Search for interested tags <=====> //------------//
    it('It Should get followed/interested tags by a user', (done) => {
      const wordName ={
        userEmail: 'ahmed.ayman.1420@gmail.com',
      };
      search.autoCompleteSearchDash(wordName.userEmail)
          .then((res)=>{
            // console.log(res);
            expect(res.resultFollowedTag[2]).to.be.equal('Writing');
            done();
          }).catch(done);
    });

    // // --------// <=====> Search for interests <=====> //------------//
    it('It Should get interests when no word is entered', (done) => {
      const wordName ={
        userEmail: 'ahmed.ayman.1420@gmail.com',
      };
      search.autoCompleteSearchDash(wordName.userEmail)
          .then((res)=>{
            // console.log(res);
            expect(res.resultFollowedTag[3]).to.be.equal('Sports');
            done();
          }).catch(done);
    });
    // // --------// <=====> get posts has tags for interests <=====> //------------//
    it('It Should get posts has interested hashtags', (done) => {
      const wordName ={
        userEmail: 'ahmed.ayman.1420@gmail.com',
      };
      search.autoCompleteSearchDash(wordName.userEmail)
          .then((res)=>{
            post=[
              {
                "_id": "61ca5d91a8a4556c5b24f1f4",
                "blogId": "61c9d6b82569f9abb33ebe04",
                "postHtml": "<img width=\"100%\" src=\"https://64.media.tumblr.com/45dde30f17353eb13ca1be55063e3484/1ef148912162fc2f-7e/s400x600/739708b94fe41c6b50eee06fd95d8d08eeaa0cb4.jpg]\" alt=\"\">",
                "type": "text",
                "state": "published",
                "tags": [
                    "edit",
                    "cmp",
                    "Trending"
                ],
                "notesId": "61ca5d91a8a4556c5b24f1f3",
                "isDeleted": false,
                "isReported": false,
                "postUrl": "/61ca5d91a8a4556c5b24f1f4/show_post",
                "__v": 1
            },
            ];
            // console.log('res.resultPostHashTag[0].blogId: ', res);
            expect(res.resultPostHashTag[0].blogId).to.be.equal(post[0].blogId);
            done();
          }).catch(done);
    });
  });
});
// =========== /// <==> End <==> ===========*/
