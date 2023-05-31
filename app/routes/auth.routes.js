
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
    router.post("/login/member", validatorLoginMember, loginMember)

    //REGISTRAR UN MEMBER
    router.post("/register/member", validatorRegisterMember, registerMember, preferences.create)

    //REGISTAR UN ADMIN
    router.post("/register/admin", validatorCreateAdministrator, registerAdmin)

    //LOGIN DEL SPONSOR
    router.post("/login/sponsor", validatorLoginSponsor, loginSponsor)

    //REGISTAR UN SPONSOR
    router.post("/register/sponsor", authMiddlewareAdministrator, validatorCreateSponsor, registerSponsor)

    //DAR DE BAJA UN SPONSOR
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