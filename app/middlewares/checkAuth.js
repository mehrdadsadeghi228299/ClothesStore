const { StatusCodes: HttpStatus } = require("http-status-codes");
const { AdminModel } = require("../models/admin.model");
const {initRedis:redisClient} = require('../utils/initRedis');
const JWT = require("jsonwebtoken");
const createHttpError = require("http-errors");



function SignAccessToken(userId) {
    return new Promise(async (resolve, reject) => {
        const user = await AdminModel.findById(userId)
        const payload = {
            mobile: user.mobile
        };
        const options = {
            expiresIn: "1d"
        };
        JWT.sign(payload,  process.env.ACCESS_TOKEN_SECRET_KEY, options, (err, token) => {
            if (err) reject(createError.InternalServerError("خطای سروری"));
            resolve(token)
        });
    });
}
function SignRefreshToken(userId) {
    return new Promise(async (resolve, reject) => {
        const user = await AdminModel.findById(userId)
        const payload = {
            mobile: user.mobile
        };
        const options = {
            expiresIn: "1y"
        };
        JWT.sign(payload, process.env.REFRESH_TOKEN_SECRET_KEY, options, async (err, token) => {
            if (err) reject(createError.InternalServerError("خطای سروری"));
            await redisClient.SETEX(String(userId), (365 * 24 * 60 * 60), token);
            resolve(token)
        });
    });
}

function VerifyRefreshToken(token) {
    return new Promise((resolve, reject) => {
        JWT.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY, async (err, payload) => {
            if (err) reject(createError.Unauthorized("وارد حساب کاربری خود شوید"))
            const { mobile } = payload || {};
            const user = await AdminModel.findOne({ mobile }, { password: 0, otpMobile: 0 })
            if (!user) reject(createError.Unauthorized("حساب کاربری یافت نشد"))
            const refreshToken = await redisClient.get(String(user?._id));
            if (!refreshToken) reject(createError.Unauthorized("ورود مجدد به حسابی کاربری انجام نشد"))
            if (token === refreshToken) return resolve(mobile);
            reject(createError.Unauthorized("ورود مجدد به حسابی کاربری انجام نشد"))
        });
    });
}
module.exports = {

    VerifyRefreshToken,
    SignRefreshToken,
    SignAccessToken,

}
