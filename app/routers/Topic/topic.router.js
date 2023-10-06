const { TopicController } = require('../../controllers/CreateTopic/topic.controller');

const router=require('express').Router();

/** --------------------------------------- User Area ------------------------------------------- */
router.get('/getAllTopic',TopicController.getAllTopic);
router.post('/getSpecificTopic',TopicController.getSpecificTopic);

/** --------------------------------------- Admin Area ------------------------------------------- */

router.post('/CreateTopic',VerifyAdminAccessToken,TopicController.CreateTopic);
router.put('/pushIntoTopic',VerifyAdminAccessToken,TopicController.pushIntoTopic);
router.delete('/DeleteProductsInTopic',VerifyAdminAccessToken,TopicController.DeleteProductsInTopic);


module.exports={
        SearchRouter:router
}