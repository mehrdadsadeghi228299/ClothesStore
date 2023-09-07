const { validationResult } = require("express-validator");
const { validatorProducts } = require("../../validators/products.Validator");
const Controller = require("../base.Controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { ProductModel } = require("../../models/products.model");
const { theFormOfAnswer, ErrorJsonForm } = require("../../utils/utils");
const { BrandsModel } = require("../../models/brands.model");
const { CategoryModel } = require("../../models/category.model");
const { default: mongoose } = require("mongoose");


class AdminController extends Controller {
    /* ***********************************               products Area                           **************************** */

    async post_AddProduct(req, res, next) {
        try {
            let location = '/AdminControllerClass/post_AddProduct';

            const errorValidator = validationResult(req);
            if (!errorValidator) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json ({
                    statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                    where: location,
                    Modified: false,
                    Error: errorValidator
                });          
              }

            const { Name, title, brand_id, tags, categoryFatherId, images, shortDescription, Description, productCode, size, color, price, count, numberOfSail, isModify, isAvailable, showing, pageView, features } = req.body

            const resultCreatedProduct = await ProductModel.create(Name, title, brand_id, categoryFatherId, tags, images, shortDescription, Description, productCode, size, color, price, count, numberOfSail, isModify, isAvailable, showing, pageView, features);
            if (resultCreatedProduct.length <1 ) {
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
                    resultCreatedProduct
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

    async put_enableProduct(req, res, next) {
        try {
            let location = '/AdminControllerClass/post_enableProduct';

            const { id, isAvailable } = req.body
            if (! typeof isAvailable === 'boolean') {
                ErrorJsonForm("the type of numberOfSail is not boolean", HttpStatus.INTERNAL_SERVER_ERROR, location, false);

            }
            const resultUpdateEnableSailingProduct = await ProductModel.findByIdAndUpdate({ _id: id }, { isAvailable: isAvailable })

            if (resultUpdateEnableSailingProduct.length <1 ) {
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
                    resultUpdateEnableSailingProduct
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
    async Delete_removeProduct(req, res, next) {
        try {

            let location = '/AdminControllerClass/Delete_removeProduct';
            const { id } = req.body;
            if (!typeof id === mongoose.Types.ObjectId) {
                ErrorJsonForm("id is not typeof objectid ", HttpStatus.BAD_REQUEST)
            }

            /* send otp code on the phone for access remove items on the list   */

            const resultsForDeleteProduct = await ProductModel.findByIdAndDelete(id);

      
            if (resultsForDeleteProduct.length <1 ) {
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
                    resultsForDeleteProduct
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
    async put_chooseForBestProduct(req, res, next) {
        try {

        } catch (error) {
            ErrorJsonForm(error, HttpStatus.INTERNAL_SERVER_ERROR, '/UserControllerClass/getListBrandsWithProduct', false);

            next(error)
        }
    }
    /* ***********************************               Brands Area                           **************************** */
    async post_AddBrands(req, res, next) {
        try {
            let location = '/AdminControllerClass/AddBrands';

            const errorValidator = validationResult(req);
            if (!errorValidator) {
                ErrorJsonForm(errorValidator, HttpStatus.NOT_ACCEPTABLE, location, false);
            }

            const { Name, date, Author } = req.body

            const resultCreatedBrands = await BrandsModel.create(Name, date, Author)
            
      
            if (resultCreatedBrands.length <1 ) {
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
                    resultCreatedBrands
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
    async put_chooseForBestProduct(req, res, next) {
        try {

        } catch (error) {
            ErrorJsonForm(error, HttpStatus.INTERNAL_SERVER_ERROR, '/UserControllerClass/getListBrandsWithProduct', false);

            next(error)
        }

    }

    async put_updateListProductIntoBrands(req, res, next) {
        try {
            let location = '/AdminControllerClass/updateListProductBrands';

            const errorValidator = validationResult(req);
            if (!errorValidator) {
                ErrorJsonForm(errorValidator, HttpStatus.NOT_ACCEPTABLE, location, false);
            }

            const { id, ListProduct } = req.body
            const answer = checkExistProduct(ListProduct, ProductModel);
            if (!answer) {
                ErrorJsonForm(answer, HttpStatus.INTERNAL_SERVER_ERROR, location, false);

            }
            const resultUpdateListProductBrands = await BrandsModel.findByIdAndUpdate({ _id: id }, {
                '$push': {
                    'ListProduct': ListProduct
                }
            });

            if (resultUpdateListProductBrands.length <1 ) {
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
                    resultUpdateListProductBrands
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
    async put_enableBrands(req, res, next) {
        try {
            let location = '/AdminControllerClass/put_enableBrands';

            const { id, enableSailing } = req.body
            if (! typeof enableSailing === 'boolean') {
                ErrorJsonForm("the type of numberOfSail is not boolean", HttpStatus.INTERNAL_SERVER_ERROR, location, false);

            }
            const resultUpdateEnableSailingBrands = await BrandsModel.findByIdAndUpdate({ _id: id }, { enableSailing: enableSailing })

            if (resultUpdateEnableSailingBrands.length <1 ) {
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
                    resultUpdateEnableSailingBrands
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
    async Delete_removeBrands(req, res, next) {
        try {

            let location = '/AdminControllerClass/Delete_removeBrands';
            const { id } = req.body;
            if (!typeof id === mongoose.Types.ObjectId) {
                ErrorJsonForm("id is not typeof objectid ", HttpStatus.BAD_REQUEST)
            }

            /* send otp code on the phone for access remove items on the list   */

            const resultsForDeleteProduct = await BrandsModel.findByIdAndDelete(id);

            if (resultsForDeleteProduct.length <1 ) {
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
                    resultsForDeleteProduct
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
    async put_chooseForBestBrands(req, res, next) {
        try {

        } catch (error) {
            ErrorJsonForm(error, HttpStatus.INTERNAL_SERVER_ERROR, '/UserControllerClass/getListBrandsWithProduct', false);

            next(error)
        }
    }
    /* ***********************************               Category Area                           **************************** */

    async post_AddCategory(req, res, next) {
        try {
            let location = '/AdminControllerClass/AddCategory';

            const errorValidator = validationResult(req);
            if (!errorValidator) {
                ErrorJsonForm(errorValidator, HttpStatus.NOT_ACCEPTABLE, location, false);
            }

            const { title, ListProduct } = req.body

            const resultCreateCategory = await CategoryModel.create(title, ListProduct)

            if (resultCreateCategory.length <1 ) {
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
                    resultCreateCategory
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
    async put_updateListProductsIntoCategory(req, res, next) {
        try {
            let location = '/AdminControllerClass/put_updateListProductsCategory';

            const errorValidator = validationResult(req);
            if (!errorValidator) {
                ErrorJsonForm(errorValidator, HttpStatus.NOT_ACCEPTABLE, location, false);
            }

            const { id, ListProduct } = req.body
            const answer = checkExistProduct(ListProduct, ProductModel);
            if (!answer) {
                ErrorJsonForm(answer, HttpStatus.INTERNAL_SERVER_ERROR, location, false);

            }
            const resultUpdateListProductCategory = await CategoryModel.findByIdAndUpdate({ _id: id }, {
                '$push': {
                    'ListProduct': ListProduct
                }
            })
            if (resultUpdateListProductCategory.length <1 ) {
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
                    resultUpdateListProductCategory
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
    async put_enableCategory(req, res, next) {
        try {
            let location = '/AdminControllerClass/put_enableCategory';

            const { id, enableSailing } = req.body
            if (! typeof enableSailing === 'boolean') {
                ErrorJsonForm("the type of numberOfSail is not boolean", HttpStatus.INTERNAL_SERVER_ERROR, location, false);

            }
            const resultUpdateEnableSailingCategory = await CategoryModel.findByIdAndUpdate({ _id: id }, { enableSailing: enableSailing })
          
            if (resultUpdateEnableSailingCategory.length <1 ) {
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
                    resultUpdateEnableSailingCategory
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
    async Delete_removeCategory(req, res, next) {
        try {

            let location = '/AdminControllerClass/Delete_removeCategory';
            const { id } = req.body;
            if (!typeof id === mongoose.Types.ObjectId) {
                ErrorJsonForm("id is not typeof objectid ", HttpStatus.BAD_REQUEST)
            }

            /* send otp code on the phone for access remove items on the list   */

            const resultsForDeleteProduct = await CategoryModel.findByIdAndDelete(id);

            if (resultsForDeleteProduct.length <1 ) {
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
                    resultsForDeleteProduct
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
    async put_chooseForBestCategory(req, res, next) {
        try {

        } catch (error) {
            ErrorJsonForm(error, HttpStatus.INTERNAL_SERVER_ERROR, '/UserControllerClass/getListBrandsWithProduct', false);

            next(error)
        }
    }
} 



module.exports={
    AdminController:new AdminController
}