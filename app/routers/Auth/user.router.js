const { UserControllerAuth } = require('../../controllers/user/user.controllers');
const { validatorUser } = require('../../validators/user.vaildate');
const router=require('express').Router();


router.get('/',UserControllerAuth.UserIndex);
router.post('/signup',validatorUser,UserControllerAuth.signupUser);
router.post('/modifyaccount',UserControllerAuth.checkIsModifyAndSendCodeAccount);
router.post('/getmodifyaccount',UserControllerAuth.checkIsModifyAndGetCodeAccount);

module.exports={
        UserAuthRouter:router
}