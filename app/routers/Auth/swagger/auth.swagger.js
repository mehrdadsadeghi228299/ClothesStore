
/**
 * @swagger
 *  components:
 *      UserAuthSchemas:
 *          signup:
 *              type: object
 *              required:
 *                  -   userName
 *                  -   lastName 
 *                  -   email
 *                  -   mobile 
 *                  -   name
 *                  -   password
 *              properties:
 *                  userName:
 *                      type: string
 *                      description: the user mobile for signup/signup  
 *                  lastName:
 *                      type: string
 *                      description: the user mobile for signup/signup 
 *                  email:
 *                      type: string
 *                      description: the user mobile for signup/signup 
 *                  mobile:
 *                      type: number
 *                      description: the user mobile for signup/signup 
 *                  name:
 *                      type: string
 *                      description: the user mobile for signup/signup
 *                  password:
 *                      type: string
 *                      description: the user mobile for signup/signup
 *          checkIsModifyAndSendCodeAccount:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 *                      description: the user id for checkIsModifyAndSendCodeAccount
 *          checkIsModifyAndGetCodeAccount:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   codeOTP
 *              properties:
 *                  mobile:
 *                      type: string
 *                      description: the user mobile for signup/signin
 *                  codeOTP:
 *                      type: integer
 *                      description: received code from getOTP 
 *          CheckRefreshTokenAndCreatedAccessToken:
 *              type: object
 *              required:
 *                  -   refreshToken
 *              properties:
 *                  refreshToken:
 *                      type: string
 *                      description: enter refresh-token for get fresh token and refresh-token
 */

/**
 * @swagger
 *  tags:
 *      name : User-Authentication
 *      description : user-auth section
 */

/**
 * @swagger
 *  /user/signup:
 *      post:
 *          tags: [User-Authentication]
 *          summary: login user in userpanel with phone number
 *          description: one time password(OTP) login
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/UserAuthSchemas/signup'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/UserAuthSchemas/signup'
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
 *  /user/modifyaccount:
 *      post:
 *          tags : [User-Authentication]
 *          summary: check-otp value in user controller
 *          description: check otp with code- mobile and expires date
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/UserAuthSchemas/checkIsModifyAndSendCodeAccount'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/UserAuthSchemas/checkIsModifyAndSendCodeAccount'
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
 *  /user/CheckRefreshTokenAndCreatedAccessToken:
 *      post:
 *          tags: [User-Authentication]
 *          summary: send refresh token for get new token and refresh token
 *          description : fresh token
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/UserAuthSchemas/CheckRefreshTokenAndCreatedAccessToken'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/UserAuthSchemas/CheckRefreshTokenAndCreatedAccessToken'
 *          responses:
 *              200:
 *                  description : success
 */