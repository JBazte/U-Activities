const { matchedData } = require("express-validator")
const { tokenSignUser } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const {handleHttpError} = require("../utils/handleErrors")
const {members} = require("../models")

/**
 * Encargado de registrar un nuevo usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerMember = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = {...req, password} // Con "..." duplicamos el objeto y le añadimos o sobreescribimos una propiedad
        const dataMember = await members.create(body)
        //Si no queremos que se devuelva el hash con "findOne", en el modelo de users ponemos select: false en el campo password
        //Además, en este caso con "create", debemos setear la propiedad tal que:  
        dataMember.set('password', undefined, { strict: false })

        const data = {
            token: await tokenSignUser(dataMember),
            user: dataMember
        }
        res.send(data)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
}


/**
 * Encargado de hacer login del usuario
 * @param {*} req 
 * @param {*} res 
 */
const loginMember = async (req, res) => {
    try {
        req = matchedData(req)
        var member = await members.findOne({
            where: {
                email: req.email
            },
            attributes: ['password', 'name', 'role', 'email']
        }); 

        if(!member){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }
        
        const hashPassword = member.password;
        const check = await compare(req.password, hashPassword)

        if(!check){
            handleHttpError(res, "INVALID_PASSWORD", 401)
            return
        }

        //Si no quisiera devolver el hash del password
        member.set('password', undefined, {strict: false})
        const data = {
            token: await tokenSignUser(member),
            member
        }

        res.send(data)

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
}

module.exports = { registerMember, loginMember }