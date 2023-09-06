const { UserRouter } = require('./Auth/user.router');

const router=require('express').Router();


router.use(UserRouter);

module.exports=router;
