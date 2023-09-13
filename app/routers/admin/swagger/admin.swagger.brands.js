

/**
 * @swagger
 *  components:
 *      AdminBrandsPanel :       
 *             post_AddBrands:
 *                  type: object
 *                  required :
 *                      -   Name
 *                      -   Author
 *                      -   date
 *                  properties:
 *                       Name :
 *                          type : string
 *                          description: id of products
 *                       Author :
 *                          type : object
 *                          description: id of products
 *                       date :
 *                          type : string
 *                          description: id of products
 *              put_chooseForBestProduct :
 *                  type: object
 *              
 *             put_chooseForBestBrands :
 *                   type: object             
 *                   
 *              put_updateListProductIntoBrands :
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
 *             put_enableBrands :
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
 *             Delete_removeBrands :
 *                  type: object
 *                  required :
 *                      -   id
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of products
 * 
 * 
 * */



/**
 * @swagger
 *  tags:
 *      name : Admin-Brands-section
 *      description : Admin-Brands-section
 */


/**
 * @swagger
 *  /post_AddBrands:
 *      post:
 *          tags: [Admin-Brands-section]
 *          summary: Add Brands 
 *          description: Add Brands 
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/post_AddBrands'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/post_AddBrands'
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
 *  /put_chooseForBestProduct:
 *      put:
 *          tags: [Admin-Brands-section]
 *          summary: put_chooseForBestProduct
 *          description: put_chooseForBestProduct
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/put_chooseForBestProduct'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/put_chooseForBestProduct'
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
 *  /put_updateListProductIntoBrands:
 *      put:
 *          tags: [Admin-Brands-section]
 *          summary: put_updateListProductIntoBrands
 *          description: put_updateListProductIntoBrands
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/put_updateListProductIntoBrands'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/put_updateListProductIntoBrands'
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
 *  /put_enableBrands:
 *      put:
 *          tags: [Admin-Brands-section]
 *          summary: put_enableBrands
 *          description: put_enableBrands
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/put_enableBrands'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/put_enableBrands'
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
 *  /Delete_removeBrands:
 *      delete:
 *          tags: [Admin-Brands-section]
 *          summary: Delete_removeBrands
 *          description: Delete_removeBrands
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/Delete_removeBrands'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminBrandsPanel/Delete_removeBrands'
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