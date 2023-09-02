const { body } = require('express-validator');

const validatorBrands=[
    body('Name').notEmpty().trim().isString().withMessage("name value have problems "),
    body('date').notEmpty().isDate().withMessage("Date  format have problems "),
    body('Author').notEmpty().isObject().withMessage("Author value have problems "),
    body('ListProduct').isArray().withMessage("a value input for list product is not define ")
]
module.exports={
    validatorBrands
}