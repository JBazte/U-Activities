const { check } = require("express-validator")
const validateResults = require("../utils/handleValidators")

const validatorRegisterMember = [
    check("member.first_name").exists().notEmpty().isAlpha()/*withMessage("Ha habido un problema al introducir el nombre")*/,
    check("member.last_name").exists().notEmpty().isAlpha(),
    check("member.email").exists().notEmpty().isEmail(),
    check("member.birth_date").exists().notEmpty()/*.isDate()*/,
    check("member.dni").exists().notEmpty().isAlphanumeric(),
    check("member.gender").exists().notEmpty().isAlpha(),
    check("member.password").exists().notEmpty().isLength( {min:8, max: 64} ),
    check("member.degree").exists().notEmpty().isAlpha(),
    check("member.phone").exists().notEmpty(),
    
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