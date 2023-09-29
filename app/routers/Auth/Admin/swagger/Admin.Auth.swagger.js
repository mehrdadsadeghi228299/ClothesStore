
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
 *         getVerifyMobileAdmin:
 *            type: object
 *            required:
 *                -   userCode
 *            properties:
 *                userCode:
 *                    type: string
 *                    description: the user id for checkIsModifyAndSendCodeAccount
 *         getVerifyEmailCode:
 *            type: object
 *            required:
 *                -   codeEmails
 *            properties:
 *                codeEmails:
 *                    type: string
 *                    description: the Admin for getVerifyEmailCode
 *         loginAdmin:
 *            type: object
 *            required:
 *                -   username
 *                -   pass
 *            properties:
 *                username :
 *                    type: string
 *                    description: the Admin mobile for login
 *                pass :
 *                    type: string
 *                    description: received code from login 
 *         requestChangePasswordAdmin:
 *            type: object
 *            required:
 *                -   username
 *            properties:
 *                username :
 *                    type: string
 *                    description: the user id for requestChangePasswordAdmin
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
 *      get:
 *          tags: [Admin-Authentication]
 *          summary: SendsMobileCodeAdmin in Admin-Authentication with phone number
 *          description: Admin panel
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
 *      get:
 *          tags: [Admin-Authentication]
 *          summary: SendsVerifyEmailAdmin user in Admin-Authentication 
 *          description: Admin panel
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
 *      get:
 *          tags: [Admin-Authentication]
 *          summary: VerifyAdmin in Admin-Authentication 
 *          description: Admin panel
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
 *  /manager/requestChangePasswordAdmin:
 *      put:
 *          tags: [Admin-Authentication]
 *          summary: getVerifyEmailCode in Admin-Authentication 
 *          description: Admin panel
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/requestChangePasswordAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/requestChangePasswordAdmin'
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
 *          tags : [Admin-Authentication]
 *          summary: changePasswordAdmin in admin-panel 
 *          description: Admin panel 
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/changePasswordAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/AdminAuthSchemas/changePasswordAdmin'
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
 *          summary: Delete Admin 
 *          description: Admin panel
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
 *  /manager/logout:
 *      get:
 *          tags: [Admin-Authentication]
 *          summary: LogOut
 *          description: LogOut
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