//////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Advertising Functions /// <==> ///
//////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const advertising = require('../Model/model');
const users = require('../../Users/Model/model');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Advertising Functions <==> /// ====================== */

/* ----------- <---> Create Advertising <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: User Account Must Not Be ( Deleted Or Blocked )
const Create_Advertising = async(request, response) => {
    try {
        let { title, description } = request.body;
        const userId = request.decoded.id;

        const oldUser = await users.findOne({ _id: userId, isDeleted: false, isBlocked: false });
        if (oldUser) {
            const newAdvertising = new advertising({ title, description });
            const data = await newAdvertising.save();
            response.status(StatusCodes.OK).json('Advertising Created Successfully (<:>)')
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found (<:>)')
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Create Advertising Function (<:>)');
    }
};

/* ----------- <---> Get All Advertisings <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: Advertising Must Not Be ( Deleted Or Blocked )
//Assumption: User Account Must Not Be ( Deleted Or Blocked )

const Get_All_Advertisings = async(request, response) => {
    try {
        const userId = request.decoded.id;
        const oldUser = await users.findOne({ _id: userId, isDeleted: false, isBlocked: false });
        if (oldUser) {
            const data = await advertising.find({ isBlocked: false, isDeleted: false });
            if (data.length)
                response.status(StatusCodes.OK).json(data);
            else
                response.status(StatusCodes.BAD_REQUEST).json('Advertising Not Found (<:>)')

        } else
            response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found (<:>)')

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Get All Advertisings Function (<:>)');
    }
};

/* ----------- <---> Update Advertising <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: Advertising Must Not Be ( Deleted Or Blocked )
//Assumption: User Account Must Not Be ( Deleted Or Blocked )
const Update_Advertising = async(request, response) => {
    try {
        let { id, title, description } = request.body;
        const userId = request.decoded.id;
        const oldUser = await users.findOne({ _id: userId, isDeleted: false, isBlocked: false });
        if (oldUser) {
            const data = await advertising.updateOne({ _id: id, isDeleted: false, isBlocked: false }, { title, description });
            if (data.modifiedCount)
                response.status(StatusCodes.OK).json('Advertising Updated Successfully (<:>)');
            else
                response.status(StatusCodes.BAD_REQUEST).json('Advertising Not Found (<:>)')

        } else
            response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found (<:>)')

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Update Advertising Function (<:>)');
    }
};

/* ----------- <---> Delete Advertising <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: User Account Must Not Be ( Deleted Or Blocked )
const Delete_Advertising = async(request, response) => {
    try {
        let { id } = request.body;
        const userId = request.decoded.id;
        const oldUser = await users.findOne({ _id: userId, isDeleted: false, isBlocked: false });
        if (oldUser) {
            const data = await advertising.updateOne({ _id: id, isDeleted: false }, { isDeleted: true });
            if (data.modifiedCount)
                response.status(StatusCodes.OK).json('Advertising Updated Successfully (<:>)');
            else
                response.status(StatusCodes.BAD_REQUEST).json('Advertising Not Found (<:>)')

        } else
            response.status(StatusCodes.BAD_REQUEST).json('Your Account Not Found (<:>)')

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Update Advertising Function (<:>)');
    }
};

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Advertising Functions <==> /// ====================== */
module.exports = {
    Create_Advertising,
    Get_All_Advertisings,
    Update_Advertising,
    Delete_Advertising
};
/* =========== /// <==> End <==> ===========*/