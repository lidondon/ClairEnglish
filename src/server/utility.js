import httpStatus from "http-status";

const successResponse = (data) => {
    return {
        statusCode: httpStatus[200],
        data
    };
};

const getValidationMiddleware = (schema, message) => {
    return (request, response, next) => {
        if (schema.validate(request.body).error) {
            response.status(400).send(message);
        } else {
            next();
        }
    };
};

const http = {
    successResponse,
    getValidationMiddleware
};

export default {
    http
};
