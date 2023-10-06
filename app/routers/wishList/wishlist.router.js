const { model } = require('mongoose');
const { BasketProductShop } = require('../../controllers/basket/basket.controller');

const router=require('express').Router();

router.get("/getWishlist",VerifyUserAccessToken,BasketProductShop.getWishlist);
router.put("/AddWishlist",VerifyUserAccessToken,BasketProductShop.AddWishlist);
router.delete("/DeleteOneProductsWishlist",VerifyUserAccessToken,BasketProductShop.DeleteOneProductsWishlist);
router.get("/SendsProductsToBasket",VerifyUserAccessToken,BasketProductShop.SendsProductsToBasket);

module.exports={
    WishlistRouter:router
}