
module.exports = app => {
    const express = require("express")
    const { registerMember, loginMember, registerAdmin, registerSponsor, loginSponsor }                   = require("../controllers/auth.controller")
    const { validatorLoginMember, validatorRegisterMember, validatorLoginSponsor } = require("../validators/auth.validators")
    const preferences = require("../controllers/preferences.controller")
    const { validatorCreateAdministrator } = require("../validators/administrators.validators")
    const { validatorCreateSponsor, validatorGetSponsor } = require("../validators/sponsors.validators")
    const sponsors = require("../controllers/sponsors.controller")
    const { authMiddlewareAdministrator, authMiddlewareSponsor } = require("../middleware/session")
    //const {authMiddlewareMember}                            = require("../middleware/session")
    var router = express.Router();

    //LOGIN UN MEMBER
    /**
     * @openapi
     * /api/auth/login/member:
     *  post:
     *      tags:
     *      - Registered User
     *      summary: Login to your user
     *      description: ''
     *      responses:
     *          '200':
     *              description: Get your user
     *          '403':
     *              description: Errors in parameters or not found user
     *          '500':
     *              description: Server error
     */
    router.post("/login/member", validatorLoginMember, loginMember)

    //REGISTRAR UN MEMBER
    /**
     * @openapi
     * /api/auth/register/member:
     *  post:
     *      tags:
     *      - Not Registered User
     *      summary: Create a user
     *      description: 'It will create a user and also the preferences of that user'
     *      responses:
     *          '200':
     *              description: Get the user edited
     *          '403':
     *              description: Errors in parameters or already used uniques
     *          '500':
     *              description: Server error
     */
    router.post("/register/member", validatorRegisterMember, registerMember, preferences.create)

    //REGISTAR UN ADMIN
    router.post("/register/admin", validatorCreateAdministrator, registerAdmin)

    //LOGIN DEL SPONSOR
    /**
     * @openapi
     * /api/auth/login/sponsor:
     *  post:
     *      tags:
     *      - Sponsor
     *      summary: Login to your sponsor
     *      description: ''
     *      responses:
     *          '200':
     *              description: Get your sponsor
     *          '403':
     *              description: Errors in parameters or not found sponsor
     *          '500':
     *              description: Server error
     */
    router.post("/login/sponsor", validatorLoginSponsor, loginSponsor)

    //REGISTAR UN SPONSOR
    /**
     * @openapi
     * /api/auth/register/sponsor:
     *  post:
     *      tags:
     *      - Administrator
     *      summary: An admin registers a sponsor
     *      description: 'A verified jwt admin registers a sponsor in db, which will return the jwt from sponsor'
     *      responses:
     *          '200':
     *              description: Register a sponsor
     *          '403':
     *              description: Errors in parameters or invalid parameters of sponsor
     *          '500':
     *              description: Server error
     *      security:
     *          - bearerAuth: []
     */
    router.post("/register/sponsor", authMiddlewareAdministrator, validatorCreateSponsor, registerSponsor)

    //DAR DE BAJA UN SPONSOR
    /**
     * @openapi
     * /api/auth/delete/sponsor/{id}:
     *  delete:
     *      tags:
     *      - Administrator
     *      summary: An admin deletes a sponsor
     *      description: 'A verified jwt admin deletes a sponsor in db'
     *      parameters:
    *          -   name: id
    *              in: path
    *              description: id that need to be deleted in sponsors table
    *              required: true
    *              schema:
    *                  type: string
     *      responses:
     *          '200':
     *              description: Delete a sponsor
     *          '403':
     *              description: Errors in parameters or not found sponsor
     *          '500':
     *              description: Server error
     *      security:
     *          - bearerAuth: []
     */
    router.delete("/delete/sponsor/:id", authMiddlewareAdministrator, validatorGetSponsor, sponsors.deleteOne)

    //Un sponsor deberá tener acceso a los usuarios inscritos a una actividad
    //router.get("/sponsor/members/idActivity", authMiddlewareSponsor, )

    app.use('/api/auth', router);
};
/*
const { registerMember, loginMember }                   = require("../controllers/auth.controller")
const { validatorLoginMember, validatorRegisterMember } = require("../validators/auth.validators")
//const {authMiddlewareMember}                            = require("../middleware/session")
var router = require("express").Router();

//LOGIN UN MEMBER
router.post("/login/member", validatorLoginMember, loginMember)

//REGISTRAR UN MEMBER
router.post("/register/member", validatorRegisterMember, registerMember)

module.exports = router*/