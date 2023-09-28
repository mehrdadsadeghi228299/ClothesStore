const { AdminManager } = require('../../../controllers/manage/manager.controller');
const { VerifyAdminAccessToken } = require('../../../middlewares/checkAdmin');
const { validatorAdmin } = require('../../../validators/admin.validator');

const router=require('express').Router();


router.post("addingAdmin",validatorAdmin,AdminManager.addAdmin);
router.put('verifyAdmin',VerifyAdminAccessToken,AdminManager.VerifyAdmin);
router.put('verifyEmailAdmin',VerifyAdminAccessToken,AdminManager.verifyEmailAdmin);
router.put('verifyMobileAdmin',VerifyAdminAccessToken,AdminManager.verifyMobileAdmin);
router.delete("DeleteAdmin",VerifyAdminAccessToken,AdminManager.DeleteAdmin);
router.post('loginAdmin',AdminManager.loginAdmin);
router.put('changePasswordAdmin',VerifyAdminAccessToken,AdminManager.changePasswordAdmin);


module.exports={
    AdminAuth:router
 }