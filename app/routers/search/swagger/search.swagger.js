
/**
 * @swagger
 *  components:
 *      SearchSchemas:
 *             searchOnTitle:
 *                  type: object
 *                  required:
 *                      -   text
 *                  properties :
 *                       text:
 *                          type: string
 *                          description: text for searching in title               
 *             post_AddItemIntoBasket:
 *                  type: object
 *                  required:
 *                      -   shortdes
 *                  properties :
 *                       shortdes:
 *                          type: string
 *                          description: shortdes for searching in shortDesorption     
 *             searchOnDescription:
 *                  type: object
 *                  required:
 *                      -   des
 *                  properties :
 *                      des:
 *                          type: string
 *                          description: id for searching in products  
 *         
 */

/**
 * @swagger
 *  tags:
 *      name : Search-Section Products
 *      description : Search-Section Products
 */

/**
 * @swagger
 *  /searchOnTitle:
 *      post:
 *          tags: [Search-Section Products]
 *          summary: search items in  title
 *          description: search items in title
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/SearchSchemas/searchOnTitle'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/SearchSchemas/searchOnTitle'
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
 *  /searchOnShortDescription:
 *      post:
 *          tags: [Search-Section Products]
 *          summary: search items in  ShortDescription
 *          description: search items in ShortDescription
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/SearchSchemas/searchOnShortDescription'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/SearchSchemas/searchOnShortDescription'
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
 *  /searchOnDescription:
 *      post:
 *          tags: [Search-Section Products]
 *          summary: search items in  title
 *          description: search items in title
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/SearchSchemas/searchOnDescription'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/SearchSchemas/searchOnDescription'
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





