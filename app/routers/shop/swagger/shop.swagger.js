
/**
 * @swagger
 *  components:
 *          ShopSchemas:
 *             getListProduct :
 *                  type: object
 *             findProductById :
 *                  type: object
 *                  required:
 *                      -   id
 *                  properties :
 *                       id:
 *                          type: string
 *                          description: id for searching in products 
 *             findProductByProductCode :
 *                  type: object
 *                  required:
 *                      -   code
 *                  properties:
 *                       code:
 *                          type: string
 *                          description: code for searching in products 
 *           
 */

/**
 * @swagger
 *  tags:
 *      name : Shop-Section-Products
 *      description : Shop-Section-Products
 */

/**
 * @swagger
 *  /getListProduct:
 *      get:
 *          tags: [Shop-Section-Products]
 *          summary: get All products
 *          description: receive  All products
 *          requestBody:
 *                required: false
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
 *          tags : [Shop-Section-Products]
 *          summary: findProductById
 *          description: findProductById
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ShopSchemas/findProductById'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ShopSchemas/findProductById'
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
 *          tags : [Shop-Section-Products]
 *          summary: find Products By special code 
 *          description: find Products By special code 
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ShopSchemas/findProductByProductCode'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ShopSchemas/findProductByProductCode'
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



