const { StatusCodes } = require('http-status-codes');
const crypto = require('crypto');
const CustomError = require('../errors');
const User = require('../models/User');
const sendVerificationEmail = require('../utils/sendVerificationEmail');
const createTokenUser = require('../utils/createTokenUser');
const Token = require('../models/Token');
const { attachCookiesToResponse } = require('../utils/jwt');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new CustomError.BadRequestError(
      'Please provide email and password!',
    );

  const userExists = await User.findOne({ email });
  if (!userExists)
    throw new CustomError.UnauthorizedError('Invalid credentials!');

  const isPasswordCorrect = await userExists.matchPasswords(password);
  if (!isPasswordCorrect)
    throw new CustomError.UnauthorizedError('Invalid credentials!');

  if (!userExists.isVerified)
    throw new CustomError.UnauthorizedError(
      'Please verify your email to login!',
    );

  const userToken = createTokenUser(userExists);
  let refreshToken = '';

  const existingToken = await Token.findOne({ user: userExists._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid)
      throw new CustomError.UnauthenticatedError(
        'Please login again!',
      );
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: userToken, refreshToken });
    res.status(StatusCodes.OK).json({ user: userToken });
    return;
  }

  refreshToken = crypto.randomBytes(40).toString('hex');
  const userAgent = req.get('user-agent');
  const ip = req.ip;

  await Token.create({
    refreshToken,
    userAgent,
    ip,
    user: userExists._id,
  });
  attachCookiesToResponse({ res, user: userToken, refreshToken });
  res.status(StatusCodes.OK).json({ user: userToken });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists)
    throw new CustomError.BadRequestError(
      'Please try with another email address!',
    );

  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const verificationToken = crypto.randomBytes(40).toString('hex');
  const user = await User.create({
    name,
    email,
    password,
    verificationToken,
    role,
  });

  sendVerificationEmail({
    name: user.name,
    email: { name: user.name, email: user.email },
    verificationToken: user.verificationToken,
  });
  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Please check your email to verify your account.' });
};

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    throw new CustomError.UnauthenticatedError(
      'Verification failed!',
    );

  if (user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError(
      'Verification failed!',
    );
  }

  user.isVerified = true;
  user.verificationToken = '';
  user.verified = Date.now();
  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Email verified!' });
};

const logout = async (req, res) => {
  await Token.findOneAndDelete({user: req.user.user_id})
  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie('refreshToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'User logged out!' });
}

module.exports = {
  login,
  register,
  verifyEmail,
  logout
};
