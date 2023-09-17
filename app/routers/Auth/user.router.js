const { UserControllerAuth } = require('../../controllers/user/Auth/user.controllers');
const { validatorUser } = require('../../validators/user.vaildate');
const router=require('express').Router();


router.get('/',UserControllerAuth.UserIndex);
router.post('/signup',validatorUser,UserControllerAuth.signupUser);
router.post('/modifyaccount',UserControllerAuth.checkIsModifyAndSendCodeAccount);
router.post('/CheckRefreshTokenAndCreatedAccessToken',UserControllerAuth.CheckRefreshTokenAndCreatedAccessToken);

module.exports={
        UserAuthRouter:router
}