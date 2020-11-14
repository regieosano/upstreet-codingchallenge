import * as express from "express";
import * as moment from "moment";

import { validateClientInfo } from "../../utility/validations/clientInfoValidation";

// const VALID_DATE_FORMAT =  new RegExp('/^[\d]{4}-[\d]{2}-[\d]{2}$/')

// Initialize axios for http calls
// const axios = require("axios");

export const clientInfoCheck = (req: express.Request,
                                res: express.Response) => {

    const dateOfBirth = req.body.dateOfBirth;
    const expiryDate = req.body.expiryDate;

    const isDOBFormatValid = moment(dateOfBirth, "YYYY-MM-DD", true).isValid();
    const isExpiryFormatValid = moment(expiryDate, "YYYY-MM-DD", true).isValid();

    if (isDOBFormatValid && isExpiryFormatValid) {
        const errorDetails = validateClientInfo(req.body).error                              

        if (errorDetails) {
            res.json({error: errorDetails.details}) 
        } else {
            res.send(req.body)
        }                                  
       
    } else {
        res.json({error: "Invalid Date Formats - Should be YYYY-MM-DD"})
    }

   
    
    
    //  store key into process environment variables  
    //  const reqParams = req.query.UID;

    //    axios.get(`https://ottdevapi.azure-api.net/sso/api/sso.accountInfo?UID=${reqParams}`,    
    //    {headers : { "Ocp-Apim-Subscription-Key": "cc238828849d4089b92686d4b25bd990" } }
                        
    //    ).then((response: any) => {
    //        res.json({
    //            data: response.data
    //        });
    //    }).catch((err: Error) => {
    //        res.json({
    //            error: err
    //        })
    //    })

    
}