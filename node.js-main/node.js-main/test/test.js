/////////////////////////////////////////////////////////////////////
/// <==> /// This File Is The Unit Testing OF APIs  /// <==> ///
/////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../script");

const connect = require('../Configurations/configuration');

chai.should();
chai.use(chaiHttp);
/* =========== /// <==> End <==> ===========*/


/*=======================================*/
/*==============================================================================*/
/* ====================== /// <==> Unit Testing <==> /// ====================== */
/*==============================================================================*/
/*=======================================*/

describe('User APIs', () => {

    //----------------// <=====> Sign Up <=====> //----------------//

    describe("User /signup", () => {

        it("It Should Create New User", (done) => {
            const user = {
                email: "Ayman0@gmail.com",
                password: "123",
                blogName: "CMP-202",
                age: "21",
                city: "Giza",
                country: "Egypt"
            };

            chai.request(server)
                .post("/signup")
                .send(user)
                .end((err, response) => {
                    response.should.have.status(201);
                    done();
                });
        });
        // it("It Should Invalid Password", (done) => {
        //     const user = {
        //         username: "Ahmed",
        //         email: "Ahmed0000000000000gmail.com",
        //         password: "123",
        //         cpassword: "123",
        //         phone: "0123456789",
        //         location: "giza"
        //     };

        //     chai.request(server)
        //         .post("/SignUp")
        //         .send(user)
        //         .end((err, response) => {
        //             response.should.have.status(400);
        //             response.body.should.be.eq('Password Not Equal Cpassword (<:>)');
        //             done();
        //         });
        // });
    });
});
/* =========== /// <==> End <==> ===========*/