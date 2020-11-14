import * as Joi from "joi";

export const validateClientInfo = (clientInfo: {}) => {
   const clientInfoSchema = Joi.object({ 
       dateOfBirth: Joi.date().required(),
       firstName: Joi.string().max(100).required(),
       middleName: Joi.string().max(100).required(),
       lastName: Joi.string().max(100).required(),
       licenceNumber: Joi.string().required(),
       state: Joi.string().max(3).regex(new RegExp('^((NSW)|(QLD)|(SA)|(TAS)|(VIC)|(WA)|(ACT),(NT))$')).required(),
       expiryDate: Joi.date().required(),
   })

   return clientInfoSchema.validate(clientInfo);
}

