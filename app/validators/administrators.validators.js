const { check } = require("express-validator")
const validateResults = require("../utils/handleValidators")

const validatorCreateAdministrator = [
    check("user").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("phone").exists().notEmpty(),

    //Middleware tiene que responder después de la petición
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    //(req, res, next) => validateResults(req, res, next) // Otra forma de invocarlo
]

const validatorGetAdministrator = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorCreateAdministrator, validatorGetAdministrator}