const {StatusCodes} = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
    let apiError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Internal Server Error',
    }

    return res.status(apiError.statusCode).json({msg: apiError.msg});
}

module.exports = errorHandlerMiddleware;