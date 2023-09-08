const { SearchInProducts } = require('../../controllers/search/searchInProducts');

const router=require('express').Router();


router.post('/title',SearchInProducts.searchOnTitle);
router.post('/shortDescription',SearchInProducts.searchOnShortDescription);
router.post('/Description',SearchInProducts.searchOnDescription);

module.exports={
        SearchRouter:router
}