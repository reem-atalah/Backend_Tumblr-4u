/* eslint-disable linebreak-style */
const {createBlog, deleteBlog} = require('../Modules/Users/Controller/control');
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
const {retrieveBlog, editBlog} = require('../Modules/Blogs/Controller/control');
dotenv.config();
connection();
describe('UserBlog Methodes testing', () => {
  describe('Create Blog Testing', ()=>{
    it('should create a new blog', (done)=>{
      const req={
        params: {
          userId: '6196d197a31552477d437404',
        },
        body:
         {
           title: 'Engineering',
           name: 'rawaa88',
           privacy: false,
         },
      };
      createBlog(req.params.userId, req.body.title, req.body.name,
          req.body.privacy, 'password').then((res)=>{
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return false because there is already a blog with the same name'
        , (done)=>{
          const req={
            params: {
              userId: '6196d197a31552477d437404',
            },
            body:
             {
               title: 'Engineering',
               name: 'nour22',
               privacy: false,
             },
          };
          createBlog(req.params.userId, req.body.title, req.body.name,
              req.body.privacy, 'password').then((res)=>{
            expect(res).to.be.eq(null);
            done();
          }).catch(done);
        });
  });
  describe('Delete Blog Testing', ()=>{
    it('should delete the blog', (done)=>{
      const req={
        params: {
          userId: '6196d197a31552477d437404',
        },
        body:
           {
             blogId: '61b3c50e77921393a8bebb84',
           },
      };
      deleteBlog(req.params.userId, req.body.blogId).then((res)=>{
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return false because there is no blog with the requested id'
        , (done)=>{
          describe('Delete Blog Testing', ()=>{
            const req={
              params: {
                userId: '6196d197a31552477d437404',
              },
              body:
               {
                 blogId: '61b3b9e9ae2911b440a03a35c',
               },
            };
            deleteBlog(req.params.userId, req.body.blogId).then((res)=>{
              expect(res).to.be.eq(null);
              done();
            }).catch(done);
          });
        });
  });
  describe('Retrieve Blog Testing', () => {
    it('should retrieve all the blog info given its name', (done) => {
      const req = {
        params: {
          blogName: 'nour',
        },
      };
      retrieveBlog(req.params.blogName).then((res) => {
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return null as there is no blog with the given name', (done) => {
      const req = {
        params: {
          blogName: 'nour123',
        },
      };
      retrieveBlog(req.params.blogName).then((res) => {
        expect(res).to.be.eq(null);
        done();
      }).catch(done);
    });
  });
  describe('Edit Blog Testing', () => {
    it('should edit the blog and return object', (done) => {
      const req={
        params: {
          blogId: '61b33c94c4bab40beeb82b6f',
        },
        body: {
          title: 'noor',
          avatar: 'avatar.jpg',
          accent: 'red',
          description: 'This is my Blog',
        },
      };
      editBlog(req).then((res) => {
        expect(res).to.be.a('object');
        done();
      }).catch(done);
    });
    it('should return a message as there is another blog with that name'
        , (done) => {
          const req={
            params: {
              blogId: '61b33c94c4bab40beeb82b6f',
            },
            body: {
              name: 'nour',
            },
          };
          editBlog(req).then((res) => {
            expect(res).to.be.eq('URL is not available');
            done();
          }).catch(done);
        });
    it('should return null as there is no a blog with the given id', (done) => {
      const req={
        params: {
          blogId: '61b33c94c4bab40bee182b6f',
        },
        body: {
          name: 'nour',
        },
      };
      editBlog(req).then((res) => {
        expect(res).to.be.eq(null);
        done();
      }).catch(done);
    });
  });
});
