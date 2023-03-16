const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateMember = [
    check("first_name").exists().notEmpty(),
    check("last_name").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail,
    check("password").exists().notEmpty(),
    check("phone").exists().notEmpty(),

    //Middleware tiene que responder después de la petición
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    //(req, res, next) => validateResults(req, res, next) // Otra forma de invocarlo
]

const validatorGetMember = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]