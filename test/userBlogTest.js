/* eslint-disable linebreak-style */
const userFunctions = require('../Modules/Users/Controller/control');
// const axios=require('axios');
const chai = require('chai');
// const sinon = require('sinon');
const chaiHttp = require('chai-http');
// const schema = require('../Model/model');
const expect = chai.expect;
chai.should();
chai.use(chaiHttp);
const dotenv = require('dotenv');
const connection = require('../Configurations/configuration');
const blogFunctions = require('../Modules/Blogs/Controller/control');
const { Schema } = require('mongoose');
//dotenv.config();
//connection();
describe('UserBlog Methodes Testing', () => {
  it('It gets checkout these blogs', (done) => {
    
    blogFunctions.retrieveRandomBlogs()
        .then((res)=>{
        expect(res.length).to.be.equal(10);
        done();
        }).catch(done);
});

  const email= 'rawaa.2000@gmail.com';
  const blogName='nour244202033';
  describe('Create Blog Testing', ()=>{

    it('should create a new blog', (done)=>{
      const func_params={
       decoded: {
          email:email,
        },
        body:
         {
           title: 'Engineering',
           name:blogName ,
           privacy: false,
         },
      };
      userFunctions.createBlog(func_params).then((res)=>{
        expect(res).to.be.a('object');
        expect(res.name).to.be.eq( blogName);
        done();
      }).catch(done);
    });
    it('should return false because there is already a blog with the same name'
        , (done)=>{
          const func_params={
            decoded: {
               email: email,
             },
             body:
              {
                title: 'Engineering',
                name:blogName,
                privacy: false,
              },
           };
          userFunctions.createBlog(func_params).then((res)=>{
            expect(res).to.be.eq(null);
            done();
          }).catch(done);
        });
  });
 
  describe('Retrieve Blog Testing', () => {
    it('should retrieve all the blog info given its name', (done) => {
      blogFunctions.retrieveBlog('61c9e680b47e807b87e3dbe9').then((res) => {
        expect(res).to.be.a('object');
        expect(res.name).to.be.eq('Diana');
        done();
      }).catch(done);
    });
    it('should return null as there is no blog with the given name', (done) => {
      blogFunctions.retrieveBlog('61b33c94c4bab40beeb82b6f').then((res) => {
        expect(res).to.be.eq(null);
        done();
      }).catch(done);
    });
  });
  describe('Edit Blog Testing', () => {
    it('should edit the blog and return object', (done) => {
      const func_params={
        params: {
          blogId: '61c9e680b47e807b87e3dbe9',
        },
        body: {
          title: 'noor',
          avatar: 'avatar.jpg',
          accent: 'red',
          description: 'This is my Blog',
        },
      };
      blogFunctions.editBlog(func_params).then((res) => {
        expect(res).to.be.a('object');
        expect(res.title).to.be.eq( 'noor');
        expect(res.avatar).to.be.eq('avatar.jpg');
        expect(res.accent).to.be.eq('red');
        expect(res.description).to.be.eq('This is my Blog');
        done();
      }).catch(done);
    });
    it('should return a message as there is another blog with that name', (done) => {
          const func_params={
            params: {
              blogId: '61c9e680b47e807b87e3dbe9',
            },
            body: {
              name: blogName,
            },
          };
          blogFunctions.editBlog(func_params).then((res) => {
            expect(res).to.be.eq('URL is not available');
            done();
          }).catch(done);
        });
    it('should return null as there is no a blog with the given id', (done) => {
      const func_params={
        params: {
          blogId: '61b33c94c4bab40bee182b6f',
        },
        body: {
          name: 'nour',
        },
      };
      blogFunctions.editBlog(func_params).then((res) => {
        expect(res).to.be.eq(null);
        done();
      }).catch(done);
    });
  });
  describe('Follow Blog Testing', () => {
    it('should return object of the followed blog', (done) => {
      const func_params={
        decoded: {
           email:email,
         },
         body:
          {
           blogId:'61c9e7b3b47e807b87e3dc09'
          },
       };
      userFunctions.followBlog(func_params).then((res) => {
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return null as there is no a blog with the given id', (done) => {
      const func_params={
        decoded: {
           email:email,
         },
         body:
          {
           blogId:'61c9e7b3b47e807b87e3dc00'
          },
       };
      userFunctions.followBlog(func_params).then((res) => {
        expect(res).to.be.eq(null);
        done();
      }).catch(done);
    });
  });
  describe('Does Follow Testing Part 1', () => {
    it('should return object of the user if he/she follows this blog', (done) => {
     
        const blogId='61c9e7b3b47e807b87e3dc09';
        userFunctions.doesFollow(email,blogId).then((res) => {
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
  });
  describe('Unfollow Blog Testing', () => {
    it('should return object of the unfollowed blog', (done) => {
      const func_params={
        decoded: {
          email:email,
        },
        body: {

          blogId:'61c9e7b3b47e807b87e3dc09'
        },
      };
      userFunctions.unfollowBlog(func_params).then((res) => {
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return null as there is no a blog with the given id', (done) => {
      const func_params={
        decoded: {
           email:email,
         },
         body:
          {
           blogId:'61c9e7b3b47e807b87e3dc00'
          },
       };
      userFunctions.unfollowBlog(func_params).then((res) => {
        expect(res).to.be.eq(null);
        done();
      }).catch(done);
    });
  });
  describe('Does Follow Testing Part 2', () => {
    it('should return null because the user does not follow this blog any more', (done) => {
     
      const blogId='61c9e7b3b47e807b87e3dc09';
      userFunctions.doesFollow(email,blogId).then((res) => {
        expect(res).to.be.a('null');
        done();
      }).catch(done);
    });
  });
 
  describe('Block Blog Testing', () => {
    it('should return object of the blocked blog', (done) => {
      const blogId= '61c9e584b47e807b87e3dbd0';
      const blockedBlogId='61c9e680b47e807b87e3dbe9';

      blogFunctions.blockBlog(blogId,blockedBlogId).then((res) => {
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return null as there is no a blog with the given id', (done) => {
      const blogId= '61c9e584b47e807b87e3dbd0';
      const blockedBlogId='61c9e680b4e807b887e3dbe9';

      blogFunctions.blockBlog(blogId,blockedBlogId).then((res) => {
        expect(res).to.be.eq(null);
        done();
      }).catch(done);
    });
  });
  describe('Unblock Blog Testing', () => {
    it('should return object of the unblocked blog', (done) => {
      const blogId= '61c9e584b47e807b87e3dbd0';
      const blockedBlogId='61c9e680b47e807b87e3dbe9';

      blogFunctions.unblockBlog(blogId,blockedBlogId).then((res) => {
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return null as there is no a blog with the given id', (done) => {
      const blogId= '61c9e584b47e807b87e3dbd0';
      const blockedBlogId='61c9e680b00e807b87e3dbe9';

      blogFunctions.unblockBlog(blogId,blockedBlogId).then((res) => {
        expect(res).to.be.eq(null);
        done();
      }).catch(done);
    });
  });
 
  const blogId='61d0f0c1936fcfdfbdac3d02';
  describe('Delete Blog Testing', ()=>{
    it('should delete the blog', (done)=>{
       userFunctions.deleteBlog(email, blogId)
        .then((res)=>{
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return false because there is no blog with the requested id'
        , (done)=>{
            userFunctions.deleteBlog(email, blogId)
                .then((res)=>{
                  expect(res).to.be.eq(null);
                  done();
                }).catch(done);
          });
        
  });
});
