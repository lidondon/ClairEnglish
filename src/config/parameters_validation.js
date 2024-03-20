import Joi from "joi";

const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

const sendEmail = Joi.object().keys({
    id: Joi.number().required(),
    email: Joi.string().email().required()
});

export default {
    sendEmail
};
