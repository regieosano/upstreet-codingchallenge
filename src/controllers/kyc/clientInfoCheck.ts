import * as express from "express";
import * as moment from "moment";

import { validateClientInfo } from "../../utility/validations/clientInfoValidation";

// Initialize axios for http calls
const axios = require("axios");

export const clientInfoCheck = (req: express.Request,
                                res: express.Response) => {

    // Extract dates for validation                                   
    const dateOfBirth = req.body.dateOfBirth;
    const expiryDate = req.body.expiryDate;

    const isDOBFormatValid = moment(dateOfBirth, "YYYY-MM-DD", true).isValid();
    const isExpiryFormatValid = moment(expiryDate, "YYYY-MM-DD", true).isValid();

    if (isDOBFormatValid && isExpiryFormatValid) {
        const errorDetails = validateClientInfo(req.body).error                              

        if (errorDetails) {
            res.json({error: errorDetails.details[0].message}) 
        } else {
            // Headers declaration
            const options = {
              headers: {
               "Authorization": "Bearer 03aa7ba718da920e0ea362c876505c6df32197940669c5b150711b03650a78cf",
               "Content-Type": "application/json"
           }}

            //  * Store key into process environment variables  
            axios.post(`https://australia-southeast1-reporting-290bc.cloudfunctions.net/driverlicence
            `,    
           { 
              birthDate: req.body.dateOfBirth,
              givenName: req.body.firstName,
              middleName: req.body.middleName,
              familyName: req.body.lastName,
              licenceNumber: req.body.licenceNumber,
              stateOfIssue: req.body.stateOfIssue,
              expiryDate: req.body.expiryDate 
           }, 
           options
                        
           ).then((response: any) => {
              // Extract verification code   
              const returnCode = response.data.verificationResultCode;
              switch (returnCode) {
                 case "Y": res.json({ kycResult: true });  break;
                 case "N": res.json({ kycResult: false }); break;
                 case "D": res.json({ message: "Document Error" }); break;
                 case "S": res.json({ message: "Server Error" }); break;   
              }     
          }).catch((err: Error) => {
              res.json({
                 error: err
              })
          })
       }                                  
       
    } else {
        res.json({error: "Invalid Date Formats - Should be YYYY-MM-DD"})
    } 
    
}