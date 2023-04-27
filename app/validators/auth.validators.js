const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorRegisterMember = [
    check("first_name").exists().notEmpty().isAlpha()/*withMessage("Ha habido un problema al introducir el nombre")*/,
    check("last_name").exists().notEmpty().isAlpha(),
    check("email").exists().notEmpty().isEmail(),
    check("birth_date").exists().notEmpty()/*.isDate()*/,
    check("dni").exists().notEmpty().isAlphanumeric(),
    check("genre").exists().notEmpty().isAlpha(),
    check("password").exists().notEmpty(),
    check("studies").exists().notEmpty().isAlpha(),
    check("phone").exists().notEmpty(),
    
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorLoginMember = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength( {min:8, max: 64} ),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorRegisterMember, validatorLoginMember}