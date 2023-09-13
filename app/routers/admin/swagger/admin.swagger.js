
/**
 * @swagger
 *  components:
 *      AdminPanel : 
 *             post_AddProduct :
 *                  type: object
 *                  required:
 *                      -   Name
 *                      -   title
 *                      -   brand_id
 *                      -   tags
 *                      -   categoryFatherId
 *                      -   images
 *                      -   shortDescription
 *                      -   Description
 *                      -   productCode
 *                      -   size
 *                      -   color
 *                      -   price
 *                      -   count
 *                      -   numberOfSail
 *                      -   isModify
 *                      -   isAvailable
 *                      -   showing
 *                      -   pageView
 *                      -   features
 *                  properties :
 *                       Name:
 *                          type: string
 *                          description: Name of products
 *                       title:
 *                          type: string
 *                          description: title of products
 *                       brand_id:
 *                          type: string
 *                          description: brand_id of products
 *                       tags:
 *                          type: array
 *                          description: tags 
 *                       categoryFatherId:
 *                          type: string
 *                          description: categoryFatherId of products
 *                       images:
 *                          type: string
 *                          description: images of  products
 *                       shortDescription:
 *                          type: string
 *                          description: shortDescription of  products
 *                       Description:
 *                          type: string
 *                          description: Description of products
 *                       productCode:
 *                          type: number
 *                          description: productCode of  products
 *                       size:
 *                          type: array
 *                          description: size of  products
 *                       price:
 *                          type: number
 *                          description: price of products
 *                       count:
 *                          type: number
 *                          description: count of  products
 *                       numberOfSail:
 *                          type: number
 *                          description: number Of Sail  products
 *                       isModify:
 *                          type: boolean
 *                          description: isModify products
 *                       isAvailable:
 *                          type: boolean
 *                          description: isAvailable products
 *                       showing:
 *                          type: boolean
 *                          description: showing of products
 *                       pageView:
 *                          type: object
 *                          description: pageView of products 
 *                       features:
 *                          type: object
 *                          description: features of  products         
 *             put_enableProduct :
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
 *            Delete_removeProduct:
 *                  type: object
 *                  required :
 *                      -   id
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of products
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
 *             put_updateListProductsIntoCategory :
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
 *             put_enableCategory :
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
 *             Delete_removeCategory :
 *                  type: object
 *                  required :
 *                      -   id
 *                  properties:
 *                       id :
 *                          type : string
 *                          description: id of products
 *             put_chooseForBestCategory :
 *                  type: object             
 *         
 *                  
 *                         
 */

/**
 * @swagger
 *  tags:
 *      name : Admin-section
 *      description : Admin-section
 */

/**
 * @swagger
 *  /post_AddProduct:
 *      post:
 *          tags: [Admin-section]
 *          summary: Add All products
 *          description: Add  All products
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/post_AddProduct'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/post_AddProduct'
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
 *  /put_enableProduct:
 *      put:
 *          tags: [Admin-section]
 *          summary: enable Product
 *          description: enable Product
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_enableProduct'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_enableProduct'
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
 *  /Delete_removeProduct:
 *      delete:
 *          tags: [Admin-section]
 *          summary: removeProduct
 *          description: removeProduct
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/Delete_removeProduct'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/Delete_removeProduct'
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
 *  /put_chooseForBestBrands:
 *      put:
 *          tags: [Admin-section]
 *          summary: put_chooseForBestBrands
 *          description: put_chooseForBestBrands
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_chooseForBestBrands'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_chooseForBestBrands'
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
 *  /post_AddCategory:
 *      post:
 *          tags: [Admin-section]
 *          summary: Add Category 
 *          description: Add Category 
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/post_AddCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/post_AddCategory'
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
 *          tags: [Admin-section]
 *          summary: put_chooseForBestProduct
 *          description: put_chooseForBestProduct
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_updateListProductsIntoCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_updateListProductsIntoCategory'
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
 *          tags: [Admin-section]
 *          summary: put_enableCategory
 *          description: put_enableCategory
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_enableCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_enableCategory'
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
 *          tags: [Admin-section]
 *          summary: put_chooseForBestCategory
 *          description: put_chooseForBestCategory
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_chooseForBestCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/put_chooseForBestCategory'
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
 *          tags: [Admin-section]
 *          summary: Delete_removeCategory
 *          description: Delete_removeCategory
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/Delete_removeCategory'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminPanel/Delete_removeCategory'
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


