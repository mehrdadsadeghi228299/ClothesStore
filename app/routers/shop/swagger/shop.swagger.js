
/**
 * @swagger
 *  components:
 *      BasketSchemas :
 *              get_ItemsInBasket :
 *                  type: object
 *              
 *              post_AddItemIntoBasket :
 *                  type: object
 *                  required:
 *                      -   productId
 *                      -   countItems
 *                  properties :
 *                       productId:
 *                          type: string
 *                          description: id for searching in products     
 *                       countItems:
 *                          type: number
 *                          description: count items of products in basket
 *              Delete_ItemIntoBasket :
 *                  type: object
 *                  required:
 *                      -   productId
 *                  properties:
 *                       code:
 *                          type: string
 *                          description: productId for searching in products and Deleted
 *          
 *         
 */

/**
 * @swagger
 *  tags:
 *      name : Basket-Section Products
 *      description : Basket-Section Products
 */

/**
 * @swagger
 *  /get_ItemsInBasket:
 *      get:
 *          tags: [Basket-Section Products]
 *          summary: get items in  basket
 *          description: get items in basket
 *          requestBody:
 *              required: false
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/BasketSchemas/get_ItemsInBasket'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/BasketSchemas/get_ItemsInBasket'
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Authorization
 *              500: 
 *                  description: Internal Server Error 
 */


/**
 * @swagger
 *  /post_AddItemIntoBasket:
 *      get:
 *          tags: [Basket-Section Products]
 *          summary: Adding  item in  basket
 *          description: Adding item in basket
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/BasketSchemas/post_AddItemIntoBasket'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/BasketSchemas/post_AddItemIntoBasket'
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Authorization
 *              500: 
 *                  description: Internal Server Error 
 */

/**
 * @swagger
 *  /Delete_ItemIntoBasket:
 *      get:
 *          tags: [Basket-Section Products]
 *          summary: Deleting item in  basket
 *          description: Deleting item in basket
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/BasketSchemas/Delete_ItemIntoBasket'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/BasketSchemas/Delete_ItemIntoBasket'
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Authorization
 *              500: 
 *                  description: Internal Server Error 
 */
