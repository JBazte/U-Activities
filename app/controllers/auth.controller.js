const { matchedData } = require("express-validator")
const { tokenSignUser, tokenSignAdmin, tokenSignSponsor } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const {handleHttpError} = require("../utils/handleErrors")
const {members, administrators, sponsors} = require("../models")
const bcrypt = require('bcryptjs')

/**
 * Encargado de registrar un nuevo usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerMember = async (req, res, next) => {
    try {
        const member = req.body.member
        const password = await encrypt(member.password)
        const body = {...member, password} // Con "..." duplicamos el objeto y le añadimos o sobreescribimos una propiedad
        const dataMember = await members.create(body)
        //Si no queremos que se devuelva el hash con "findOne", en el modelo de users ponemos select: false en el campo password
        //Además, en este caso con "create", debemos setear la propiedad tal que:  
        dataMember.set('password', undefined, { strict: false })



        req.memberId = dataMember.id 
        console.log(dataMember.id)
        console.log(req.memberId)

        const data = {
            token: await tokenSignUser(dataMember),
            user: dataMember
        }

        
        req.data = data 

        
        next() 
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
}

const registerAdmin = async (req, res) => {
    try {
        req = matchedData(req)
        const body = req // Con "..." duplicamos el objeto y le añadimos o sobreescribimos una propiedad
        const dataAdmin = await administrators.create(body)

        const data = {
            token: await tokenSignAdmin(dataAdmin),
            admin: dataAdmin
        }
        res.send(data)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_REGISTER_ADMIN")
    }
}

const registerSponsor = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = {...req, password} // Con "..." duplicamos el objeto y le añadimos o sobreescribimos una propiedad
        const dataSponsor = await sponsors.create(body)
        //Si no queremos que se devuelva el hash con "findOne", en el modelo de users ponemos select: false en el campo password
        //Además, en este caso con "create", debemos setear la propiedad tal que:  
        dataSponsor.set('password', undefined, { strict: false })

        const data = {
            token: await tokenSignSponsor(dataSponsor),
            sponsor: dataSponsor
        }
        res.send(data)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_REGISTER_SPONSOR")
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
            attributes: ['password', 'first_name', 'email']
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

const loginSponsor = async (req, res) => {
    try {
        req = matchedData(req)
        var sponsor = await sponsors.findOne({
            where: {
                email: req.email
            },
            attributes: ['user', 'email', 'password']
        }); 

        if(!sponsor){
            handleHttpError(res, "SPONSOR_NOT_EXISTS", 404)
            return
        }
        
        const hashPassword = sponsor.password;
        const check = await bcrypt.compare(req.password, hashPassword)

        if(!check){
            handleHttpError(res, "INVALID_PASSWORD", 401)
            return
        }

        //Si no quisiera devolver el hash del password
        sponsor.set('password', undefined, {strict: false})
        const data = {
            token: await tokenSignSponsor(sponsor),
            sponsor
        }

        res.send(data)

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_LOGIN_SPONSOR")
    }
}
const loginAdmin = async (req, res) => {
    try {
        req = matchedData(req)
        var admin = await administrators.findOne({
            where: {
                user: req.user
            },
            attributes: ['user', 'phone']
        }); 

        if(!admin){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }

        if(!check){
            handleHttpError(res, "INVALID_PASSWORD", 401)
            return
        }

        //Si no quisiera devolver el hash del password
        admin.set('password', undefined, {strict: false})
        const data = {
            token: await tokenSignAdmin(admin),
            admin
        }

        res.send(data)

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_LOGIN_SPONSOR")
    }
}

module.exports = { registerMember, registerAdmin, registerSponsor, loginMember, loginSponsor, loginAdmin }