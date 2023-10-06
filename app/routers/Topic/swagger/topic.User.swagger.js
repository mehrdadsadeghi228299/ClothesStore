/**
 * @swagger
 *  components:
 *     TopicUserSchemas:
 *         getSpecificTopic:
 *            type: object
 *            required:
 *                  -   name
 *            properties:
 *               name:
 *                  type: string
 *                  description: name Topic  
 *      
 */
/**
 * @swagger
 *  tags:
 *      name : Topic-Section-Products
 *      description : Topic-Section-Products
 */

/**
 * @swagger
 *  /getAllTopic:
 *      get:
 *          tags: [Topic-Section-Products]
 *          summary: get List Topic
 *          description: receive  List Topic
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
 *  /getSpecificTopic:
 *      post:
 *          tags : [Topic-Section-Products]
 *          summary: findProductById
 *          description: findProductById
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/TopicUserSchemas/getSpecificTopic'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/TopicUserSchemas/getSpecificTopic'
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