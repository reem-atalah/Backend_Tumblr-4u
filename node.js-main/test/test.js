/////////////////////////////////////////////////////////////////////
/// <==> /// This File Is The Unit Testing OF User APIS  /// <==> ///
/////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../script");
const connect = require('../Configurations/configuration');

chai.should();
chai.use(chaiHttp);
/* =========== /// <==> End <==> ===========*/


/* ====================== /// <==> Unit Testing <==> /// ====================== */
describe('Post APIs', () => {

    //----------------// <=====> Create Post <=====> //----------------//

    describe("Post Blog Post", () => {

        it("It Should Create New Post", (done) => {
            const blogPost = {
                postHtml: '</>',
                type: 'link',
                state: 'published',
                tags: 'tumblr'
            };

            chai.request(server)
                .post('/61968c974f161173940ea9cb/posts/create_post')
                .send(blogPost)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eq('Post Created Successfully (<:>)');
                    done();
                });
        });

    });

    describe("Don't Post Blog Post", () => {

        it("It Should Create New Post Because Blog Doesn't Exist", (done) => {
            const blogPost = {
                postHtml: '</>',
                type: 'video',
                state: 'published',
                tags: 'engineering'
            };

            chai.request(server)
                .post('/61968c974f161173940ea9ca/posts/create_post')  //no blog with this id
                .send(blogPost)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.eq('Blog Not Found (<:>)');
                    done();
                });
        });

        describe("Internal Server Error", () => {

            it("It Should Not Create New Post Due To Server Error", (done) => {
                const blogPost = {
                    postHtml: '</>',
                    type: 'video',
                    state: 'published',
                    tags: 'engineering'
                };
    
                chai.request(server)
                    .post('/1/posts/create_post')  //no blog with this id
                    .send(blogPost)
                    .end((err, res) => {
                        res.should.have.status(500);
                        res.body.should.be.eq('Error In Create Post Function (<:>)');
                        done();
                    });
            });
        });
    });

});
/* =========== /// <==> End <==> ===========*/