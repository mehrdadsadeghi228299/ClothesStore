const { model } = require('mongoose');
const { VerifyUserAccessToken } = require('../../middlewares/checkAdmin');
const { WishListController } = require('../../controllers/wishList/wishlist.controller');

const router=require('express').Router();

router.get("/getWishlist",VerifyUserAccessToken,WishListController.getWishlist);
router.put("/AddWishlist",VerifyUserAccessToken,WishListController.AddWishlist);
router.delete("/DeleteOneProductsWishlist",VerifyUserAccessToken,WishListController.DeleteOneProductsWishlist);
router.get("/SendsProductsToBasket",VerifyUserAccessToken,WishListController.SendsProductsToBasket);

module.exports={
    WishlistRouter:router
}