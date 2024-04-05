const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const CustomError = require("../errors");
const createTokenUser = require("../utils/createTokenUser");
const checkPermissions = require("../utils/checkPermissions");
const { attachCookiesToResponse } = require("../utils/jwt");

const getAllUsers = async (req, res) => {
    const users = await User.find({role: 'user'}).select('-password');
    res.status(StatusCodes.OK).json({ users });
}

const getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).select('-password');
    if (!user) {
        throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`);
    }
    checkPermissions(req.user, req.params.id);
    res.status(StatusCodes.OK).json({ user });
}

const showLoggedInUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ user: req.user });
}

// later update user
// later change password

module.exports = {
    getAllUsers,
    getSingleUser,
    showLoggedInUser,
}
