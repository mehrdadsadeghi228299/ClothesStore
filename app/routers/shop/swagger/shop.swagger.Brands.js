

/**
 * @swagger
 *  components:
 *          ShopBrandsSchemas:
 *             getListBrands:
 *                  type: object
 *             getListBrandsWithProduct:
 *                  type: object
 *             getListBrandsWithSpecialChildren:
 *                  type: object
 *                  required:
 *                      -   nameBrands
 *                  properties:
 *                       nameBrands:
 *                          type: string
 *                          description: name of Brands for searching in Brands 
 *      
 */

/**
 * @swagger
 *  tags:
 *      name : Shop-Section-Products-Brands
 *      description : Shop-Section-Products-Brands
 */

/**
 * @swagger
 *  /getListBrands:
 *      get:
 *          tags: [Shop-Section-Products-Brands]
 *          summary: get List Brands
 *          description: receive  List Brands
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
 *  /getListBrandsWithProduct:
 *       get:
 *          tags : [Shop-Section-Products-Brands]
 *          summary : get List Brands With Product
 *          description: get List Brands  With Product
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
 *  /getListBrandsWithSpecialChildren:
 *      post:
 *          tags : [Shop-Section-Products-Brands]
 *          summary : receive List Brands   
 *          description: receive List Brands With Special Children
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ShopBrandsSchemas/getListBrandsWithSpecialChildren'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ShopBrandsSchemas/getListBrandsWithSpecialChildren'
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