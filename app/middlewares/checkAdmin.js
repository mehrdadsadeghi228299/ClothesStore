const createHttpError = require("http-errors");
const JWT = require("jsonwebtoken");
const { AdminModel } = require("../models/admin.model");
const { UserModel } = require("../models/user.model");
const ACCESS_TOKEN_SECRET_KEY = "CCEBD888251E547C877C43A324B5DE12468F431EA0D19A259751E2C80EE35876"

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
    JWT.verify(token, ACCESS_TOKEN_SECRET_KEY, async (err, payload) => {
      try {
        if (err) throw createHttpError.Unauthorized("وارد حساب کاربری خود شوید");
        const { mobile } = payload || {};
        const user = await AdminModel.findOne(
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

function VerifyUserAccessToken(req, res, next) {
  try {
    const token = getToken(req.headers);
    JWT.verify(token, ACCESS_TOKEN_SECRET_KEY, async (err, payload) => {
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