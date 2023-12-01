const Joi = require('joi');

const notesSchema = Joi.object({
    Subject: Joi.string().required(),
    content: Joi.string(),
    date: Joi.date()
});

const validateContact = (data) => {
    return notesSchema.validate(data);
};

module.exports = validateContact;

