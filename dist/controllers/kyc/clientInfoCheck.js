"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientInfoCheck = void 0;
const moment = require("moment");
const clientInfoValidation_1 = require("../../utility/validations/clientInfoValidation");
exports.clientInfoCheck = (req, res) => {
    const dateOfBirth = req.body.dateOfBirth;
    const expiryDate = req.body.expiryDate;
    const isDOBFormatValid = moment(dateOfBirth, "YYYY-MM-DD", true).isValid();
    const isExpiryFormatValid = moment(expiryDate, "YYYY-MM-DD", true).isValid();
    if (isDOBFormatValid && isExpiryFormatValid) {
        const errorDetails = clientInfoValidation_1.validateClientInfo(req.body).error;
        console.log(errorDetails);
        res.send(req.body);
    }
    else {
        res.json({ error: "Invalid Date Formats - Should be YYYY-MM-DD" });
    }
};
//# sourceMappingURL=clientInfoCheck.js.map