const { ProductController } = require('../../controllers/user/product.Controller');
const router=require('express').Router();

/* ***********************************               products Area                           **************************** */

router.get('/getListProduct',ProductController.getListProduct);
router.post('/findProductById/:id',ProductController.findProductById);
router.post('/findProductByProductCode',ProductController.findProductByProductCode);


/* ***********************************               Brands Area                           **************************** */

router.get('/getListCategory',ProductController.getListCategory);
router.get('/getListCategoryWithProduct',ProductController.getListCategoryWithProduct);
router.post('/getListCategoryWithSpecialChildren',ProductController.getListCategoryWithSpecialChildren);

/* ***********************************               Category Area                           **************************** */
     

router.get('/getListBrands',ProductController.getListBrands);
router.get('/getListBrandsWithProduct',ProductController.getListBrandsWithProduct);
router.post('/getListBrandsWithSpecialChildren',ProductController.getListBrandsWithSpecialChildren);


/* ***********************************               Category Area                           **************************** */
     

router.get('/getListTags',ProductController.getListTags);
router.get('/getListTagsWithChild',ProductController.getListTagsWithChild);
router.post('/getListTagsWithSpecialChildren',ProductController.getListTagsWithSpecialChildren);

module.exports={
        shopRouter:router
}