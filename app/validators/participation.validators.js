const { check } = require("express-validator")
const validateResults = require("../utils/handleValidators")
const { activities } = require("../models")
const { handleHttpError } = require("../utils/handleErrors")

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

const validatorGetActivityParticipation = [
    check("activity_id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const checkValidActivity = async (req, res, next) => {
    
    const activity = await activities.findByPk(req.params.activity_id)

    if(activity == null)
    {
        handleHttpError(res, "NOT_FOUND_ACTIVITY")
        return
    }
    
    next()
}

module.exports = {validatorCreateParticipation, validatorGetParticipation, validatorGetActivityParticipation, checkValidActivity}