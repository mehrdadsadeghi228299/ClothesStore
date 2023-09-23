const { AdminManager } = require('../../../controllers/manage/manager.controller');
const { validatorAdmin } = require('../../../validators/admin.validator');

const router=require('express').Router();

    /* ***********************************               products Area                           **************************** */

router.post('/addAdmin',validatorAdmin,AdminManager.addAdmin);



module.exports={
        AdminMangerRouter:router
}