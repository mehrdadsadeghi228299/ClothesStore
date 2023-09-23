
const isEmpty = require('is-empty');
const Controller = require("../base.Controller");
const { AdminModel } = require('../../models/admin.model');
const { newHashPass } = require('../../utils/utils');
const nodemailer = require('nodemailer');
const { sendingEmailService } = require('../../utils/email');

class AdminManager extends Controller{

    addAdmin(req,res,next){
        try {

            var location='/AdminManager/addAdmin';
            const errorValidator = validationResult(req);
            if(!isEmpty(errorValidator)){
                res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes:HttpStatus.BAD_REQUEST,
                    where:location,
                    message:errorValidator
                });
            }
            const {userName,password,mobile,email} = req.body;
            const hashPass=newHashPass(password);
            const resultAddingAdmin = AdminModel.create({userName:userName,mobile:mobile,email:email,password:hashPass});
            sendingEmailService("merhrdadsadeghi769@gamil.com","12462345635","merhrdadsadeghi769@gamil.com","mehrdadsadeghi79@outlook.com","admin was create with ",resultAddingAdmin);
            return res.status(HttpStatus.OK).json({
                statusCodes:HttpStatus.OK,
                where:location,
                user:resultAddingAdmin
                       });
       

        } catch (error) {
            next(error)
        }
    }

    DeleteAdmin(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }

    VerifyAdmin(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }

    loginAdmin(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }

    changePasswordAdmin(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }


}

module.exports={
    AdminManager:new AdminManager
}