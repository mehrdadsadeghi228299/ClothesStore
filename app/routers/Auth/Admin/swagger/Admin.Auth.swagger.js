
/**
 * @swagger
 *  components:
 *      AdminAuthSchemas:
 *         AddAdmin:
 *            type: object
 *            required:
 *                -   userName
 *                -   email
 *                -   mobile 
 *                -   password
 *            properties:
 *                userName:
 *                    type: string
 *                    description: the user mobile for signup/signup  
 *                email:
 *                    type: string
 *                    description: the user mobile for signup/signup 
 *                mobile:
 *                    type: number
 *                    description: the user mobile for signup/signup 
 *                password:
 *                    type: string
 *                    description: the user mobile for signup/signup
 *         SendsMobileCodeAdmin:
 *            type: object       
 *            required:
 *                -   username
 *            properties:
 *                username:
 *                    type: string
 *                    description: the username  for SendsMobileCodeAdmin
 *         getVerifyMobileAdmin:
 *            type: object
 *            required:
 *                -   username
 *                -   userCode
 *            properties:
 *                username:
 *                    type: string
 *                    description: the user id for checkIsModifyAndSendCodeAccount
 *                userCode:
 *                    type: string
 *                    description: the user id for checkIsModifyAndSendCodeAccount
 *         SendsVerifyEmailAdmin:
 *            type: object       
 *            required:
 *                -   username
 *            properties:
 *                username:
 *                    type: string
 *                    description: the username  for SendsVerifyEmailAdmin
 *         getVerifyEmailCode:
 *            type: object
 *            required:
 *                -   username
 *                -   codeEmails
 *            properties:
 *                username:
 *                    type: string
 *                    description: the Admin for getVerifyEmailCode
 *                codeEmails:
 *                    type: string
 *                    description: the Admin for getVerifyEmailCode
 *         DeleteAdmin:
 *            type: object
 *            required:
 *                -  id
 *            properties:
 *                id:
 *                    type: string
 *                    description: the Admin id for DeleteAdmin
 *         VerifyAdmin:
 *            type: object
 *            required:
 *                -   username
 *            properties:
 *                username :
 *                    type: string
 *                    description: the user id for checkIsModifyAndSendCodeAccount
 *         loginAdmin:
 *            type: object
 *            required:
 *                -   username
 *                -   pass
 *            properties:
 *                username :
 *                    type: string
 *                    description: the user mobile for login
 *                pass :
 *                    type: string
 *                    description: received code from login 
 *         changePasswordAdmin:
 *            type: object
 *            required:
 *                -   username
 *                -   newPass
 *                -   code
 *            properties:
 *                username :
 *                    type: string
 *                    description: the user mobile for changePasswordAdmin
 *                newPass :
 *                    type: string
 *                    description: the user mobile for changePasswordAdmin
 *                code :
 *                    type: string
 *                    description: received code from changePasswordAdmin
 *             
 */

/**
 * @swagger
 *  tags:
 *      name : Admin-Authentication
 *      description : Admin-auth section
 */

/**
 * @swagger
 *  /manager/AddAdmin:
 *      post:
 *          tags: [Admin-Authentication]
 *          summary: login user in Admin-Authentication with phone number
 *          description: Admin panel
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/AddAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/AddAdmin'
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
 *  /manager/loginAdmin:
 *      post:
 *          tags: [Admin-Authentication]
 *          summary: loginAdmin in Admin-Authentication 
 *          description: Admin panel
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/loginAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/loginAdmin'
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
 *  /manager/SendsMobileCodeAdmin:
 *      put:
 *          tags: [Admin-Authentication]
 *          summary: SendsMobileCodeAdmin in Admin-Authentication with phone number
 *          description: Admin panel
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/SendsMobileCodeAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/SendsMobileCodeAdmin'
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
 *  /manager/getVerifyMobileAdmin:
 *      put:
 *          tags: [Admin-Authentication]
 *          summary: getVerifyMobileAdmin user in Admin-Authentication with phone number
 *          description: Admin panel
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/getVerifyMobileAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/getVerifyMobileAdmin'
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
 *  /manager/SendsVerifyEmailAdmin:
 *      put:
 *          tags: [Admin-Authentication]
 *          summary: SendsVerifyEmailAdmin user in Admin-Authentication 
 *          description: Admin panel
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/SendsVerifyEmailAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/SendsVerifyEmailAdmin'
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
 *  /manager/getVerifyEmailCode:
 *      put:
 *          tags: [Admin-Authentication]
 *          summary: getVerifyEmailCode in Admin-Authentication 
 *          description: Admin panel
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/getVerifyEmailCode'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/getVerifyEmailCode'
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
 *  /manager/VerifyAdmin:
 *      put:
 *          tags: [Admin-Authentication]
 *          summary: VerifyAdmin in Admin-Authentication 
 *          description: Admin panel
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/VerifyAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/VerifyAdmin'
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
 *  /manager/DeleteAdmin:
 *      delete:
 *          tags: [Admin-Authentication]
 *          summary: DeleteAdmin in Admin-Authentication 
 *          description: Admin panel
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/DeleteAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/DeleteAdmin'
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
 *  /manager/changePasswordAdmin:
 *      put:
 *          tags : [User-Authentication]
 *          summary: changePasswordAdmin in admin-panel 
 *          description: Admin panel 
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/UserAuthSchemas/changePasswordAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/UserAuthSchemas/changePasswordAdmin'
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
