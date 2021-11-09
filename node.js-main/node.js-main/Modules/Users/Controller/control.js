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
const SignUp = async(request, response) => {
    try {
        let { username, email, password, cpassword, phone, location } = request.body;
        let role = 'user';

        const oldUser = await users.findOne({ email });
        if (oldUser) {
            response.status(StatusCodes.BAD_REQUEST).json('Email is Already Exists (<:>)');

        } else if (password != cpassword) {
            response.status(StatusCodes.BAD_REQUEST).json('Password Not Equal Cpassword (<:>)');

        } else {
            phone = jwt.sign({ phone: phone }, process.env.KEY);
            const newUser = new users({ username, email, password, cpassword, phone, location, role });
            const data = await newUser.save();
            response.status(StatusCodes.OK).json('Sign Up Successfully (<:>)');
        }

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Sign Up Function (<:>)');
    }
};

/* ----------- <---> Sign In <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: Acount Must Be Not ( Blocked Or Deleted )
const SignIn = async(request, response) => {
    try {
        let { email, password } = request.body;
        const oldUser = await users.findOne({ email, isBlocked: false, isDeleted: false });
        if (oldUser) {
            const match = await bcrypt.compare(password, oldUser.password);
            if (match) {
                const token = jwt.sign({ id: oldUser.id, role: oldUser.role }, process.env.KEY);
                let phoneNumber = jwt.verify(oldUser.phone, process.env.KEY);
                phoneNumber = phoneNumber.phone;
                response.status(StatusCodes.OK).json({
                    username: oldUser.username,
                    email: oldUser.email,
                    phone: phoneNumber,
                    location: oldUser.location,
                    role: oldUser.role,
                    token
                });
            } else
                response.status(StatusCodes.BAD_REQUEST).json('InCorrect Password (<:>)');

        } else
            response.status(StatusCodes.BAD_REQUEST).json('Email Is Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Sign In Function (<:>)');
    }
};

/* ----------- <---> Update Profile <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Update Profile Function Just Updates ( Username , Phone , Location )
// Assumption: Account Must Be Not ( Blocked Or Deleted Or Deactivated )
const Update_Profile = async(request, response) => {
    try {
        let { username, phone, location } = request.body;
        phone = jwt.sign({ phone: phone }, process.env.KEY);

        const oldUser = await users.findOne({ _id: request.decoded.id, isBlocked: false, isDeleted: false, isActivated: true });
        if (oldUser) {
            const data = await users.updateOne({ _id: request.decoded.id }, {
                username,
                location,
                phone,
            });
            response.status(StatusCodes.OK).json('Profile Updated Successfully (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Account Not Found (<:>)');


    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Update Profile Function (<:>)');
    }
};

/* ----------- <---> Update Password <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not ( Blocked Or Deleted Or Deactivated )
const Update_Password = async(request, response) => {
    try {
        let { oldPassword, newPassword, cNewPassword } = request.body;
        let userId = request.decoded.id;

        const oldUser = await users.findOne({ _id: userId, isBlocked: false, isDeleted: false, isActivated: true });
        if (oldUser) {
            const match = await bcrypt.compare(oldPassword, oldUser.password);

            if (match) {
                if (newPassword != cNewPassword)
                    response.status(StatusCodes.BAD_REQUEST).json('Password Not Equal Cpassword (<:>)');
                else {
                    newPassword = await bcrypt.hash(newPassword, 8);
                    cNewPassword = await bcrypt.hash(cNewPassword, 8);
                    const data = await users.updateOne({ _id: userId }, {
                        password: newPassword,
                        cpassword: cNewPassword
                    });
                    response.status(StatusCodes.OK).json('Password Updated Successfully (<:>)');
                };

            } else
                response.status(StatusCodes.BAD_REQUEST).json('InCorrect Password (<:>)');
        } else {
            response.status(StatusCodes.BAD_REQUEST).json('Account Is Not Found (<:>)');
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Update Password Function (<:>)');
    };
};

/* ----------- <---> Deactivate <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not ( Blocked Or Deleted ) & Activated
const Deactivate = async(request, response) => {
    try {
        const userId = request.decoded.id;
        const oldUser = await users.updateOne({ _id: userId, isBlocked: false, isDeleted: false, isActivated: true }, { isActivated: false });
        if (oldUser.modifiedCount) {
            response.status(StatusCodes.OK).json('Account Deactivate Successfully (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Account Is Not Found Or Deactivated Already (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Deactivate Function (<:>)');
    }
};

/* ----------- <---> Activate <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not ( Blocked Or Deleted ) & Deactivated
const Activate = async(request, response) => {
    try {
        const userId = request.decoded.id;
        const oldUser = await users.updateOne({ _id: userId, isBlocked: false, isDeleted: false, isActivated: false }, { isActivated: true });
        if (oldUser.modifiedCount) {
            response.status(StatusCodes.OK).json('Account Activate Successfully (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Account Is Not Found Or Activated Already (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Activate Function (<:>)');
    }
};

/* ----------- <---> Get All Users <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Get Accounts May Be ( Blocked Or Deleted ) & Deactivated
// Assumption: Request Account Must Not Be ( Blocked Or Deleted )
const Get_All_Users = async(request, response) => {
    try {
        const userId = request.decoded.id;
        const oldUser = await users.findOne({ _id: userId, isDeleted: false, isBlocked: false });
        if (oldUser) {
            const data = await users.find({ role: 'user' });
            response.status(StatusCodes.OK).json(data);
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found (<:>)');
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Get All Users Function (<:>)');
    }
};

/* ----------- <---> Add Admin <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Not Be ( Blocked Or Deleted )
// Assumption: Request Account Must Not Be ( Blocked Or Deleted )

const Add_Admin = async(request, response) => {
    try {
        let userId = request.body.id;
        let id = request.decoded.id;
        const oldUser = await users.findOne({ _id: id, isDeleted: false, isBlocked: false });
        if (oldUser) {
            const data = await users.updateOne({ _id: userId, isBlocked: false, isDeleted: false }, { role: 'admin' });
            if (data.modifiedCount)
                response.status(StatusCodes.OK).json('This Account Be An Admin (<:>)');
            else
                response.status(StatusCodes.BAD_REQUEST).json('Account Is Not Found Or Blocked Or Alread Admin (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Get All Users Function (<:>)');
    }
};

/* ----------- <---> Get All Admins <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account May Be ( Blocked Or Deleted ) & Deactivated
// Assumption: Request Account Must Not Be ( Blocked Or Deleted )

const Get_All_Admins = async(request, response) => {
    try {
        let id = request.decoded.id;
        const oldUser = await users.findOne({ _id: id, isDeleted: false, isBlocked: false });
        if (oldUser) {
            const data = await users.find({ role: 'admin' });
            response.status(StatusCodes.OK).json(data);
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Get All Admins Function (<:>)');
    }
};

/* ----------- <---> Delete Admin <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account May Be ( Blocked Or Deleted ) & Deactivated
// Assumption: Request Account Must Not Be ( Blocked Or Deleted )
const Delete_Admin = async(request, response) => {
    try {

        let id = request.decoded.id;
        let userId = request.body.id;
        const oldUser = await users.findOne({ _id: id, isDeleted: false, isBlocked: false });
        if (oldUser) {
            const data = await users.updateOne({ _id: userId, role: 'admin' }, { role: 'user' });
            if (data.modifiedCount)
                response.status(StatusCodes.OK).json('Admin Deleted Successfully (<:>)');
            else
                response.status(StatusCodes.BAD_REQUEST).json('Account Is Not Admin (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Get All Admins Function (<:>)');
    }
};
/* ----------- <---> Block Account <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Request Account Must Not Be ( Blocked Or Deleted )
const Block_User = async(request, response) => {
    try {
        let { id } = request.body;
        const userId = request.decoded.id;
        const oldUser = await users.findOne({ _id: userId, isDeleted: false, isBlocked: false });
        if (oldUser) {
            const data = await users.updateOne({ _id: id, isDeleted: false, isBlocked: false }, { isBlocked: true });
            if (data.modifiedCount)
                response.status(StatusCodes.OK).json('Account Blocked Successfully (<:>)');
            else
                response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found Or Already Blocked (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Block User Function (<:>)');
    }
};

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export User Functions <==> /// ====================== */
module.exports = {
    SignUp,
    SignIn,
    Update_Profile,
    Update_Password,
    Deactivate,
    Activate,
    Get_All_Users,
    Add_Admin,
    Get_All_Admins,
    Delete_Admin,
    Block_User
};
/* =========== /// <==> End <==> ===========*/