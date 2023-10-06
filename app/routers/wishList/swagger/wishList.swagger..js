/**
 * @swagger
 *  components:
 *     WishListSchemas:
 *         AddWishlist:
 *              type: object
 *              required:
 *                   -   id_products
 *              properties:
 *                     id_products:
 *                         type: string
 *                         description: id products 
 *         DeleteOneProductsWishlist:
 *              type: object
 *              required:
 *                   -   id_products
 *              properties:
 *                     id_products:
 *                         type: string
 *                         description: id products 
 *      
 */
/**
 * @swagger
 *  tags:
 *      name : WishList-Section-Products
 *      description : WishList-Section-Products
 */

/** 
* @swagger
*  /getWishlist:
*      get:
*          tags : [WishList-Section-Products]
*          summary: findProductById
*          description: findProductById
*          requestBody:
*              required: false
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
*  /SendsProductsToBasket:
*      get:
*          tags : [WishList-Section-Products]
*          summary: findProductById
*          description: findProductById
*          requestBody:
*              required: false
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
 *  /AddWishlist:
 *      post:
 *          tags : [WishList-Section-Products]
 *          summary: findProductById
 *          description: findProductById
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/WishListSchemas/AddWishlist'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/WishListSchemas/AddWishlist'
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
 *  /DeleteOneProductsWishlist:
 *      delete:
 *          tags : [WishList-Section-Products]
 *          summary: findProductById
 *          description: findProductById
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/WishListSchemas/DeleteOneProductsWishlist'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/WishListSchemas/DeleteOneProductsWishlist'
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
