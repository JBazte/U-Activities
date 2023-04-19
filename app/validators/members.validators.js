
const { check } = require("express-validator")
const validateResults = require("../utils/handleValidators")

const validatorCreateMember = [
    check("first_name").exists().notEmpty().isAlpha()/*withMessage("Ha habido un problema al introducir el nombre")*/,
    check("last_name").exists().notEmpty().isAlpha(),
    check("email").exists().notEmpty().isEmail(),
    check("birth_date").exists().notEmpty()/*.isDate()*/,
    check("dni").exists().notEmpty().isAlphanumeric(),
    check("genre").exists().notEmpty().isAlpha(),
    check("password").exists().notEmpty(),
    check("studies").exists().notEmpty().isAlpha(),
    check("phone").exists().notEmpty(),

    //Middleware tiene que responder después de la petición
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    //(req, res, next) => validateResults(req, res, next) // Otra forma de invocarlo
]

const validatorGetMember = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateMember, validatorGetMember }