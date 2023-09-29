const Controller = require("../base.Controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");

class WishListClass extends Controller {

    getWishlist(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
    AddWishlist(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
    DeleteWishlist(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    } 
   
}
module.exports = {
    WishListController: new WishListClass()
}