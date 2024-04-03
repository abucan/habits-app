const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const User = require("../models/User");

const login = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) throw new CustomError.BadRequestError('Please provide email and password!');

    const userExists = await User.findOne({email});
    if (!userExists) throw new CustomError.UnauthorizedError('Invalid credentials!');

    const isPasswordCorrect = await userExists.matchPasswords(password);
    if (!isPasswordCorrect) throw new CustomError.UnauthorizedError('Invalid credentials!');

    if(!userExists.isVerified) throw new CustomError.UnauthorizedError('Please verify your email to login!');

    // create access and refresh token
    res.status(StatusCodes.OK).json({user: userExists});
}

const register = async (req, res) => {
    const {name, email, password} = req.body;

    const emailAlreadyExists = await User.findOne({email});
    if (emailAlreadyExists) throw new CustomError.BadRequestError('Please try with another email address!');

    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? 'admin' : 'user';

    const verificationToken = crypto.randomBytes(40).toString('hex');
    const user = await User.create({name, email, password, verificationToken, role});

    // send email here
    res.status(StatusCodes.CREATED).json({msg: "Please check your email to verify your account."})
}

module.exports = {
    login,
    register
}