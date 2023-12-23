const Joi = require('joi');

//Joi schema for validation
const SignUpSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
});

// Validate function
const validateSign = (data) => {
    return SignUpSchema.validate(data);
};

module.exports = validateSign;
