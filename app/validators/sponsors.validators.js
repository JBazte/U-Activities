const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateSponsor = [
    check("entity").exists().notEmpty(),
    check("user").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty(),

    //Middleware tiene que responder después de la petición
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    //(req, res, next) => validateResults(req, res, next) // Otra forma de invocarlo
]

const validatorGetSponsor = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorCreateSponsor, validatorGetSponsor}