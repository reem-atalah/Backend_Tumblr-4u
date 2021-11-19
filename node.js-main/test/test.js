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
                postHtml: "</>",
                type: "link",
                state: "published",
                tags: "tumblr"
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

    });
});
/* =========== /// <==> End <==> ===========*/