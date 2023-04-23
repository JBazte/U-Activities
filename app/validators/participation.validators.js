const { check } = require("express-validator")
const validateResults = require("../utils/handleValidators")

const validatorCreateParticipation = [
    check("member_id").exists().notEmpty().isInt(),
    check("activity_id").exists().notEmpty().isInt(),
    //Middleware tiene que responder después de la petición
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    //(req, res, next) => validateResults(req, res, next) // Otra forma de invocarlo
]

const validatorGetParticipation = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorCreateParticipation, validatorGetParticipation}