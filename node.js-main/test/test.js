// ///////////////////////////////////////////////////////////////////
// / <==> /// This File Is The Unit Testing OF Search APIS  /// <==> ///
// ///////////////////////////////////////////////////////////////////

// ================ /// <==> Variables Declaration <==> /// ================
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../script');
chai.should();
chai.use(chaiHttp);
// =========== /// <==> End <==> ===========*/

// ============= /// <==> Unit Testing for followBlog <==> /// =============
describe('User Methods', () => {
// ----------------// <=====> Search for hashtags <=====> //----------------//

  describe('User follows a blog', () => {
    let itShouldDo='It should put the userId in followers array of blog and';
    itShouldDo+='put blogId in the following_blogs array of the user';
    it(itShouldDo, (done) => {
      const blogId = {blogId: '61976787dacdf3325998179c'};
      chai.request(server)
          .post('/user/follow/6193e580747ad05f7f98513e')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('response')
                .have.property('message')
                .eq('Blog Followed Successfully');
            done();
          });
    });
    itShouldDo='It doesn\'t  find the blog in the database';
    itShouldDo+='and returns blog not found';
    it(itShouldDo, (done) => {
      const blogId = {blogId: '61976787dacdf332598179c0'};
      chai.request(server)
          .post('/user/follow/6193e580747ad05f7f98513e')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('response')
                .have.property('error')
                .eq('Blog not found');
            done();
          });
    });
  });
  describe('User unfollows a blog', () => {
    let itShouldDo='It should remove the userId from followers array of';
    itShouldDo+=' blog and remove blogId from following_blogs of the user';
    it(itShouldDo, (done) => {
      const blogId = {blogId: '61976787dacdf3325998179c'};
      chai.request(server)
          .post('/user/unfollow/6193e580747ad05f7f98513e')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('response')
                .have.property('message')
                .eq('Blog Unfollowed Successfully');
            done();
          });
    });
    itShouldDo='It doesn\'t find the blog in the database';
    itShouldDo+='and returns blog not found';
    it(itShouldDo, (done) => {
      const blogId = {blogId: '61976787dacdf332598179c0'};
      chai.request(server)
          .post('/user/unfollow/6193e580747ad05f7f98513e')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('response')
                .have.property('error')
                .eq('Blog not found');
            done();
          });
    });
  });
});
describe('Blog Methods', () => {
  describe('Blog blocks a blog', () => {
    let itShouldDo='It should put the blockedBlogId in blockedBlogs';
    itShouldDo+='array of the blog';

    it(itShouldDo, (done) => {
      const blockedBlogId = {blockedBlogId: '61976787dacdf3325998179c'};
      chai.request(server)
          .post('/blog/block/6195847fe6c15a39f0470726')
          .send(blockedBlogId)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('response')
                .have.property('message')
                .eq('Blog blocked Successfully');
            done();
          });
    });
    itShouldDo='It doesn\'t  find the blog in the database';
    itShouldDo+='and returns blog not found';

    it(itShouldDo, (done) => {
      const blockedBlogId = {blockedBlogId: '61976787dacdf3395998179c'};
      chai.request(server)
          .post('/blog/block/6195847fe6c15a39f0470726')
          .send(blockedBlogId)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('response')
                .have.property('error')
                .eq('Blog NOT FOUND');
            done();
          });
    });
  });
  describe('Blog unblocks a blog', () => {
    let itShouldDo='It should remove the blockedBlogId from blockedBlogs';
    itShouldDo+='array of the blog';

    it(itShouldDo, (done) => {
      const unblockedBlogId = {unblockedBlogId: '61976787dacdf3325998179c'};
      chai.request(server)
          .post('/blog/unblock/6195847fe6c15a39f0470726')
          .send(unblockedBlogId)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('response')
                .have.property('message')
                .eq('Blog unblocked Successfully');
            done();
          });
    });
    itShouldDo='It doesn\'t find the blog in the database';
    itShouldDo+='and returns blog not found';

    it(itShouldDo, (done) => {
      const unblockedBlogId = {unblockedBlogId: '61976787dacdf3395998179c'};
      chai.request(server)
          .post('/blog/unblock/6195847fe6c15a39f0470726')
          .send(unblockedBlogId)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('response')
                .have.property('error')
                .eq('Blog NOT FOUND');
            done();
          });
    });
  });
});
// =========== /// <==> End <==> ===========*/
