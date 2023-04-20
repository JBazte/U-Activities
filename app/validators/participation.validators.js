const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateActivity = [
    check("member_id").exists().notEmpty().isInt(),
    check("activity_id").exists().notEmpty().isInt(),
    //Middleware tiene que responder después de la petición
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    //(req, res, next) => validateResults(req, res, next) // Otra forma de invocarlo
]

const validatorGetActivity = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorCreateActivity, validatorGetActivity}