const { check } = require("express-validator")
const validateResults = require("../utils/handleValidators")

const validatorCreatePreference = [
    check("category").exists().notEmpty(),
    check("modality").exists().notEmpty(),
    check("commitment_estimate").exists().notEmpty(),
    check("availability").exists().notEmpty(),

    //Middleware tiene que responder después de la petición
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    //(req, res, next) => validateResults(req, res, next) // Otra forma de invocarlo
]

const validatorGetPreference = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorCreatePreference, validatorGetPreference}