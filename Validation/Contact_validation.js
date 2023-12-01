const Joi = require('joi');

//Joi schema for validation
const contactSchema = Joi.object({
    Name: Joi.string().required(),
    Email: Joi.string().email().required(),
    Message: Joi.string().required(),
    FindUs: Joi.string().required(),
});

// Validate function
const validateContact = (data) => {
    return contactSchema.validate(data);
};

module.exports = validateContact;
