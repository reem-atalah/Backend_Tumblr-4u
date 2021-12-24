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
        userId: '6196d197a31552477d437404',
        wordName: 'dep',
      };
      search.autoCompleteSearchDash(wordName.userId, wordName.wordName)
          .then((res)=>{
            expect(res.resultHashTag[0]).to.be.equal('deposit');
            done();
          }).catch(done);
    });


    // --------// <=====> hashtags are not sensitive case <=====> //----------//
    it('It shows that it is not case sensitive', (done) => {
      const wordName ={
        userId: '6196d197a31552477d437404',
        wordName: 'DEP',
      };
      search.autoCompleteSearchDash(wordName.userId, wordName.wordName)
          .then((res)=>{
            expect(res.resultHashTag[0]).to.be.equal('deposit');
            done();
          }).catch(done);
    });

    // // --------// <=====> get posts has the hashtags <=====> //------------//
    it('It Should get posts has the hashtags with the regex', (done) => {
      const wordName ={
        userId: '6196d197a31552477d437404',
        wordName: 'dep',
      };
      search.autoCompleteSearchDash(wordName.userId, wordName.wordName)
          .then((res)=>{
            post=[
              {
                _id: '6199531b94c23324c69ea65d',
                blogId: 'Metal',
                postHtml: '</>',
                type: 'text',
                state: 'published',
                tags: ['deposit', 'hacking', 'morph'],
                __v: 0,
              },
            ];
            expect(res.resultPostHashTag[0].blogId).to.be.equal(post[0].blogId);
            done();
          }).catch(done);
    });

    // // --------// <=====> Search for blogs <=====> //------------//
    it('It Should get blog with the regex', (done) => {
      const wordName ={
        userId: '6196d197a31552477d437404',
        wordName: 'hazel',
      };
      search.autoCompleteSearchDash(wordName.userId, wordName.wordName)
          .then((res)=>{
            expect(res.resultBlogs[0].name)
                .to.be.equal('Mr. Hazel Schamberger');
            done();
          }).catch(done);
    });

    // // --------// <=====> Search for interested tags <=====> //------------//
    it('It Should get followed/interested tags by a blog', (done) => {
      const wordName ={
        userId: '61b4df38206b4252a939a0bc',
      };
      search.autoCompleteSearchDash(wordName.userId)
          .then((res)=>{
            console.log(res);
            expect(res.resultFollowedTag[0]).to.be.equal('matrix');
            done();
          }).catch(done);
    });

    // // // --------// <=====> Search for nothing <=====> //------------//
    // it('It Should get nothing when nothing is entered', (done) => {
    //   const wordName ={wordName: ''};
    //   search.autoCompleteSearchDash(wordName.userId, wordName.wordName)
    //       .then((res)=>{
    //         console.log('res, nothing: ', res);
    //         expect(res).to.be.empty;
    //         done();
    //       }).catch(done);
    // });
  });
});
// =========== /// <==> End <==> ===========*/
