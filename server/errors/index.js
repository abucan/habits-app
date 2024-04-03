const BadRequestError = require("./bad-request");
const NotFoundError = require("./not-found");
const UnauthorizedError = require("./unauthorized");
const UnauthenticatedError = require("./unauthenticated");
const CustomAPIError = require("./custom-api");

module.exports = {
    CustomAPIError,
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    UnauthenticatedError
}