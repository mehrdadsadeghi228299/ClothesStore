const { ProductModel } = require("../../models/products.model");
const { CategoryModel } = require("../../models/category.model");
const { CheckIsEmpty, ErrorJsonForm } = require("../../utils/utils");
const Controller = require("../base.Controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { BrandsModel } = require("../../models/brands.model");
const { TagsModel } = require("../../models/tags.model");

class ProductController extends Controller {

    /* ***********************************               products Area                           **************************** */


    async getListProduct(req, res, next) {
        try {
            var location = '/ProductControllerClass/getListProduct'
            const CatchAllOfProduct = await ProductModel.find({ showing: true });


            if (CatchAllOfProduct.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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
            next(error);
        }
    }

    async findProductById(req, res, next) {
        try {
            var location = '/ProductControllerClass/findProductById'

            const { id } = req.body
            //CheckIsEmpty(id, HttpStatus.NOT_IMPLEMENTED, '/ProductControllerClass/getListProduct', false);

            const findProduct = await ProductModel.findById(id);


            if (findProduct.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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

            next(error);
        }

    }

    async findProductByProductCode(req, res, next) {
        var location = '/ProductControllerClass/findProductByProductCode'

        try {
            const { code } = req.body
            const check = checkIsNumber(code)
            if (!check) {
                ErrorJsonForm("ProductCode value is not number ", HttpStatus.NOT_IMPLEMENTED, '/ProductControllerClass/findProductByProductCode', false);
            }

            // CheckIsEmpty(code, HttpStatus.NOT_IMPLEMENTED, '/ProductControllerClass/findProductByProductCode', false);

            const findProduct = await ProductModel.findOne({ productCode: code });



            if (findProduct.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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

            next(error);
        }

    }

    /* ***********************************             Category   Area                           **************************** */

    async getListCategory(req, res, next) {
        try {
            var location = '/ProductControllerClass/getListCategory'

            const findProduct = await CategoryModel.find({ EnableSelling: true });

            if (findProduct.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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

            next(error);
        }

    }

    async getListCategoryWithProduct(req, res, next) {
        try {

            var location = '/ProductControllerClass/getListCategoryWithProduct'

            const findProduct = await CategoryModel.find().populate('ListProduct');
            if (findProduct.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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

            next(error);
        }
    }

    async getListCategoryWithSpecialChildren(req, res, next) {
        try {
            var location = '/ProductControllerClass/getListCategoryWithSpecialChildren'

            const { titleCategory } = req.body;

            const findCategory = await BrandsModel.find({ Name: titleCategory }).populate('ListProduct');

            if (findCategory.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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

            next(error);
        }
    }

    /* ***********************************             Brands    Area                           **************************** */

    async getListBrands(req, res, next) {
        try {
            var location = '/ProductControllerClass/getListBrands'

            const findBrands = await BrandsModel.find({ EnableSelling: true });
            console.log(findBrands);
            if (findBrands.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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
            var location = '/ProductControllerClass/getListBrandsWithProduct'
            const findBrands = await BrandsModel.find().populate('ListProduct').exec();
            if (findBrands.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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

    async getListBrandsWithSpecialChildren(req, res, next) {
        try {
            var location = '/ProductControllerClass/getListBrandsWithSpecialChildren'


            const { nameBrands } = req.body;

            const findBrands = await BrandsModel.find({ Name: nameBrands }).populate('ListProduct');


            if (findBrands.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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

  /* ***********************************               Tags    Area                           **************************** */

    async getListTags(req, res, next) {
        try {
            var location = '/ProductControllerClass/getListTags'

            const findBrands = await TagsModel.find();
            if (findBrands.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
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

    async getListTagsWithChild(req, res, next) {
        try {
            var location = '/ProductControllerClass/getListTagsWithChild'

            const findTags = await TagsModel.find().populate('product_id').exec();
            
            if (findTags.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    Modified: false,
                    Error: " TagsModel is  Empty "
                });
            }
            return res.status(HttpStatus.OK).json(
                {
                    statusCodes: HttpStatus.OK,
                    where: location,
                    Modified: false,
                    findTags
                }
            )

        } catch (error) {
            next(error);
        }
    }

    async getListTagsWithSpecialChildren(req, res, next) {
        try {
            var location = '/ProductControllerClass/getListTagsWithSpecialChildren'
            const { name } = req.body;
            const findTagsModel = await TagsModel.find({ name: name }).populate('product_id');
            if (findTagsModel.length < 1) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    Modified: false,
                    Error: " TagsModel is Empty for this name :" + name 
                });
            }
            return res.status(HttpStatus.OK).json(
                {
                    statusCodes: HttpStatus.OK,
                    where: location,
                    Modified: false,
                    findTagsModel
                }
            )

        } catch (error) {

            next(error);
        }
    }


}


module.exports = {
    ProductController: new ProductController
}