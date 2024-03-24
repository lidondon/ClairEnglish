import sgMail from '@sendgrid/mail';
import config from '../../config/config';

const sendEmail = (to, subject, body) => {
    return new Promise((resolve, reject) => {
        const message = {
            to,
            from: config.emailFrom,
            subject: subject,
            html: `<b>${body}</b>`
        };

        sgMail.setApiKey(config.sendgridApiKey);
        sgMail.send(message, (error, json) => {
            if (error) {
                reject(error);
            } else {
                console.log("sent email", json);
                resolve(json);
            }
        });
    });
};

export default {
    sendEmail
};
