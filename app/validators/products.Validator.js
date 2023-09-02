const { body } = require('express-validator');

const validatorProducts=[
    
    body('Name').notEmpty().trim().isString().withMessage(" title is not valid"),
    body('title').notEmpty().isString().withMessage(" title is not valid"),
    body('shortDescription').isString().isLength({min:3,max:100}).withMessage(" shortDescription is not valid"),
    body('Description').notEmpty().isString().isLength({min:50}).withMessage(" tDescription is not valid"),
   
    body('brand_id').notEmpty().isMongoId().withMessage(" brand_id id is not valid"),
    body('categoryFatherId').notEmpty().isMongoId().withMessage(" categoryFatherId id is not valid"),

    body('tags').isArray().withMessage(" tags is not valid"),
    body('size').notEmpty().isArray().withMessage(" Size is not valid"),
    body('color').notEmpty().isArray().withMessage(" lastName is not valid"),
    body('images').notEmpty().isArray().withMessage(" images is not valid"),

    body('price').notEmpty().isNumeric().withMessage(" price is not valid"),
    body('count').notEmpty().isNumeric().withMessage(" lastName is not valid"),
    body('numberOfSail').notEmpty().isNumeric().withMessage(" lastName is not valid"), 
    body('productCode').notEmpty().isNumeric().toLowerCase().isLength({min:3,max:15}).withMessage(" product code is not valid"),
   
    body('isModify').isBoolean().withMessage(" isModify is not valid"),
    body('isAvailable').isBoolean().withMessage(" isAvailable is not valid"),
    body('showing').isBoolean().withMessage(" showing is not valid"),

    body('features').isObject().withMessage(" features is not valid"),
    body('pageView').isObject().withMessage(" features is not valid")

]
module.exports={
    validatorProducts
}