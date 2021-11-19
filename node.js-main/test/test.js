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

    //----------------// <=====> Sign Up <=====> //----------------//

    // describe("Get /", () => {
    //     it("It Should Hello", (done) => {

    //         chai.request(server)
    //             .get("/")
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.be.eq('Hello, World! (<:>)');
    //                 done();
    //             });
    //     });
    // });

    describe("Post Blog Post", () => {

        it("It Should Create New Post", (done) => {
            const blogPost = {
                postHtml: "</>",
                type: "link",
                state: "published",
                tags: "#tumblr"
            };

            chai.request(server)
                .post("/61968c974f161173940ea9cb/posts/create_post")
                .send(blogPost)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eq('Post Created Successfully (<:>)');
                    done();
                });
        });

        // it("It should NOT GET all the tasks", (done) => {
        //     chai.request(server)
        //         .get("/api/task")
        //         .end((err, response) => {
        //             response.should.have.status(404);
        //             done();
        //         });
        // });

    });
});
/* =========== /// <==> End <==> ===========*/