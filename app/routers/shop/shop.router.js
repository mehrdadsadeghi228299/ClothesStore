const { ProductController } = require('../../controllers/user/product.Controller');
const router=require('express').Router();

/* ***********************************               products Area                           **************************** */

router.get('/getListProduct',ProductController.getListProduct);
router.post('/findProductById/:id',ProductController.findProductById);
router.post('/findProductByProductCode/:code',ProductController.findProductByProductCode);


/* ***********************************               Brands Area                           **************************** */

router.get('/getListCategory',ProductController.getListCategory);
router.post('/getListCategoryWithProduct',ProductController.getListCategoryWithProduct);
router.post('/getListCategoryWithSpecialChildren/:titleCategory',ProductController.getListCategoryWithSpecialChildren);

/* ***********************************               Category Area                           **************************** */
     

router.get('/getListBrands',ProductController.getListBrands);
router.post('/getListBrandsWithProduct',ProductController.getListBrandsWithProduct);
router.post('/getListBrandsWithSpecialChildren/:nameBrands',ProductController.getListBrandsWithSpecialChildren);
module.exports={
        shopRouter:router
}