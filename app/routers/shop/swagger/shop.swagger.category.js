


/**
 * @swagger
 *  components:
 *          ShopCategorySchemas:
 *             getListCategory:
 *                  type: object
 *             getListCategoryWithProduct:
 *                  type: object
 *             getListCategoryWithSpecialChildren:
 *                  type: object
 *                  required:
 *                      -   titleCategory
 *                  properties:
 *                       titleCategory:
 *                          type: string
 *                          description: titleCategory for searching in Category 

 */


/**
 * @swagger
 *  tags:
 *      name : Shop-Section-Products-Category
 *      description : Shop-Section-Products
 */



/**
 * @swagger
 *  /getListCategory:
 *      get:
 *          tags: [Shop-Section-Products-Category]
 *          summary: get All Category
 *          description: receive  All Category
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
 *  /getListCategoryWithProduct:
 *      get:
 *          tags : [Shop-Section-Products-Category]
 *          summary: get List Category With Product
 *          description: get List Category With Product
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
 *  /getListCategoryWithSpecialChildren:
 *      post:
 *          tags : [Shop-Section-Products-Category]
 *          summary : receive List Category With Special Children  
 *          description: receive List Category With Special Children
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ShopCategorySchemas/getListCategoryWithSpecialChildren'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ShopCategorySchemas/getListCategoryWithSpecialChildren'
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