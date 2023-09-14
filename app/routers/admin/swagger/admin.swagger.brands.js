/**
 * @swagger
 *  components:
 *          AdminBrandsPanel :       
 *            post_AddBrands:
 *                  type: object
 *                  required :
 *                      -   Name
 *                      -   AuthorName
 *                      -   date
 *                  properties:
 *                       Name :
 *                          type : string
 *                          description: Name of Brands
 *                       AuthorName :
 *                          type : string
 *                          description: AuthorName of Brands
 *                       date :
 *                          type : string
 *                          description: date of Brands
 *            put_chooseForBestProduct :
 *                  type: object
 *              
 *            put_chooseForBestBrands :
 *                   type: object             
 *                   
 *            put_updateListProductIntoBrands :
 *                  type: object
 *                  required :
 *                      -   id
 *                      -   ListProduct
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of Brands
 *                       ListProduct :
 *                          type : string
 *                          description: id of products
 *            put_enableBrands :
 *                  type: object
 *                  required :
 *                      -   id
 *                      -  EnableSelling
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of Brands
 *                       EnableSelling:
 *                          type: boolean
 *                          description: EnableSelling of products
 *            Delete_removeBrands :
 *                  type: object
 *                  required :
 *                      -   id
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of Brands
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
 *  /addBrands:
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
 *  /chooseForBestProduct:
 *      put:
 *          tags: [Admin-Brands-section]
 *          summary: put_chooseForBestProduct
 *          description: put_chooseForBestProduct
 *          requestBody:
 *              required: false
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
 *  /updateListProductIntoBrands:
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
 *  /enableBrands:
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
 *  /removeBrands:
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