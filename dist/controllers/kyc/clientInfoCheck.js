"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientInfoCheck = void 0;
const moment = require("moment");
const clientInfoValidation_1 = require("../../utility/validations/clientInfoValidation");
const axios = require("axios");
exports.clientInfoCheck = (req, res) => {
    try {
        const dateOfBirth = req.body.dateOfBirth;
        const expiryDate = req.body.expiryDate;
        const isDOBFormatValid = moment(dateOfBirth, "YYYY-MM-DD", true).isValid();
        const isExpiryFormatValid = typeof expiryDate === "undefined" ? true : moment(expiryDate, "YYYY-MM-DD", true).isValid();
        if (isDOBFormatValid && isExpiryFormatValid) {
            const errorDetails = clientInfoValidation_1.validateClientInfo(req.body).error;
            if (errorDetails) {
                res.json({ error: errorDetails.details[0].message });
            }
            else {
                const options = {
                    headers: {
                        "Authorization": `Bearer ${process.env.API_KEY}`,
                        "Content-Type": "application/json"
                    }
                };
                axios.post(`${process.env.API_ENDPOINT}`, {
                    birthDate: req.body.dateOfBirth,
                    givenName: req.body.firstName,
                    middleName: req.body.middleName,
                    familyName: req.body.lastName,
                    licenceNumber: req.body.licenceNumber,
                    stateOfIssue: req.body.stateOfIssue,
                    expiryDate: req.body.expiryDate
                }, options).then((response) => {
                    const returnCode = response.data.verificationResultCode;
                    switch (returnCode) {
                        case "Y":
                            res.json({ kycResult: true });
                            break;
                        case "N":
                            res.json({ kycResult: false });
                            break;
                        case "D":
                            res.json({ message: "Document Error" });
                            break;
                        case "S":
                            res.json({ message: "Server Error" });
                            break;
                    }
                }).catch((err) => {
                    res.json({
                        error: err
                    });
                });
            }
        }
        else {
            res.json({ error: "Invalid Date Formats - Should be YYYY-MM-DD" });
        }
    }
    catch (error) {
        res.json({ error });
    }
};
//# sourceMappingURL=clientInfoCheck.js.map