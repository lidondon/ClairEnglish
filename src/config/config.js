import Joi from "joi";
require("dotenv").config();

// 建立每個變數 joi 驗證規則
const envVarSchema = Joi.object().keys({
    VERSION: Joi.string(),
    NODE_ENV: Joi.string().default("development").allow(["development", "production"]),
    PORT: Joi.number().default(3000),
    SENDGRID_API_KEY: Joi.string(),
    EMAIL_FROM: Joi.string().email(),
}).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarSchema);

if (error) throw new Error(`Config validation error: ${error.message}`);

const config = {
    version: envVars.VERSION,
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    sendgridApiKey: envVars.SENDGRID_API_KEY,
    emailFrom: envVars.EMAIL_FROM,
};

export default config;
