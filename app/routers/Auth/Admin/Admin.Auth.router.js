const { AdminManager } = require('../../../controllers/manage/manager.controller');
const { VerifyAdminAccessToken } = require('../../../middlewares/checkAdmin');
const { validatorAdmin } = require('../../../validators/admin.validator');

const router=require('express').Router();


router.post("/AddAdmin",validatorAdmin,AdminManager.addAdmin);
router.put('/verifyAdmin',VerifyAdminAccessToken,AdminManager.VerifyAdmin);
router.put('/SendsMobileCodeAdmin',VerifyAdminAccessToken,AdminManager.SendsMobileCodeAdmin);
router.put('/getVerifyMobileAdmin',VerifyAdminAccessToken,AdminManager.getVerifyMobileAdmin);
router.put('/SendsVerifyEmailAdmin',VerifyAdminAccessToken,AdminManager.SendsVerifyEmailAdmin);
router.put('/getVerifyEmailCode',VerifyAdminAccessToken,AdminManager.getVerifyEmailCode);
router.delete("/DeleteAdmin",VerifyAdminAccessToken,AdminManager.DeleteAdmin);
router.post('/loginAdmin',AdminManager.loginAdmin);
router.put('/changePasswordAdmin',VerifyAdminAccessToken,AdminManager.changePasswordAdmin);


module.exports={
    AdminAuthRouter:router
 }