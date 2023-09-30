const { UserModel } = require("../models/user.model");
const { StatusCodes: HttpStatus } = require("http-status-code");
const bcrypt = require('bcrypt');
const empty = require('is-empty');
const jwt = require("jsonwebtoken");
const createHttpError = require("http-errors");
const { ProductModel } = require("../models/products.model");
const ObjectId = require('mongoose').Types.ObjectId;
const gen = '4420d1918bbcf7686defdf9560bb5087d20076de5f77b7cb4c3b40bf46ec428b';
const originalHash = '$2a$10$7h/0SQ4FXRG5eX3602o3/.aO.RYkxKuhGkzvIXHLUiMJlFt1P.6Pe';
const t =  '$2a$10$nN.FUHQxv4Yf3sTMp4W95uKmSV9wA.5yYpAMVnqfrHKb/zXuVh4VS';

async function CheckExistUser(username) {
    const exist = await UserModel.findOne({ userName: username })
    if (empty(exist)) {
      createHttpError.InternalServerError("not Exists")
    }
    return false
}

function newGenSalt() {
    const newPass = bcrypt.genSaltSync(10)
    return newPass
}
function newHashPass(password) {
     const newPass = bcrypt.hashSync(password, newGenSalt())
     return newPass
}
function compareHashPass(password, userInter) {
    const newPass = bcrypt.compareSync(password, userInter)
   return newPass
}
function codeERSali() {
    return Math.round(Math.random() * 100000)
}
function CreatedJWT(jsonData, key) {
    return jwt.sign(jsonData, key, { expiresIn: '1h' })
}
function CreatedRefreshJWT(jsonData, key) {
    return jwt.sign(jsonData, key, { expiresIn: '1y' })
}
function CreatedRefreshIfJWT(RefreshToken, key, jsonData, keyAccessToken) {
    jwt.verify(RefreshToken, key, (err, user) => {
        if (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCodes: HttpStatus.BAD_REQUEST,
                where: '/utils/CreatedRefreshIfJWT',
                message: err
            });
        }
        const accessToken = CreatedJWT(jsonData, keyAccessToken)
        return res.status(HttpStatus.BAD_REQUEST).json({
            statusCodes: HttpStatus.BAD_REQUEST,
            where: '/utils/CreatedRefreshIfJWT',
            accessToken: accessToken
        });

    });
}
function checkRefreshToken(RefreshToken, keyRefreshToken) {
    return jwt.verify(RefreshToken, keyRefreshToken)
}
function checkAccessesToken(AccessToken, keyReToken) {
    return jwt.verify(AccessToken, keyReToken)
}
function CheckIsEmpty(check, Statuscode, locationProblem, modify) {
    if (!check) {
        return  {
            statusCodes: Statuscode,
            where: locationProblem,
            Modified: modify,
            Error: "is Empty "
        }
    }
    return true
}
function theFormOfAnswer(result, Statuscode, locationProblem, modify) {
    return {
        statusCodes: Statuscode,
        where: locationProblem,
        Modified: modify,
        result
    }

}
function ErrorJsonForm(Error, Statuscode, locationProblem, modify) {
    return {
        statusCodes: Statuscode,
        where: locationProblem,
        Modified: modify,
        Error
    }

}
function checkIsNumber(value) {
    if (typeof value === 'number') return true;
    return false
}
function isValidObjectId(id) {

    if (ObjectId.isValid(id)) {
        if ((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}
async function checkExistProduct(id) {
    const answer = await ProductModel.findById(id)
    if (answer) return true
    return false
}
async function createProductCode(){
    
}

module.exports = {
    CheckExistUser,
    newHashPass,
    compareHashPass,
    codeERSali,
    CreatedJWT,
    CreatedRefreshJWT,
    CreatedRefreshIfJWT,
    checkRefreshToken,
    checkAccessesToken,
    CheckIsEmpty,
    theFormOfAnswer,
    isValidObjectId,
    checkIsNumber,
    ErrorJsonForm,
    checkExistProduct

}