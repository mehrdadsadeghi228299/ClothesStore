const createHttpError = require("http-errors");
const JWT = require("jsonwebtoken");
const { AdminModel } = require("../models/admin.model");
const { UserModel } = require("../models/user.model");
require('dotenv').config();

function getToken(headers) {
  const [bearer, token] = headers?.authorization?.split(" ") || [];
  if (token && ["Bearer", "bearer"].includes(bearer)) return token;
  throw createHttpError.Unauthorized(
    "حساب کاربری شناسایی نشد وارد حساب کاربری خود شوید"
  );
}
function VerifyAdminAccessToken(req, res, next) {
  try {
    const token = getToken(req.headers);
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, async (err, payload) => {
      try {
        if (err) throw createHttpError.Unauthorized("وارد حساب کاربری خود شوید");
        const { mobile } = payload || {};
        const Admin = await AdminModel.findOne(
          { mobile },
          { password: 0, otp: 0 }
        );
        if (!Admin) throw createHttpError.Unauthorized( "Admin Account is not found ");
        req.admin = Admin;
        return next();
      } catch (error) {
        next(error);
      }
    });
  } catch (error) {
    next(error);
  }
}

function VerifyUserAccessToken(req, res, next) {
  try {
    const token = getToken(req.headers);
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, async (err, payload) => {
      try {
        if (err) throw createHttpError.Unauthorized("وارد حساب کاربری خود شوید");
        const { mobile } = payload || {};
        const user = await UserModel.findOne(
          { mobile },
          { password: 0, otp: 0 }
        );
        if (!user) throw createHttpError.Unauthorized( "Admin Account is not found ");
        req.user = user;
        return next();
      } catch (error) {
        next(error);
      }
    });
  } catch (error) {
    next(error);
  }
}
module.exports = {
    VerifyAdminAccessToken,
    getToken,
    VerifyUserAccessToken
  };