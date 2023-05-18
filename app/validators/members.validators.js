
const { check } = require("express-validator")
const validateResults = require("../utils/handleValidators")
const { members } = require("../models")
const { handleHttpError } = require("../utils/handleErrors")
const { encrypt, compare } = require("../utils/handlePassword")

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

const checkParamsCreate = async (req, res, next) => {
    const newEmail = req.body.email
    const newDni = req.body.dni

    if(newEmail != null)
    {
        const member = await members.findOne({
            where: { email: newEmail }
          });

        if(member != null)
        {
            handleHttpError(res, "EMAIL_USED_BY_OTHER_MEMBER", 401)
            return
        }
    }

    if(newDni != null)
    {
        const member = await members.findOne({
            where: { dni: newDni }
          });

        if(member != null)
        {
            handleHttpError(res, "DNI_USED_BY_OTHER_MEMBER", 401)
            return
        }
    }
    next()
}

const checkParamsUpdate = async (req, res, next) => {
    const newEmail = req.body.email
    const newDni = req.body.dni

    if(newEmail != null)
    {
        const member = await members.findOne({
            where: { email: newEmail }
          });

        if(member != null && member.id != req.member.id)
        {
            handleHttpError(res, "EMAIL_USED_BY_OTHER_MEMBER", 401)
            return
        }
    }

    if(newDni != null)
    {
        const member = await members.findOne({
            where: { dni: newDni }
          });

        if(member != null && member.id != req.member.id)
        {
            handleHttpError(res, "DNI_USED_BY_OTHER_MEMBER", 401)
            return
        }
    }

    next()
}

const hashPasswordUpdate = async (req, res, next) => {
    const member = req.body
    const password = await encrypt(member.password)
    const body = {...member, password}
    req.body = body
    console.log(password)
    console.log(body)
    next()
}


module.exports = { validatorCreateMember, validatorGetMember, checkParamsUpdate, checkParamsCreate, hashPasswordUpdate }