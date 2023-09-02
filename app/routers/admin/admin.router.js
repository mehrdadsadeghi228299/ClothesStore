const { validatorProducts } = require('../../validators/products.Validator');
const router=require('express').Router();


router.post('/add-products',validatorProducts,Admin);
module.exports={
        AdminRouter:router
}