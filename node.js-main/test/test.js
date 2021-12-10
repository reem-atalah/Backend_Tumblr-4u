/* eslint-disable linebreak-style */
const {createBlog, deleteBlog}=require('../Modules/Users/Controller/control');
// const axios=require('axios');
const chai=require('chai');
// const sinon = require('sinon');
const chaiHttp = require('chai-http');
// const schema = require('../Model/model');
const expect=chai.expect;
chai.should();
chai.use(chaiHttp);
const dotenv = require('dotenv');
const connection = require('../Configurations/configuration');
dotenv.config();
connection();
describe('UserBlog Methodes testing', () =>{
  describe('Create Blog Testing', ()=>{
    it('should create a new blog', (done)=>{
      const req={
        params: {
          userId: '6196d197a31552477d437404',
        },
        body:
       {
         title: 'Engineering',
         name: 'rawaa33',
         privacy: false,
       },
      };
      createBlog(req.params.userId, req.body.title, req.body.name,
          req.body.privacy, 'password').then((res)=>{
        expect(res).to.be.a('object');
        expect(res.name).to.be.eq(req.body.name);
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
           blogId: '61b3ba3d39ef6cd7052287a2',
         },
      };
      deleteBlog(req.params.userId, req.body.blogId).then((res)=>{
        expect(res).to.be.a('object');
        expect(res.blogId).to.be.eq(req.body.blogId);
        done();
      }).catch(done);
    });
  /*  it('should return false because there is no blog with the requested id'
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
        });*/
  });
});
