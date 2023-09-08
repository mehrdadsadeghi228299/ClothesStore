const { ProductModel } = require('../../models/products.model');
const Controller = require('../base.Controller');
const BadValue = ["",null,undefined," "]


class SearchInProductsClass extends Controller{

    async searchOnTitle(req,res,next){
        try {
                const {text}=req.body;

                
            resultSearch=await ProductModel.find({ "title" : { $regex:text } });

            if(resultSearch.length <1 ) {
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
                    resultSearch:resultSearch.title , 
                    idProduct:resultSearch._id
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
    
    async searchOnShortDescription(req,res,next){
        try{

        const {shortdes}=req.body;
        
        resultSearch=await ProductModel.find({ "title" : { $regex:shortdes } });

        if(resultSearch.length <1 ) {
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
                resultSearch:resultSearch.shortDescription , 
                idProduct:resultSearch._id
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
    async searchOnDescription(req,res,next){
        
        try {
            const {des}=req.body;

            
        resultSearch=await ProductModel.find({ "title" : { $regex:des } });

        if(resultSearch.length <1 ) {
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
                resultSearch:resultSearch.Description , 
                idProduct:resultSearch._id
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

}


module.exports={
    SearchInProducts:new SearchInProductsClass
}