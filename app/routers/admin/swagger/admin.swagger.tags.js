
/**
 * @swagger
 *  components:
 *         AdminTagsPanel: 
 *            post_addTags:
 *                  type: object 
 *                  required :
 *                      -   name
 *                  properties :
 *                      name :
 *                          type : string
 *              
 *            put_updateListProductsIntoTags :
 *                  type: object
 *                  required :
 *                      -   id
 *                      -   ListProduct
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of Tags
 *                       ListProduct :
 *                          type : string
 *                          description: id of products
 *            Delete_removeTags :
 *                  type: object
 *                  required :
 *                      -   id
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of Tags                     
 */

/**
 * @swagger
 *  tags:
 *      name : Admin-section-Tags
 *      description : Admin-section-Tags
 */


/**
 * @swagger
 *  /addTags:
 *      post:
 *          tags: [Admin-section-Tags]
 *          summary: Add Tags
 *          description: Add Tags
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminTagsPanel/post_addTags'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminTagsPanel/post_addTags'
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
 *  /updateListProductsIntoTags:
 *       put:
 *          tags: [Admin-section-Tags]
 *          summary: update List Products Into Tags
 *          description: update List Products Into Tags
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminTagsPanel/put_updateListProductsIntoTags'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminTagsPanel/put_updateListProductsIntoTags'
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
 *  /removeTags:
 *      delete:
 *          tags: [Admin-section-Tags]
 *          summary: remove Tags
 *          description: remove Tags
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminTagsPanel/Delete_removeTags'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminTagsPanel/Delete_removeTags'
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
