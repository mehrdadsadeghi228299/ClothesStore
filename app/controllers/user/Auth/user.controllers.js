require('dotenv').config();

const {StatusCodes: HttpStatus} = require("http-status-codes");
const bcrypt=require('bcrypt');
const {newHashPass, codeERSali, CreatedJWT, CreatedRefreshJWT, CreatedRefreshIfJWT, checkRefreshToken, checkAccessesToken } = require("../../../utils/utils");
const {validationResult}=require('express-validator')
const  empty = require('is-empty');
const JWT=require('jsonwebtoken');
const Controller = require('../../base.Controller');
const { UserModel } = require('../../../models/user.model');
const {initRedis} = require('../../../utils/initRedis');
const KEYTOKEN="6d65687264616473616465676869";
const KEYREFRESH="6865646e686d6a672c6a632c63686b2c6b6a2c6b6b2c686b2e";



class UserControllerClass extends Controller{

    UserIndex(req,res,next) {
         return res.status(HttpStatus.OK).json({
            statusCodes:HttpStatus.OK,
            message:'index page User'
        });
    }

    async signupUser(req,res,next){

       try {
        const errorValidator = validationResult(req);
        if(empty(errorValidator)){
            res.status(HttpStatus.BAD_REQUEST).json({
                statusCodes:HttpStatus.BAD_REQUEST,
                where:'/UserControllerClass/signupUser',
                message:errorValidator
            });
        }
        const {password , email , userName , lastName , mobile , name }=req.body
        const exist = await UserModel.findOne({ userName: userName ,mobile:mobile})
        if (!! exist) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCodes: HttpStatus.BAD_REQUEST,
                where: '/UserControllerClass/signupUser',
                message: "Username or mobile is before use "
            });
        }
        const newPass=newHashPass(password)     
        const newUser= await UserModel.create({
            userName:userName,name:name,lastName:lastName,mobile:mobile,password:newPass,email:email
        });
        const tokenAccess =  CreatedJWT({id:newUser._id,Username:newUser.userName},KEYTOKEN);
        const RefreshToken = CreatedRefreshJWT({id:newUser._id,Username:newUser.userName},KEYREFRESH)
        const redisUser_id= `${newUser.mobile}`;
        const saveRefreshTokenOnRedis = initRedis.set(redisUser_id,RefreshToken);

        return res.status(HttpStatus.OK).json({
                statusCodes:HttpStatus.OK,
                where:'/UserControllerClass/signupUser',
                Modified:newUser.isModified,
                tokenAccess:tokenAccess,
                RefreshToken:RefreshToken,
                Data:newUser
            });
       } catch (error) {
       next(error);
      }
    } 
       
    async checkIsModifyAndSendCodeAccount(req,res,next){
        try {
            const {mobile}=req.body;
            const modify=await UserModel.findOne({mobile:mobile})
            console.log(modify.isModify);
            if(!modify.isModify){
               
                let code = codeERSali()
                console.log(code);
                const otp1=await UserModel.findOneAndUpdate({_id:modify._id},
                    {"$set":{"otp.code":code,"otp.expireIn":30000}}

                );
                console.log(otp1);
                return res.status(HttpStatus.OK).json({
                    statusCodes:HttpStatus.OK,
                    where:'/UserControllerClass/checkIsModifyAndSendCodeAccount',
                    Modified:otp1.isModified,
                    Data:otp1
                });
            }


            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCodes:HttpStatus.INTERNAL_SERVER_ERROR,
                where:'/UserControllerClass/checkIsModifyAndSendCodeAccount',
                Modified:"Failed",
                
            });
        } catch (error) {
         
            next(error)
        }
       }
    
    async  checkIsModifyAndGetCodeAccount(req,res,next) {
           try {
            if(this.CheckAccessToken()){
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    statusCodes:HttpStatus.UNAUTHORIZED,
                    where:'/UserControllerClass/checkIsModifyAndGetCodeAccount',
                    Modified:false,
                    message: "Token of "
                });
            }
            const {codeOTP , mobile}=req.body
            const user=await UserModel.findOne({mobile:mobile})
            console.log(user);
            if(user.otp.code==codeOTP){
                    console.log("code is correct");
                    await UserModel.findOneAndUpdate(
                            {_id:id},
                      
                          { "$set":{"isModify":true} });

                    return res.status(HttpStatus.OK).json({
                        statusCodes:HttpStatus.OK,
                        where:'/UserControllerClass/checkIsModifyAndGetCodeAccount',
                        Modified:user.isModified,
                        Data:user
                    });

            }
           } catch (error) {
            next(error)
        }
       }
    
    async CheckRefreshTokenAndCreatedAccessToken(req,res,next){
        try {
            const {refreshToken ,mobile}= req.body;
            const newUser=await UserModel.findOne({mobile:mobile});
            if (refreshToken == null) return res.sendStatus(HttpStatus.UNAUTHORIZED)
            extractRefreshTokenAsRedis=initRedis.get(`${newUser.mobile}`)
            if (!refreshToken.includes(extractRefreshTokenAsRedis)) return res.sendStatus(HttpStatus.UNAUTHORIZED)
           
            return CreatedRefreshIfJWT(refreshToken,KEYREFRESH,{id:newUser._id,Username:newUser.userName},KEYTOKEN)
          
        } catch (error) {
            next(error)
        }


    }


}

module.exports={
    UserControllerAuth:new UserControllerClass()
}