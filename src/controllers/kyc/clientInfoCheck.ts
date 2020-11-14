import * as express from "express";

// Initialize axios for http calls
// const axios = require("axios");

export const clientInfoCheck = (req: express.Request,
                                res: express.Response) => {

    console.log("Hello")                                
       
    //    const reqParams = req.query.UID;

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