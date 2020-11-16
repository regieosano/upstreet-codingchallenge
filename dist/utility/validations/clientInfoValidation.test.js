"use strict";
const validateClientInfo = require("./clientInfoValidation");
test("returns an 'undefined' value if valid", () => {
    const testData = {
        "dateOfBirth": "1982-09-12",
        "firstName": "Jaq",
        "lastName": "Zablan",
        "licenceNumber": "DFGG456677",
        "stateOfIssue": "NT",
        "expiryDate": "2020-03-10"
    };
    expect(validateClientInfo(testData)).toBe(undefined);
});
//# sourceMappingURL=clientInfoValidation.test.js.map