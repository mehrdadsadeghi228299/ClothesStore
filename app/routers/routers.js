const {AdminAuthRouter} = require('./Auth/Admin/Admin.Auth.router');
const { UserAuthRouter } = require('./Auth/User/user.Auth.router');
const { TopicRouter } = require('./Topic/topic.router');
const {AdminRouter} = require('./admin/admin.router');
const { SearchRouter } = require('./search/search.router');
const {shopRouter} = require('./shop/shop.router');
const { WishlistRouter } = require('./wishList/wishlist.router');

const router=require('express').Router();

router.use("/user",UserAuthRouter)
router.use(shopRouter);
router.use(AdminRouter);
router.use(SearchRouter);
router.use("/manager",AdminAuthRouter);
router.use(WishlistRouter);
router.use(TopicRouter);
module.exports=router;
