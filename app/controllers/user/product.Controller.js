const { ProductModel } = require("../../models/products.model");
const { CategoryModel } = require("../../models/category.model");
const { CheckIsEmpty, ErrorJsonForm } = require("../../utils/utils");
const Controller = require("../base.Controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { BrandsModel } = require("../../models/brands.model");

class ProductController extends Controller {
    /* ***********************************               products Area                           **************************** */


    async getListProduct(req, res, next) {
        try {
            let location='/ProductControllerClass/getListProduct'
            const CatchAllOfProduct = await ProductModel.find({ showing: true });

        
            if (CatchAllOfProduct.length <1 ) {
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
                    CatchAllOfProduct
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

    async findProductById(req, res, next) {
        try {
            let location='/ProductControllerClass/findProductById'

            const { id } = req.body
            //CheckIsEmpty(id, HttpStatus.NOT_IMPLEMENTED, '/ProductControllerClass/getListProduct', false);

            const findProduct = await ProductModel.findById(id);

           
            if (findProduct.length <1 ) {
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
                    findProduct
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

    async findProductByProductCode(req, res, next) {
        let location='/ProductControllerClass/findProductByProductCode'

        try {
            const { code } = req.body
            const check = checkIsNumber(code)
            if (!check) {
                ErrorJsonForm("ProductCode value is not number ", HttpStatus.NOT_IMPLEMENTED, '/ProductControllerClass/findProductByProductCode', false);
            }

           // CheckIsEmpty(code, HttpStatus.NOT_IMPLEMENTED, '/ProductControllerClass/findProductByProductCode', false);

            const findProduct = await ProductModel.findOne({ productCode: code });

           
           
            if (findProduct.length <1 ) {
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
                    findProduct
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

    /* ***********************************             Category   Area                           **************************** */

    async getListCategory(req, res, next) {
        try {
            let location='/ProductControllerClass/getListCategory'

            const findProduct = await CategoryModel.find({ EnableSelling: true });
           
            if (findProduct.length <1 ) {
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
                    findProduct
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

    async getListCategoryWithProduct(req, res, next) {
        try {

            let location='/ProductControllerClass/getListCategoryWithProduct'

            const findProduct = await CategoryModel.find().populate('ListProduct');
            if (findProduct.length <1 ) {
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
                    findProduct
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

    async getListCategoryWithSpecialChildren(req, res, next) {
        try {
            let location='/ProductControllerClass/getListCategoryWithSpecialChildren'

            const { titleCategory } = req.body;

            const findCategory = await BrandsModel.find({ Name: titleCategory }).populate('ListProduct');

            if (findCategory.length <1 ) {
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
                    findCategory
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

    /* ***********************************             Brands    Area                           **************************** */

    async getListBrands(req, res, next) {
        try {
            let location='/ProductControllerClass/getListBrands'

            const findBrands = await BrandsModel.find({ EnableSelling: true });
            console.log(findBrands);
            if (findBrands.length <1 ) {
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
                    findBrands
                }
            )

        } catch (error) {
     
        next(error);
        }
    }

    async getListBrandsWithProduct(req, res, next) {
        try {
            let location='/ProductControllerClass/getListBrands'
            const findBrands = await BrandsModel.find().populate('ListProduct');

       
            if (findBrands.length <1 ) {
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
                    findBrands
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

    async getListBrandsWithSpecialChildren(req, res, next) {
        try {
            let location='/ProductControllerClass/getListBrands'


            const { nameBrands } = req.body;

            const findBrands = await BrandsModel.find({ Name: nameBrands }).populate('ListProduct');

        
            if (findBrands.length <1 ) {
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
                    findBrands
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
    ProductController:new ProductController
}