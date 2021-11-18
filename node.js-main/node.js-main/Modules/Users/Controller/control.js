///////////////////////////////////////////////////////////
/// <==> /// This File Contains User Functions /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const users = require('../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User Functions <==> /// ====================== */

/* ----------- <---> Sign Up <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted
const signUp = async(request, response) => {
    try {
        let { email, password, blogName, age, city, country } = request.body;

        const oldUserEmail = await users.findOne({ email, isDeleted: false });
        const oldUserBlog = await users.findOne({ name: blogName, isDeleted: false });

        if (oldUserEmail) {
            response.status(StatusCodes.BAD_REQUEST).json({
                "meta": {
                    "status": 400,
                    "msg": "BAD_REQUEST"
                },

                "response": {
                    "error": 'Email is Already Exists (<:>)',
                    "data": ""
                }
            });
        }

        //--------------- Search On Blogs Name ----------------//
        else if (oldUserBlog) {
            response.status(StatusCodes.BAD_REQUEST).json({
                "meta": {
                    "status": 400,
                    "msg": "BAD_REQUEST"
                },

                "response": {
                    "error": 'Blog Name is Already Exists (<:>)',
                    "data": ""
                }
            });
        } else {
            const newUser = new users({ email, password, name: blogName, age, city, country });
            const data = await newUser.save();

            //--------------- Create Primary Blog ----------------//

            const token = jwt.sign({ email, role: 'user' }, process.env.KEY);

            response.status(StatusCodes.CREATED).json({
                "meta": {
                    "status": 201,
                    "msg": 'CREATED'
                },

                "response": {
                    "message": 'Sign Up Successfully (<:>)',
                    "data": token
                }
            });
        }

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            "meta": {
                "status": 500,
                "msg": 'INTERNAL_SERVER_ERROR'
            },

            "response": {
                "error": 'Error In Sign Up Function (<:>)',
                "data": ''
            }
        });
    };
};

/* ----------- <---> Sign In <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: Acount Must Be Not ( Deleted )
const login = async(request, response) => {
    try {
        let { email, password } = request.body;
        const oldUser = await users.findOne({ email, isDeleted: false });
        if (oldUser) {
            const match = await bcrypt.compare(password, oldUser.password);
            if (match) {
                const token = jwt.sign({ email: oldUser.email, role: oldUser.role }, process.env.KEY);
                response.status(StatusCodes.OK).json({
                    "meta": {
                        "status": 200,
                        "msg": 'OK'
                    },

                    "response": {
                        "message": 'LogIn Successfully (<:>)',
                        "data": token
                    }
                });
            } else
                response.status(StatusCodes.BAD_REQUEST).json({
                    "meta": {
                        "status": 400,
                        "msg": "BAD_REQUEST"
                    },

                    "response": {
                        "error": 'InCorrect Password (<:>)',
                        "data": ''
                    }
                });
        } else
            response.status(StatusCodes.BAD_REQUEST).json({
                "meta": {
                    "status": 400,
                    "msg": "BAD_REQUEST"
                },

                "response": {
                    "error": 'Email Is Not Found (<:>)',
                    "data": ''
                }
            });

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            "meta": {
                "status": 500,
                "msg": 'INTERNAL_SERVER_ERROR'
            },

            "response": {
                "error": 'Error In LogIn Function (<:>)',
                "data": ''
            }
        });
    };
};


/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export User Functions <==> /// ====================== */
module.exports = {
    signUp,
    login,
};
/* =========== /// <==> End <==> ===========*/