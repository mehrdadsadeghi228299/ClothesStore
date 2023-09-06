const { AdminController } = require('../../controllers/admin/admin.controller');
const { validatorBrands } = require('../../validators/brands.validtor');
const { validatorMongoId } = require('../../validators/mid.update.vliadotr');
const { validatorProducts } = require('../../validators/products.Validator');
const router=require('express').Router();

    /* ***********************************               products Area                           **************************** */

router.post('/add-product',validatorProducts,AdminController.post_AddProduct);
router.put('/enableProduct',AdminController.put_enableProduct);
router.delete('removeProduct',AdminController.Delete_removeProduct);
router.put('/chooseForBestProduct',AdminController.put_chooseForBestProduct);


    /* ***********************************               Brands Area                           **************************** */

router.post('/addBrands',validatorBrands,AdminController.post_AddBrands);
router.put('/put_updateListProductIntoBrands',validatorMongoId,AdminController.put_updateListProductIntoBrands);
router.delete('/Delete_removeBrands',AdminController.Delete_removeBrands);
router.put('/put_enableBrands',AdminController.put_enableBrands);
router.put('/chooseForBestBrands',AdminController.put_chooseForBestBrands);
    /* ***********************************               Category Area                           **************************** */
    
router.post('/AddCategory',validatorProducts,AdminController.post_AddCategory);
router.put('/updateListProductsIntoCategory',validatorMongoId,AdminController.put_updateListProductsIntoCategory);
router.delete('/removeCategory',AdminController.Delete_removeCategory);
router.put('/enableCategory',AdminController.put_enableCategory);
router.put('/chooseForBestCategory',AdminController.put_chooseForBestCategory);

module.exports={
        AdminRouter:router
}