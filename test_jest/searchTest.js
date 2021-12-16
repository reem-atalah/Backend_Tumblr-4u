// /* eslint-disable linebreak-style */
// // ///////////////////////////////////////////////////////////////////
// // / <==> /// This File Is The Unit Testing OF Search APIS  /// <==> ///
// // ///////////////////////////////////////////////////////////////////

// // ================ /// <==> Variables Declaration <==> /// ================
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../script');

// chai.should();
// chai.use(chaiHttp);
// // =========== /// <==> End <==> ===========*/

// // ================ /// <==> Unit Testing for Search <==> /// ===============
// describe('Search APIs', () => {
// // ----------------// <=====> Search for hashtags <=====> //--------------//

//   describe('Search Dashboard Search', () => {
//     it('It Should get element of hashtags in posts', (done) => {
//       const wordName ={wordName: 'dep'};
//       chai
//           .request(server)
//           .get('/autoCompleteSearchDash')
//           .send(wordName)
//           .end((err, res) => {
//             console.log(res.body);
//             res.body[0][0].should.be.eq('deposit');
//             done();
//           });
//     });
//   });

//   // --------// <=====> hashtags are not sensitive case <=====> //-----------//
//   describe('Search Dashboard Search', () => {
//     it('It shows that it is not case sensitive', (done) => {
//       const wordName ={wordName: 'DEP'};
//       chai
//           .request(server)
//           .get('/autoCompleteSearchDash')
//           .send(wordName)
//           .end((err, res) => {
//             console.log(res.body);
//             res.body[0][0].should.be.eq('deposit');
//             done();
//           });
//     });
//   });

//   // --------// <=====> Search for blogs <=====> //------------//
//   describe('Search Dashboard Search', () => {
//     it('It Should get blog with the regex', (done) => {
//       const wordName ={wordName: 'hazel'};
//       chai
//           .request(server)
//           .get('/autoCompleteSearchDash')
//           .send(wordName)
//           .end((err, res) => {
//             console.log(res.body);
//             res.body[1][0].name.should.be.eq('Mr. Hazel Schamberger');
//             done();
//           });
//     });
//   });

//   // --------// <=====> Search for interested tags <=====> //------------//
//   describe('Search Dashboard Search', () => {
//     it('It Should get followed/interested tags by a blog', (done) => {
//       const wordName ={wordName: 'mat'};
//       chai
//           .request(server)
//           .get('/autoCompleteSearchDash')
//           .send(wordName)
//           .end((err, res) => {
//             console.log(res.body);
//             res.body[2][0].followedTags[0].should.be.eq('matrix');
//             done();
//           });
//     });
//   });

//   // --------// <=====> Search for nothing <=====> //------------//
//   describe('Search Dashboard Search', () => {
//     it('It Should get nothing when nothing is entered', (done) => {
//       const wordName ={wordName: ''};
//       chai
//           .request(server)
//           .get('/autoCompleteSearchDash')
//           .send(wordName)
//           .end((err, res) => {
//             console.log(res.body);
//             res.body.should.be.eq(',wordName, is not allowed to be empty');
//             done();
//           });
//     });
//   });
// });
// // =========== /// <==> End <==> ===========*/
