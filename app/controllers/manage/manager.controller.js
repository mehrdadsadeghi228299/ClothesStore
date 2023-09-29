
const isEmpty = require('is-empty');
const Controller = require("../base.Controller");
const { AdminModel } = require('../../models/admin.model');
const { newHashPass, codeERSali, compareHashPass } = require('../../utils/utils');
const nodemailer = require('nodemailer');
const { sendingEmailService } = require('../../utils/email');
const { StatusCodes: HttpStatus } = require("http-status-codes");
const adminModel = require('../../models/admin.model');
const { SignAccessToken, SignRefreshToken, VerifyRefreshToken } = require('../../middlewares/checkAuth');
const createHttpError = require('http-errors');
const { check, validationResult } = require('express-validator');
const KEYTOKEN = "6d65687264616473616465676869";
const KEYREFRESH = "6865646e686d6a672c6a632c63686b2c6b6a2c6b6b2c686b2e";

const bcrypt = require('bcrypt');

class AdminManager extends Controller {

    async addAdmin(req, res, next) {
        try {

            var location = '/AdminManager/addAdmin';
            const errorValidator = validationResult(req);
            if (!errorValidator.isEmpty()) {
                res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                    where: location,
                    validator_Message: errorValidator
                });
            }
            const { userName, password, mobile, email } = req.body;
            const resultSearching = await AdminModel.findOne({ userName: userName });
            if (resultSearching) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is used before "
                });
            }

            const hashPass = newHashPass(password);
            const resultAddingAdmin = (await AdminModel.create({ userName: userName, mobile: mobile, email: email, password: hashPass })).save();
            sendingEmailService("merhrdadsadeghi769@gamil.com", "mehrdadsadeghi79@outlook.com", "admin was create with ", resultAddingAdmin);

            return res.status(HttpStatus.OK).json({
                statusCodes: HttpStatus.OK,
                where: location,
                user: "Admin was Create " + resultAddingAdmin

            });


        } catch (error) {
            next(error)
        }
    }
    async SendsMobileCodeAdmin(req, res, next) {
        try {
            var location = '/AdminManager/SendsCodeAdmin';
            const code = codeERSali();
            const { userName } = req.Admin;
            const resultSearching = await AdminModel.findOne({ userName: userName });
            if (!resultSearching) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if (!resultSearching.Active) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: " user name is delete before "
                });
            }

            const updateModel = AdminModel.findOneAndUpdate({ userName: userName }, {
                '$set': { 'otpMobile.code': code }
            }).exec();
            res.status(HttpStatus.BAD_REQUEST).json({
                statusCodes: HttpStatus.BAD_REQUEST,
                where: location,
                message: `the code is ${code} for verify mobile id & and user name is ` + updateModel._id + updateModel.userName
            });
        } catch (error) {
            next(error)
        }
    }

    async getVerifyMobileAdmin(req, res, next) {
        try {
            var location = '/AdminManager/verifyMobileAdmin';
            const username = req.Admin.userName;
            const { userCode } = req.body;
            const resultSearching = await AdminModel.findOne({ userName: username });
            if (!resultSearching) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if (!resultSearching.Active) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is delete before "
                });
            }
            if (resultSearching.isMobile) {
                return res.status(HttpStatus.OK).json({
                    statusCodes: HttpStatus.OK,
                    where: location,
                    message: " email is verify before"
                });
            }
            if (!userCode) createHttpError.NotImplemented('code receive can Not br empty ');

            if (resultSearching.otpMobile.code == userCode) {
                await AdminModel.findOneAndUpdate({ userName: username }, {
                    isMobile: true
                });
                return res.status(HttpStatus.OK).json({
                    statusCodes: HttpStatus.OK,
                    where: location,
                    message: "verify  email is sucess "
                });
            };

            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                where: location,
                message: " there was a problem the code is not right or server in issus"
            });

        } catch (error) {
            next(error)
        }
    }
    async SendsVerifyEmailAdmin(req, res, next) {
        try {
            var location = '/AdminManager/addAdmin';
            const { userName } = req.Admin;
            const resultSearching = await AdminModel.findOne({ userName })
            if (!resultSearching) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if (!resultSearching.Active) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is delete before "
                });
            }
            const code3 = codeERSali()
            await AdminModel.findByIdAndUpdate({ _id: resultSearching._id }, {
                '$set': { 'otpEmail.code': code3 }
            });
            sendingEmailService("merhrdadsadeghi769@gamil.com", resultSearching.email, "code For verify email ", ` the code is ${code3}`);
            return res.status(HttpStatus.OK).json({
                statusCodes: HttpStatus.OK,
                where: location,
                message: `the code is ${code3} sends to emails `
            });

        } catch (error) {
            next(error)
        }
    }

    async getVerifyEmailCode(req, res, next) {
        var location = '/AdminManager/addAdmin';
        const { userName } = req.Admin;
        const { codeEmails } = req.body;
        const resultSearching = await AdminModel.findOne({ userName })
        if (!resultSearching) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCodes: HttpStatus.BAD_REQUEST,
                where: location,
                message: "user name is not exist "
            });
        }
        if (!resultSearching.Active) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCodes: HttpStatus.BAD_REQUEST,
                where: location,
                message: "user name is delete before "
            });
        }
        if (!codeEmails) { createHttpError.NotImplemented('code receive can Not br empty '); }
        if (resultSearching.otpEmail.code == codeEmails) {
            const resultCodeEmail = await AdminModel.findByIdAndUpdate({ _id: resultSearching._id }, {
                isEmail: true
            });
            return res.status(HttpStatus.NOT_ACCEPTABLE).json({
                statusCodes: HttpStatus.NOT_ACCEPTABLE,
                where: location,
                message: " Email is Verify thanks " + resultCodeEmail._id
            });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
            where: location,
            message: " there was a problem the code is not right or server in issus"
        });
    }
    async DeleteAdmin(req, res, next) {
        try {
            var location = '/AdminManager/DeleteAdmin';
            const { userName } = req.Admin;
            const resultSearching = await AdminModel.findOne({ userName })
            if (!resultSearching) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if (!resultSearching.Active) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is delete before "
                });
            }
            if(resultSearching.isEmail&& resultSearching.isMobile){
                const resultQueryForDelete = await AdminModel.findOneAndUpdate({ userName }, { Active: false });
                return res.status(HttpStatus.OK).json({
                    statusCodes: HttpStatus.OK,
                    where: location,
                    message: "Amin was deleted . "
                });
            }
            
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                where: location,
                message: " there was a problem in your Auth OR not right or server in issus"
            });

        } catch (error) {
            next(error)
        }
    }

    async VerifyAdmin(req, res, next) {
        try {
            var location = '/AdminManager/VerifyAdmin';
            const { userName } = req.Admin;
            const resultSearching = await AdminModel.findOne({ userName })
            if (!resultSearching) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if (!resultSearching.Active) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is delete before "
                });
            }

            if (resultSearching.isEmail) {
                if (resultSearching.isMobile) {
                    res.status(HttpStatus.BAD_REQUEST).json({
                        statusCodes: HttpStatus.BAD_REQUEST,
                        where: location,
                        message: "email And mobile Are Verify ."
                    });
                } else {
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

            const { username, pass } = req.body;
            const resultSearching = await AdminModel.findOne({ userName: username });
            if (!resultSearching) {
                return res.status(HttpStatus.NOT_ACCEPTABLE).json({
                    statusCodes: HttpStatus.NOT_ACCEPTABLE,
                    where: location,
                    message: "user name is not exist "
                });
            }
            if (!resultSearching.Active) {
                return res.status(HttpStatus.NOT_ACCEPTABLE).json({
                    statusCodes: HttpStatus.NOT_ACCEPTABLE,
                    where: location,
                    message: "user name is delete before "
                });
            }
            const HashingInput = newHashPass(pass);
            if (resultSearching.password === HashingInput) {
                const accessToken = await SignAccessToken(resultSearching._id)
                const refreshToken = await SignRefreshToken(resultSearching._id);
                return res.status(HttpStatus.OK).json({
                    statusCodes: HttpStatus.OK,
                    where: location,
                    Modified: resultSearching.isModified,
                    tokenAccess: accessToken,
                    RefreshToken: refreshToken,
                    Data: resultSearching._id + resultSearching.userName
                });


            }
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                where: location,
                Data: "login is not Success we have Issus:"
            });


        } catch (error) {
            next(error)
        }
    }
    async requestChangePasswordAdmin(req, res, next) {
        try {
            var location = '/AdminManager/changePasswordAdmin';
            const code = codeERSali();
            const { username } = req.body;
            const updateUserCode = await AdminModel.findOne({ userName: username });
            if (!updateUserCode.Active) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: " user name is delete before "
                });
            }
            const updateModel = AdminModel.findOneAndUpdate({ userName: username }, {
                '$set': { otpMobile: code }
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
    async changePasswordAdmin(req, res, next) {
        try {
            var location = '/AdminManager/changePasswordAdmin';

            const { username, newPass, code } = req.body;
            const updateUserCode = await AdminModel.findOne({ userName: username });
            if (!updateUserCode.Active) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: " user name is delete before "
                });
            }
            const temp = updateUserCode.otpMobile.code;
            console.log(temp == code);
            if (temp) {
                const pass = newHashPass(newPass);
                console.log(pass);
                const updateAdmin = await AdminModel.findByIdAndUpdate({ _id: updateUserCode._id }, {
                    '$set': { password: pass }
                });
                const token = await SignRefreshToken(updateAdmin._id)
                return res.status(HttpStatus.ACCEPTED).json({
                    statusCodes: HttpStatus.ACCEPTED,
                    where: location,
                    message: "pass changed ",
                    refreshToken: token
                });
            }
            else {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    where: location,
                    message: "user name is not exist Or some thing have problem"
                });
            }

        } catch (error) {
            next(error)
        }
    }
    logOut(req, res, next) {
        try {
            var location = '/AdminManager/logOut';
            req.Admin.destroy()
            return res.status(HttpStatus.ACCEPTED).json({
                statusCodes: HttpStatus.ACCEPTED,
                where: location,
                message: " Your Are Logout "
            });
        } catch (error) {
            next(error)
        }
    }
    async verifyToken(req, res, next) {
        try {
            var location = '/AdminManager/verifyToken';

            const { token } = req.body;
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
            });
        } catch (error) {
            next(error)
        }
    }

    async checkIsAdminExistOrDelete(username) {
        try {
            const resultSearching = await AdminModel.findOne({ userName: username });
            return resultSearching
        } catch (error) {
            next(error)
        }

    }
}

module.exports = {
    AdminManager: new AdminManager
}