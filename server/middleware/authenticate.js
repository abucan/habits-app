const {
  isTokenValid,
  attachCookiesToResponse,
} = require('../utils/jwt');
const Token = require('../models/Token');
const CustomError = require('../errors');

const authenticateUser = async (req, res, next) => {
  console.log('signed cookies', req.signedCookies);
  const { refreshToken, accessToken } = req.signedCookies;

  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
      return next();
    }

    const payload = isTokenValid(refreshToken);
    console.log(payload);
    const existingToken = await Token.findOne({
      user: payload.user.user_id,
      refreshToken: payload.refreshToken,
    });

    if (!existingToken || !existingToken?.isValid)
      throw new CustomError.UnauthenticatedError(
        'Invalid refresh token.',
      );

    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken,
    });
    req.user = payload.user;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError(
      'Authentication Invalid.',
    );
  }
};

module.exports = authenticateUser;
