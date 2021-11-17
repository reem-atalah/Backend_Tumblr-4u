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
describe('User APIs', () => {

    //----------------// <=====> Sign Up <=====> //----------------//

    describe("Get /", () => {
        it("It Should Hello", (done) => {

            chai.request(server)
                .get("/")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.eq('Hello, World! (<:>)');
                    done();
                });
        });
    });

    describe("Post /SignUp", () => {

        it("It Should Create New User", (done) => {
            const user = {
                username: "Ahmed",
                email: "Ahmed.0@gmail.com",
                password: "123",
                cpassword: "123",
                phone: "0123456789",
                location: "giza"
            };

            chai.request(server)
                .post("/SignUp")
                .send(user)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.eq('Sign Up Successfully (<:>)');
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