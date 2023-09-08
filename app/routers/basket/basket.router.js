const { BasketProductShop } = require('../../controllers/basket/basket.controller');

const router=require('express').Router();


router.get('/itemsInBasket',BasketProductShop.get_ItemsInBasket);
router.post('/AddItemIntoBasket',BasketProductShop.post_AddItemIntoBasket);
router.delete('/DeleteItemsInBasket',BasketProductShop.Delete_ItemIntoBasket);



module.exports={
        BasketRouter:router
}