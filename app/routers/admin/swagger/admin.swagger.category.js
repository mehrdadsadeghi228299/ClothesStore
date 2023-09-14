
/**
 * @swagger
 *  components:
 *         AdminCategoryPanel: 
 *            post_AddCategory:
 *                  type: object
 *                  required :
 *                      -   title
 *                      -   ListProduct
 *                  properties:
 *                       title :
 *                          type : string
 *                          description: title of products
 *                       ListProduct :
 *                          type : object
 *                          description: List Products of product 
 *            put_updateListProductsIntoCategory :
 *                  type: object
 *                  required :
 *                      -   id
 *                      -   ListProduct
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of products
 *                       ListProduct :
 *                          type : string
 *                          description: id of products
 *            put_enableCategory :
 *                  type: object
 *                  required :
 *                      -   id
 *                      -  isAvailable
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of products
 *                       isAvailable:
 *                          type: boolean
 *                          description: isAvailable of products
 *            Delete_removeCategory :
 *                  type: object
 *                  required :
 *                      -   id
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of products
 *            put_chooseForBestCategory :
 *                  type: object             
 *         
 *                  
 *                         
 */

/**
 * @swagger
 *  tags:
 *      name : Admin-section-Category
 *      description : Admin-section-Category
 */


/**
 * @swagger
 *  /post_AddCategory:
 *      post:
 *          tags: [Admin-section-Category]
 *          summary: Add Category 
 *          description: Add Category 
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/post_AddCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/post_AddCategory'
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
 *  /put_updateListProductsIntoCategory:
 *      put:
 *          tags: [Admin-section-Category]
 *          summary: put_chooseForBestProduct
 *          description: put_chooseForBestProduct
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/put_updateListProductsIntoCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/put_updateListProductsIntoCategory'
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
 *  /put_enableCategory:
 *      put:
 *          tags: [Admin-section-Category]
 *          summary: put_enableCategory
 *          description: put_enableCategory
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/put_enableCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/put_enableCategory'
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
 *  /put_chooseForBestCategory:
 *      put:
 *          tags: [Admin-section-Category]
 *          summary: put_chooseForBestCategory
 *          description: put_chooseForBestCategory
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/put_chooseForBestCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/put_chooseForBestCategory'
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
 *  /Delete_removeCategory:
 *      delete:
 *          tags: [Admin-section-Category]
 *          summary: Delete_removeCategory
 *          description: Delete_removeCategory
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/Delete_removeCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminCategoryPanel/Delete_removeCategory'
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


