
const isEmpty = require('is-empty');
const Controller = require("../base.Controller");
const { AdminModel } = require('../../models/admin.model');
const { newHashPass, codeERSali, compareHashPass } = require('../../utils/utils');
const nodemailer = require('nodemailer');
const { sendingEmailService } = require('../../utils/email');
const { StatusCodes: HttpStatus } = require("http-status-codes");
const adminModel = require('../../models/admin.model');
const { compare } = require('bcrypt');
const { SignAccessToken, SignRefreshToken, VerifyRefreshToken, checkcompre } = require('../../middlewares/checkAuth');
const KEYTOKEN="6d65687264616473616465676869";
const KEYREFRESH="6865646e686d6a672c6a632c63686b2c6b6a2c6b6b2c686b2e";


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
            const {check:resultSearching,isDelete }= checkIsAdminExistOrDelete(userName)
            if (!resultSearching) {
               return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is used before "
                });
            }

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
            const {check:resultSearching,isDelete }= checkIsAdminExistOrDelete(username)
            if (resultSearching) {
               return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if(isDelete){
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is delete before "
                });
            } 
            if(resultSearching.isEmail){
                res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.OK,
                    where: location,
                    message: " email is verify before"
                });
            } else {
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
            const {check:resultSearching,isDelete }= checkIsAdminExistOrDelete(username)
            if (resultSearching) {
               return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if(isDelete){
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is delete before "
                });
            } 
            const code3=codeERSali
            await AdminModel.findByIdAndUpdate({_id:resultSearching._id},{
                $set:{otpMobile:code3}
            });


            sendingEmailService("merhrdadsadeghi769@gamil.com", "12462345635", "merhrdadsadeghi769@gamil.com", resultSearching.email , "code For verify email ", ` the code is ${code3}`);
            return  res.status(HttpStatus.OK).json({
                statusCodes: HttpStatus.OK ,
                where: location ,
                message: "the code is sends to emails "
            });
        } catch (error) {
            next(error)
        }
    }
    async DeleteAdmin(req, res, next) {
        try {
            var location = '/AdminManager/DeleteAdmin';

            const {id}=req.body;
            const {check:resultSearching,isDelete }= checkIsAdminExistOrDelete(username)
            if (resultSearching) {
               return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if(isDelete){
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is delete before "
                });
            } 
            const resultQueryForDelete = await AdminModel.findByIdAndUpdate({id:id},{Active:false});
            if (resultQueryForDelete.Active) {
                res.status(HttpStatus.OK).json({
                    statusCodes: HttpStatus.OK,
                    where: location,
                    message: " there was a problems for delete in products   . "

                });
            }else {
                    res.status(HttpStatus.OK).json({
                        statusCodes: HttpStatus.OK,
                        where: location,
                        message: "Amin was deleted . "
                    });
            }
        } catch (error) {
            next(error)
        }
    }
    
    async VerifyAdmin(req, res, next) {
        try {
            var location = '/AdminManager/VerifyAdmin';

            const { username } = req.body;
            const {check:resultSearching,isDelete }= checkIsAdminExistOrDelete(username)
            if (resultSearching) {
               return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if(isDelete){
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is delete before "
                });
            }            
         
            if (resultSearching.isEmail) {
                if (resultSearching.isMobile) {
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

    async loginAdmin(req, res, next) {
        try {
            var location = '/AdminManager/loginAdmin';

            const {username,pass}=req.body;
            const {check:resultSearching,isDelete }= checkIsAdminExistOrDelete(username)
            if (resultSearching) {
               return res.status(HttpStatus.NOT_ACCEPTABLE).json({
                    statusCodes: HttpStatus.NOT_ACCEPTABLE,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if(isDelete){
                return res.status(HttpStatus.NOT_ACCEPTABLE).json({
                    statusCodes: HttpStatus.NOT_ACCEPTABLE,
                    where: location,
                    message: "user name is delete before "
                });
            }
            const comparePass = compareHashPass( resultSearching.password,pass);
            if(comparePass){
             
                const accessToken = await SignAccessToken(resultSearching._id)
                const refreshToken = await SignRefreshToken(resultSearching._id);
                return res.status(HttpStatus.OK).json({
                        statusCodes:HttpStatus.OK,
                        where:location,
                        Modified:resultSearching.isModified,
                        tokenAccess:accessToken,
                        RefreshToken:refreshToken,
                        Data:resultSearching
                    });

             
            }
        } catch (error) {
            next(error)
        }
    }

    async changePasswordAdmin(req, res, next) {
        try {
            var location = '/AdminManager/changePasswordAdmin';

            const { username,newPass,code} = req.body;
            const {check:resultSearching,isDelete }= checkIsAdminExistOrDelete(username)
            if (resultSearching) {
               return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if(isDelete){
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: " user name is delete before "
                });
            }
            this.SendsCodeAdmin();
            const updateUserCode = await AdminModel.findOne({userName:username});
            if(updateUserCode.otpMobile.code.include(code)){
                const pass = newHashPass(newPass);
                const updateAdmin = await AdminModel.findById({_id:updateUserCode._id},{
                    $set:{password:pass}
                });
                return res.status(HttpStatus.ACCEPTED).json({
                    statusCodes: HttpStatus.ACCEPTED,
                    where: location,
                    message: "pass change "
                });
            }
        

        } catch (error) {
            next(error)
        }
    }
    async verifyToken(req,res,next){
        try {
            var location = '/AdminManager/verifyToken';

            const {token}=req.body;
            const mobile = await VerifyRefreshToken(token);
            const admin = await AdminModel.findOne({ mobile })
            const accessToken = await SignAccessToken(admin._id);
            const newRefreshToken = await SignRefreshToken(admin._id);
            return res.status(HttpStatus.OK).json({
              StatusCode: HttpStatus.OK,
              statusCodes: HttpStatus.BAD_REQUEST,
              where: location,
              data: {
                accessToken,
                refreshToken: newRefreshToken,
                admin
              }
            })
        } catch (error) {
            next(error)
        }
    }
   async SendsCodeAdmin(req, res, next) {
        try {
            var location = '/AdminManager/SendsCodeAdmin';
            const code = codeERSali;
            const { username } = req.body;
            const {check:resultSearching,isDelete }= checkIsAdminExistOrDelete(username)
            if (resultSearching) {
               return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if(isDelete){
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: " user name is delete before "
                });
            }
            const updateModel = AdminModel.findOneAndUpdate({userName:username},{
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

    async checkIsAdminExistOrDelete(username){
        
        const check = await AdminModel.findOne({userName:username});
        const isDelete=check.Active;
        return check,isDelete
        
    }
}

module.exports = {
    AdminManager: new AdminManager
}