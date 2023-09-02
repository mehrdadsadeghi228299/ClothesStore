const { body } = require('express-validator');

const validatorMongoId=[
    body('id').notEmpty().isMongoId().withMessage("  mongo Id have problems "),
    body('ListProduct').notEmpty().isMongoId().withMessage("a mongo Id input for list product is not define ")
]
module.exports={
    validatorMongoId
    
}