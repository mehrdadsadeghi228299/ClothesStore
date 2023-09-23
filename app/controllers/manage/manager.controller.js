
const isEmpty = require('is-empty');
const Controller = require("../base.Controller");
const { AdminModel } = require('../../models/admin.model');
const { newHashPass, codeERSali } = require('../../utils/utils');
const nodemailer = require('nodemailer');
const { sendingEmailService } = require('../../utils/email');
const { StatusCodes: HttpStatus } = require("http-status-codes");
const adminModel = require('../../models/admin.model');

class AdminManager extends Controller {

    async addAdmin(req, res, next) {
        try {

            var location = '/AdminManager/addAdmin';
            const errorValidator = validationResult(req);
            if (!isEmpty(errorValidator)) {
                res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: errorValidator
                });
            }
            const { userName, password, mobile, email } = req.body;
            const hashPass = newHashPass(password);
            const resultAddingAdmin = AdminModel.create({ userName: userName, mobile: mobile, email: email, password: hashPass });
            sendingEmailService("merhrdadsadeghi769@gamil.com", "12462345635", "merhrdadsadeghi769@gamil.com", "mehrdadsadeghi79@outlook.com", "admin was create with ", resultAddingAdmin);
            return res.status(HttpStatus.OK).json({
                statusCodes: HttpStatus.OK,
                where: location,
                user: resultAddingAdmin

            });


        } catch (error) {
            next(error)
        }
    }

     async verifyMobileAdmin(req, res, next) {
        try {
            var location = '/AdminManager/verifyMobileAdmin';
            const timeNow=253
            const { username ,userCode} = req.body;
            const resultSearching = await AdminModel.find({ userName: username });
            if (reslutSeraching) {
                res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if(resultSearching.isEmail){
                res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.OK,
                    where: location,
                    message: " email is verify before"
                });
            }else{
                if(resultSearching.otpMobile.expireIn>timeNow){
                    resultSearching.otpMobile.code.include(userCode);
                    await AdminModel.findByIdAndUpdate({userName:username},{
                        isMobile:true
                    });

                }
                this.SendsCodeAdmin();

            }
        } catch (error) {
            next(error)
        }
    }
    async verifyEmailAdmin(req, res, next) {
        try {
            var location = '/AdminManager/addAdmin';

            const { username } = req.body;
            const reslutSeraching = await AdminModel.find({ userName: username });
            if (reslutSeraching) {
                res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
        } catch (error) {
            next(error)
        }
    }
    DeleteAdmin(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
    
    async VerifyAdmin(req, res, next) {
        try {
            var location = '/AdminManager/addAdmin';

            const { username } = req.body;
            const reslutSeraching = await AdminModel.find({ userName: username });
            if (reslutSeraching) {
                res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if (reslutSeraching.isEmail) {
                if (reslutSeraching.isMobile) {
                        return true
                }else{
                    res.status(HttpStatus.BAD_REQUEST).json({
                        statusCodes: HttpStatus.BAD_REQUEST,
                        where: location,
                        message: "email Or mobile is not verified ."
                    });
                }
            }
            

        } catch (error) {
            next(error)
        }
    }

    loginAdmin(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    changePasswordAdmin(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

   async SendsCodeAdmin(req, res, next) {
        try {
            var location = '/AdminManager/SendsCodeAdmin';
            const code =codeERSali;
            const { username } = req.body;
            const reslutSeraching = await AdminModel.find({ userName: username });
            if (reslutSeraching) {
                res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            const code2=codeERSali
            const updateModel=AdminModel.findOneAndUpdate({userName:username},{
                $set:{otpMobile:code}
            });
            res.status(HttpStatus.BAD_REQUEST).json({
                statusCodes: HttpStatus.BAD_REQUEST,
                where: location,
                message: `the code is ${code} for verify mobile`
            });
        } catch (error) {
            next(error)
        }
    }


}

module.exports = {
    AdminManager: new AdminManager
}