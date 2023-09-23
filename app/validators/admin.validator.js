const { body } = require('express-validator');
const { AdminManager } = require('../controllers/manage/manager.controller');
const { AdminModel } = require('../models/admin.model');

const validatorAdmin=[
    body('userName').notEmpty().trim().isString().toLowerCase().withMessage(" UserName is not valid").custom(async value=>{
        const userName=await AdminModel.find({userName:value});
        if (userName) {
            throw new Error('userName already in use');
          }
    }),
    body('email').isEmail().normalizeEmail().notEmpty().withMessage(" email is not valid").custom(async value=>{
        const userEmail=await AdminModel.find({email:value});
        if (userEmail) {
            throw new Error('Email already in use');
          }
    }),
    body('password').notEmpty().isString().isLength({min:6 ,max:15}).trim().withMessage(" password is not valid"),

    body('mobile').notEmpty().isNumeric().isMobilePhone('ir-IR').withMessage(" mobile is not valid").custom(async value=>{
        const userMobile=await AdminModel.find({mobile:value});
        if (userMobile) {
            throw new Error('Mobile already in use');
          }
    }),

]
module.exports={
    validatorAdmin
}