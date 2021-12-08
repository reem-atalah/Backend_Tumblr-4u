/* eslint-disable linebreak-style */
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
// ----------------// <=====> Search for hashtags <=====> //-------------//

  describe('User creates a blog', () => {
    let itShouldDo='It should create a new blog and put its id ';
    itShouldDo+='in the blogsId array of the user';
    it(itShouldDo, (done) => {
      const blog= {
        title: 'nour',
        name: 'queennour22',
        privacy: true,
        password: '12345',
      };
      chai
          .request(server)
          .get('/user/new/blog/6196b940183995d4cc1198c2')
          .send(blog)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
                .have.property('message')
                .eq('Blog Created Successfully');
            done();
          });
    });
    itShouldDo='It finds another blog with the same name';
    itShouldDo+=' and returns name not available';
    it(itShouldDo, (done) => {
      const blog= {
        title: 'nour',
        name: 'nour',
        privacy: true,
        password: '12345',
      };
      chai
          .request(server)
          .get('/user/new/blog/619695c9bf5e722b10e141c2')
          .send(blog)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
                .have.property('message')
                .eq('name is not available');
            done();
          });
    });
  });
  describe('User retrieves a blog', () => {
    let itShouldDo='It should retrieve a blog ';
    it(itShouldDo, (done) => {
      const blogId= {
        blogId: '61ae81b91b9ee885f03a6866',
      };
      chai
          .request(server)
          .get('/user/retrieve/blog/619695c9bf5e722b10e141c2')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name')
                .eq('nour.tumblr.com');
            done();
          });
    });
    itShouldDo='It doesn\'t find the blog';
    itShouldDo+=' and returns blog not found';
    it(itShouldDo, (done) => {
      const blogId= {
        blogId: '61ae81b91b9ee885f03a6876',
      };
      chai
          .request(server)
          .get('/user/retrieve/blog/619695c9bf5e722b10e141c2')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
                .have.property('message')
                .eq('Blog Not FOUND');
            done();
          });
    });
  });
/*  describe('User follows a blog', () => {
    let itShouldDo='It should put the userId in followers array of blog and';
    itShouldDo+='put blogId in the following_blogs array of the user';
    it(itShouldDo, (done) => {
      const blogId = {blogId: '619957113df6b45019c42d07'};
      chai
          .request(server)
          .post('/user/follow/619695c9bf5e722b10e141c2')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
                .have.property('message')
                .eq('Blog Followed Successfully');
            done();
          });
    });
    itShouldDo='It doesn\'t  find the blog in the database';
    itShouldDo+=' and returns blog not found';
    it(itShouldDo, (done) => {
      // wrong blogId
      const blogId = {blogId: '619957113df6b45019c42d00'};
      chai
          .request(server)
          .post('/user/follow/619695c9bf5e722b10e141c2')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
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
      const blogId = {blogId: '619957113df6b45019c42d07'};
      chai
          .request(server)
          .post('/user/unfollow/619695c9bf5e722b10e141c2')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
                .have.property('message')
                .eq('Blog Unfollowed Successfully');
            done();
          });
    });
    itShouldDo='It doesn\'t find the blog in the database';
    itShouldDo+=' and returns blog not found';
    it(itShouldDo, (done) => {
      const blogId = {blogId: '619957113df6b45019c42d00'};
      chai
          .request(server)
          .post('/user/unfollow/619695c9bf5e722b10e141c2')
          .send(blogId)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
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
      const blockedBlogId = {blockedBlogId: '619957113df6b45019c42d05'};
      chai
          .request(server)
          .post('/blog/block/619957113df6b45019c42d07')
          .send(blockedBlogId)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
                .have.property('message')
                .eq('Blog blocked Successfully');
            done();
          });
    });
    itShouldDo='It doesn\'t  find the blog in the database';
    itShouldDo+=' and returns blog not found';

    it(itShouldDo, (done) => {
      const blockedBlogId = {blockedBlogId: '619957113dfyb45019c42d09'};
      chai
          .request(server)
          .post('/blog/block/619957113df6b45019c42d07')
          .send(blockedBlogId)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
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
      const unblockedBlogId = {unblockedBlogId: '619957113df6b45019c42d05'};
      chai
          .request(server)
          .post('/blog/unblock/619957113df6b45019c42d07')
          .send(unblockedBlogId)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
                .have.property('message')
                .eq('Blog unblocked Successfully');
            done();
          });
    });
    itShouldDo='It doesn\'t find the blog in the database';
    itShouldDo+=' and returns blog not found';

    it(itShouldDo, (done) => {
      const unblockedBlogId = {unblockedBlogId: '619957113dfyb45019c42d09'};
      chai
          .request(server)
          .post('/blog/unblock/619957113df6b45019c42d07')
          .send(unblockedBlogId)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('res')
                .have.property('error')
                .eq('Blog NOT FOUND');
            done();
          });
    });
  });*/
});
// =========== /// <==> End <==> ===========*/
