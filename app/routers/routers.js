const {  UserAuthRouter } = require('./Auth/user.router');
const {AdminRouter} = require('./admin/admin.router');
const {shopRouter} = require('./shop/shop.router');

const router=require('express').Router();


router.use(UserAuthRouter);
router.use(shopRouter);
router.use(AdminRouter);
router.use(shopRouter);

module.exports=router;
