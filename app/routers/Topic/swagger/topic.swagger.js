/**
 * @swagger
 *  components:
 *     TopicSchemas:
 *        CreateTopic:
 *           type: object
 *           required:
 *              -   name
 *           properties:
 *              name:
 *                 type: string
 *                 description: name Topic 
 *        pushIntoTopic:
 *           type: object
 *           required:
 *              -   name
 *              -   productsId
 *           properties:
 *              name:
 *                 type: string
 *                 description: name Topic 
 *              productsId:
 *                 type: string
 *                 description: products id 
 *        DeleteProductsInTopic:
 *           type: object
 *           required:
 *              -   name
 *              -   productsId
 *           properties:
 *              name:
 *                 type: string
 *                 description: name Topic 
 *              productsId:
 *                 type: string
 *                 description:  products id
 *      
 */

/**
 * @swagger
 *  tags:
 *      name : Topic-Admin-Section
 *      description : Topic-Admin-Section
 */


/**
 * @swagger
 *  /pushIntoTopic:
 *      put:
 *          tags :  [Topic-Admin-Section]
 *          summary: findProductById
 *          description: findProductById
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/TopicSchemas/pushIntoTopic'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/TopicSchemas/pushIntoTopic'
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
 *  /DeleteProductsInTopic:
 *      delete:
 *          tags :  [Topic-Admin-Section]
 *          summary: findProductById
 *          description: findProductById
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/TopicSchemas/DeleteProductsInTopic'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/TopicSchemas/DeleteProductsInTopic'
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
 *  /CreateTopic:
 *      post:
 *          tags :  [Topic-Admin-Section]
 *          summary: findProductById
 *          description: findProductById
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/TopicSchemas/CreateTopic'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/TopicSchemas/CreateTopic'
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