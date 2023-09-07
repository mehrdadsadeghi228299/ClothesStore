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
         
            if (resultGettingItemsInBasket.length <1 ) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json ({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    Modified: false,
                    Error: "is Empty "
                    
                });
            }
           return res.status(HttpStatus.OK).json(
                 {
                    statusCodes: HttpStatus.OK,
                    where: location,
                    Modified: false,
                    resultGettingItemsInBasket
                }
            )

        } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json ({
                statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                where: location,
                Modified: false,
                Error: error
            });
        next(error);
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
                return res.status(HttpStatus.ACCEPTED).json ({
                    statusCodes: HttpStatus.ACCEPTED,
                    where: location,
                    Modified: false,
                    result:resultAddingItemsInBasket.basket

                });
            }else{
                const resultAddingItemsInBasket = await UserModel.findByIdAndUpdate(id_user, {
                    '$push': { 'basket.$productId': productId, "basket.countItems": countItems }
    
                });
         
                if (resultAddingItemsInBasket.length <1 ) {
                    return res.status(HttpStatus.NOT_IMPLEMENTED).json ({
                        statusCodes: HttpStatus.NOT_IMPLEMENTED,
                        where: location,
                        Modified: false,
                        Error: "is Empty "
                    });
                }
               return res.status(HttpStatus.OK).json(
                     {
                        statusCodes: HttpStatus.OK,
                        where: location,
                        Modified: false,
                        resultAddingItemsInBasket
                    }
                )
                }
            } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json ({
                    statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                    where: location,
                    Modified: false,
                    Error: error
                });
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

         
            if (resultAddingItemsInBasket.length <1 ) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json ({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    Modified: false,
                    Error: "is Empty "
                });
            }
           return res.status(HttpStatus.OK).json(
                 {
                    statusCodes: HttpStatus.OK,
                    where: location,
                    Modified: false,
                    resultAddingItemsInBasket
                }
            )

        } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json ({
                statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                where: location,
                Modified: false,
                Error: error
            });
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