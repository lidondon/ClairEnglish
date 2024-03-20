import statesModule from "../modules/states_module";
import stringEn from "../../config/string_en";
import utility from "../utility";

const get = (request, response) => {
    try {
        const states = statesModule.getUsStates();
        response.send(utility.http.successResponse(states));
    } catch (ex) {
        response.status(500).send(`${stringEn.getUsStatesFailed}: ${ex}`);
    }
};

export default {
    get
};

