const { default: mongoose } = require("mongoose");
const { UserModel } = require("../../models/user.model");
const { theFormOfAnswer, CheckExistUser } = require("../../utils/utils");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { Controller } = require("../base.Controller");


class BasketProductShop extends Controller {

    async get_ItemsInBasket(req, res, next) {
        try {
            let location = 'BasketProductShop/get_ItemsInBasket'

            const id_user = req.user._id;
            const resultGettingItemsInBasket = await UserModel.findById(id_user);
            theFormOfAnswer(resultGettingItemsInBasket.basket, HttpStatus.ACCEPTED, location, false)

        } catch (error) {
            ErrorJsonForm(error, HttpStatus.INTERNAL_SERVER_ERROR, location, false);
            next(error)
        }
    }

    async post_AddItemIntoBasket(req, res, next) {
        try {
            let location = 'BasketProductShop/post_AddItemIntoBasket'

            const id_user = req.user._id;
            const { productId, countItems } = req.body;
            const {point,num}=this.checkItemsExist(id_user,productId)
            if(point){
                const resultAddingItemsInBasket = await UserModel.findByIdAndUpdate(id_user, {
                    '$set': {"basket.countItems": num+1 }
    
                });
                theFormOfAnswer(resultAddingItemsInBasket.basket, HttpStatus.ACCEPTED, location, false)
    
            }else{
                const resultAddingItemsInBasket = await UserModel.findByIdAndUpdate(id_user, {
                    '$push': { 'basket.$productId': productId, "basket.countItems": countItems }
    
                });
                theFormOfAnswer(resultAddingItemsInBasket.basket, HttpStatus.ACCEPTED, location, false)
    
            }
          
        } catch (error) {
            ErrorJsonForm(error, HttpStatus.INTERNAL_SERVER_ERROR, location, false);
            next(error);
        }



    }
    async Delete_ItemIntoBasket(req, res, next) {
        try {
            let location = 'BasketProductShop/Delete_ItemIntoBasket'

            const id_user = req.user._id ;
            const { productId,  } = req.body ;
            CheckExistUser(id_user);

            const resultAddingItemsInBasket = await UserModel.findOneAndRemove({
                '_id':id_user,
                'basket.productId':productId

            });

            theFormOfAnswer(resultAddingItemsInBasket.basket, HttpStatus.ACCEPTED, location, false)

        } catch (error) {
            ErrorJsonForm(error, HttpStatus.INTERNAL_SERVER_ERROR, location, false);
            next(error);
        } 
      
    }

    async checkItemsExist(id,proId){
        let point=false
        const answerModel=await UserModel.findById(id)

        answerModel.basket.forEach(element => {
            
            if(element.productId==mongoose.Types.ObjectId(proId))
            {   console.log("products is exist ");
            let num=element.countItem;
            point=true
                return point ,num;
            }

        }); 
        return point 

    }



}