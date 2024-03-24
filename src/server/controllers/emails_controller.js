import emailsModule from "../modules/emails_module";
import stringEn from "../../config/string_en";
import utility from "../utility";

const post = (request, response) => {
    try {
        const input = request.body;

        console.log(input);
        try {
            emailsModule.sendEmail(input.to, input.subject, input.body);
            response.send(utility.http.successResponse(stringEn.emailSentSuccessfully));
        } catch (ex) {
            response.status(500).send(error);
        }
    } catch (ex) {
        response.status(500).send(`${stringEn.getUsStatesFailed}: ${ex}`);
    }
};

export default {
    post
};

