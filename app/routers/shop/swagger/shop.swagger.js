
/**
 * @swagger
 *  components:
 *      schemas:
 *            Shop:
 *              type: object
 *             
 *              getListProduct:
 *                  type: object
 *              
 *              findProductById:
 *                  type: object
 *                  required:
 *                      -   id
 *                  properties:
 *                       id:
 *                          type: string
 *                          description: id for searching in products 
 *              findProductByProductCode:
 *                  type: object
 *                  required:
 *                      -   code
 *                  properties:
 *                       code:
 *                          type: string
 *                          description: code for searching in products 
 *          
 *              getListCategory:
 *                  type: object
 * 
 *              getListCategoryWithProduct:
 *                  type: object
 * 
 *              getListCategoryWithSpecialChildren:
 *                  type: object
 *                  required:
 *                      -   titleCategory
 *                  properties:
 *                       titleCategory:
 *                          type: string
 *                          description: titleCategory for searching in Category 
 *              
 
 *              getListBrands:
 *                  type: object
 *              getListBrandsWithProduct:
 *                  type: object
 *              getListBrandsWithSpecialChildren:
 *                  type: object
 *                  required:
 *                      -   nameBrands
 *                  properties:
 *                       nameBrands:
 *                          type: string
 *                          description: name of Brands for searching in Brands 
 *      
 */

/**
 * @swagger
 *  tags:
 *      name : Shop-Section Products
 *      description : Shop-Section Products
 */

/**
 * @swagger
 *  /getListProduct:
 *      get:
 *          tags: [Shop-Section Products]
 *          summary: get All products
 *          description: receive  All products
 *          requestBody:
 *              required: false
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/getListProduct'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/getListProduct'
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */


/**
 * @swagger
 *  /findProductById/:
 *      post:
 *          tags : [Shop-Section Products]
 *          summary: findProductById
 *          description: findProductById
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/findProductById'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/findProductById'
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */
/**
 * @swagger
 *  /user/check-otp:
 *      post:
 *          tags : [User-Authentication]
 *          summary: chack-otp value in user controller
 *          description: chack otp with codce- mobile and expires date
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/CheckOTP'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/CheckOTP'
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */
/**
 * @swagger
 *  /user/refresh-token:
 *      post:
 *          tags: [User-Authentication]
 *          summary: send refresh token ffor get new token and refresh token
 *          description : fresh token
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/RefreshToken'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/RefreshToken'
 *          responses:
 *              200:
 *                  description : success
 */