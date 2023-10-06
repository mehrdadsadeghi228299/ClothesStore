const createHttpError = require("http-errors");
const { TopicModel } = require("../../models/topic.model");
const Controller = require("../base.Controller");
const topicModel = require("../../models/topic.model");

const { StatusCodes: HttpStatus } = require("http-status-codes");

class TopicController extends  Controller{
    async getAllTopic(req,res,next){
        try {
            var location ='TopicController/getAllTopic'
            const result=await TopicModel.find({}).populate('product_id');
            if (!result) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json ({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    Modified: false,
                    Error: "is Empty "
                    
                });
            }
            return res.status(HttpStatus.ACCEPTED).json ({
                statusCodes: HttpStatus.ACCEPTED,
                where: location,
                message:result
                
            });  
        } catch (error) {
            next()
        }
    }
   async getSpecificTopic(req,res,next){
        try {
            const name = req.body.name;
            if(! typeof name == String) createHttpError.NotAcceptable('The value must be String') ;
            var location ='TopicController/getSpecificTopic'
            const result=await TopicModel.find({name:name}).populate('product_id');
            if (!result.product_id) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json ({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    Modified: false,
                    Error: "is Empty Or name Not Exist"
                    
                });
            }
            return res.status(HttpStatus.ACCEPTED).json ({
                statusCodes: HttpStatus.ACCEPTED,
                where: location,
                message:result
                
            });  
        } catch (error) {
            next()
        }
    }
   async CreateTopic(req,res,next){
        try {
        
            const name = req.body.name;
            if(! typeof name == String) createHttpError.NotAcceptable('The value must be String') ;
            var location ='TopicController/getSpecificTopic'
            const result=await TopicModel.find({name:name});
            if (result.product_id) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json ({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    Modified: false,
                    Error: "there was a topic With this name "
                    
                });
            }
            const resultCreateTopic=await TopicModel.create({name:name});

            return res.status(HttpStatus.ACCEPTED).json ({
                statusCodes: HttpStatus.ACCEPTED,
                where: location,
                message:"topic was create with id :"+resultCreateTopic.id
                
            });  
        } catch (error) {
            next()
        }
    }


  async  pushIntoTopic(req,res,next){
        try {
            var location ='TopicController/pushIntoTopic'
            const{ name,productsId} = req.body;
            if(! typeof name == String) createHttpError.NotAcceptable('The value must be String') ;
            const result = await TopicModel.findOne({name});
            if (result) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json ({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    Modified: false,
                    Error: "is Empty "
                    
                });
            }
            for (const key in result.product_id) {
                if ( key == productsId ) {
                    return res.status(HttpStatus.NOT_IMPLEMENTED).json ({
                        statusCodes: HttpStatus.NOT_IMPLEMENTED,
                        where: location,
                        Modified: false,
                        Error: "Sorry but : the products Before Add into This Topic "
                        
                    }); 
                    
                }
            }
            const PushIntoTopic = await TopicModel.findOneAndUpdate({
                name
            },{
                '$push':{product_id:productsId}
            })
            return res.status(HttpStatus.ACCEPTED).json ({
                statusCodes: HttpStatus.ACCEPTED,
                where: location,
                message:PushIntoTopic
                
            });  
        } catch (error) {
            next()
        }
    }
    
  async  DeleteProductsInTopic(req,res,next){
    try {
        var location ='TopicController/pushIntoTopic'
        const{ name,productsId} = req.body;
        if(! typeof name == String) createHttpError.NotAcceptable('The value must be String') ;
        const resultDeleteProductsInTopic= await TopicModel.findOneAndDelete({name},{
            product_id:productsId            
        });
        if (!result) {
            return res.status(HttpStatus.NOT_IMPLEMENTED).json ({
                statusCodes: HttpStatus.NOT_IMPLEMENTED,
                where: location,
                Modified: false,
                Error: "is Empty "
                
            });
        }
        
        return res.status(HttpStatus.ACCEPTED).json ({
            statusCodes: HttpStatus.ACCEPTED,
            where: location,
            message:resultDeleteProductsInTopic
            
        });  
    } catch (error) {
        next()
    }
}

}

module.exports={
    TopicController:new TopicController()
}