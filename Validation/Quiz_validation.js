const Joi = require('joi');

const quizeSchema = Joi.object({
    Total_question: Joi.number().required(),
    Correct: Joi.number().required().default(0),
    Highscore: Joi.number(),
    date: Joi.date(),
});
// Validate function
const validateContact = (data) => {
    return quizeSchema.validate(data);
};

module.exports = validateContact;
