const { body } = require('express-validator');

const validatorBrands=[
    body('title').notEmpty().trim().isString().withMessage("title value have problems "),
    body('ListProduct').isArray().withMessage("a value input for list product is not define ")
]
module.exports={
    validatorBrands
    
}