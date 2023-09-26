const { UserAuthRouter } = require('./Auth/User/user.router');
const { AdminMangerRouter } = require('./admin/Manager/manager');
const {AdminRouter} = require('./admin/admin.router');
const { SearchRouter } = require('./search/search.router');
const {shopRouter} = require('./shop/shop.router');

const router=require('express').Router();

router.use("/user",UserAuthRouter)
router.use(shopRouter);
router.use(AdminRouter);
router.use(shopRouter);
router.use(SearchRouter);
router.use("/manager",AdminMangerRouter);
module.exports=router;
