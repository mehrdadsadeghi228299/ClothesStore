
/**
 * @swagger
 *  components:
 *         ShopTagsPanel: 
 *            getListTagsWithSpecialChildren :
 *                  type: object 
 *                  required :
 *                      -   name
 *                  properties :
 *                      name :
 *                         type: string
 *                         description: tags name  
 *                   
 */

/**
 * @swagger
 *  tags:
 *      name : Shop-section-Tags
 *      description : Shop-section-Tags
 */

/**
 * @swagger
 *  /getListTags:
 *      get:
 *          tags: [Shop-section-Tags]
 *          summary: Get List Tags
 *          description: Get List Tags
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
 *  /getListTagsWithChild:
 *      get:
 *          tags: [Shop-section-Tags]
 *          summary: get List Tags With Child
 *          description: get List Tags With Child
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
 *  /getListTagsWithSpecialChildren:
 *      post:
 *          tags: [Shop-section-Tags]
 *          summary: get List Tags With Special Children
 *          description:  get  Tags With Special Children
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ShopTagsPanel/getListTagsWithSpecialChildren'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ShopTagsPanel/getListTagsWithSpecialChildren'
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
