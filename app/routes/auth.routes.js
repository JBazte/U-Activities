
module.exports = app => {
    const { registerMember, loginMember }                   = require("../controllers/auth.controller")
    const { validatorLoginMember, validatorRegisterMember } = require("../validators/auth.validators")
    //const {authMiddlewareMember}                                = require("../middleware/session")
    var router = require("express").Router();

    //LOGIN UN MEMBER
    router.post("/login/member", validatorLoginMember, loginMember)

    //REGISTRAR UN MEMBER
    router.post("/register/member", validatorRegisterMember, registerMember)

    app.use('/api/auth', router);
};
