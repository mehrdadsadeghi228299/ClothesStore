
/**
 * @swagger
 *  components:
 *      schemas :
 *            Shop :
 *              type: object
 *             
 *              getListProduct :
 *                  type: object
 *              
 *              findProductById :
 *                  type: object
 *                  required:
 *                      -   id
 *                  properties :
 *                       id:
 *                          type: string
 *                          description: id for searching in products 
 *              findProductByProductCode :
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
 *
 *              getListBrands:
 *                  type: object
 *              getListBrandsWithProduct:
 *                  type: object
 * 
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
 *  /findProductById:
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
 *  /findProductByProductCode:
 *      post:
 *          tags : [Shop-Section Products]
 *          summary: find Products By special code 
 *          description: find Products By special code 
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/findProductByProductCode'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/findProductByProductCode'
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
 *  /getListCategory:
 *      get:
 *          tags: [Shop-Section Products]
 *          summary: get All Category
 *          description: receive  All Category
 *          requestBody:
 *              required: false
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/getListCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/getListCategory'
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
 *  /getListCategoryWithProduct:
 *      get:
 *          tags : [Shop-Section Products]
 *          summary: get List Category With Product
 *          description: get List Category With Product
 *          requestBody:
 *              required: false
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/getListCategoryWithProduct'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/getListCategoryWithProduct'
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
 *  /getListCategoryWithSpecialChildren:
 *      post:
 *          tags : [Shop-Section Products]
 *          summary : receive List Category With Special Children  
 *          description: receive List Category With Special Children
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/getListCategoryWithSpecialChildren'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/getListCategoryWithSpecialChildren'
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
 *  /getListBrands:
 *      get:
 *          tags: [Shop-Section Products]
 *          summary: get List Brands
 *          description: receive  List Brands
 *          requestBody:
 *              required: false
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/getListBrands'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/getListBrands'
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 * 
 */


/**
 * @swagger
 *  /getListBrandsWithProduct:
 *       get:
 *          tags : [Shop-Section Products]
 *          summary : get List Brands With Product
 *          description: get List Brands  With Product
 *          requestBody:
 *              required: false
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/getListBrandsWithProduct'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/getListBrandsWithProduct'
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
 *  /getListBrandsWithSpecialChildren:
 *      post:
 *          tags : [Shop-Section Products]
 *          summary : receive List Brands   
 *          description: receive List Brands With Special Children
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/getListBrandsWithSpecialChildren'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/getListBrandsWithSpecialChildren'
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