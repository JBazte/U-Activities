const { check } = require("express-validator")
const validateResults = require("../utils/handleValidators")

const validatorCreateActivity = [
    check("name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("category").exists().notEmpty(),
    check("action_field").exists().notEmpty(),
    check("involved_group").exists().notEmpty(),
    check("location").exists().notEmpty(),
    check("start_date").exists().notEmpty().isDate(),
    check("end_date").exists().notEmpty().isDate(),
    check("modality").exists().notEmpty(),
    check("min_members").exists().notEmpty().isInt(),
    check("max_members").exists().notEmpty().isInt(),
    check("sponsor_id").exists().notEmpty().isInt(),

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