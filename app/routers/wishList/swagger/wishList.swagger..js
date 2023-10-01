/**
 * @swagger
 *  components:
 *          WishListSchemas:
 *             AddWishlist:
 *                  type: object
 *                  required:
 *                      -   id_products
 *                  properties:
 *                      id_products:
 *                          type: string
 *                          description: id products 
 *             DeleteOneProductsWishlist:
 *                  type: object
 *                  required:
 *                      -   id_products
 *                  properties:
 *                      id_products:
 *                          type: string
 *                          description: id products 
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
 *          tags: [WishList-Section-Products]
 *          summary: get List WishList
 *          description: receive  List WishList
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
 * 
 */
/**
 * @swagger
 *  /SendsProductsToBasket:
 *      get:
 *          tags: [WishList-Section-Products]
 *          summary: get List Brands
 *          description: receive  List WishList
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
 * 
 */
/**
 * @swagger
 *  /AddWishlist:
 *      put:
 *          tags : [WishList-Section-Products]
 *          summary : AddWishlist    
 *          description:AddWishlist
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
 *          summary : receive List WishList   
 *          description: receive List WishList
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