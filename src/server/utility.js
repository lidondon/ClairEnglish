import httpStatus from "http-status";
import config from "../config/config";
import stringZh from "../config/string_en";

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

const isEmailFormat = s => {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(s);
}

const common = {
    isEmailFormat
};

export default {
    http,
    common
};
