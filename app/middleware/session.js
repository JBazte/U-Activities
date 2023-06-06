const { handleHttpError } = require("../utils/handleErrors")
const { verifyTokenUser, verifyTokenAdmin, verifyTokenSponsor }     = require("../utils/handleJwt")
const { members, sponsors, administrators }      = require("../models")

const authMiddlewareMember = async (req, res, next) => {
    try{
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }

        // Nos llega la palabra reservada Bearer (es un estándar) y el Token, así que me quedo con la última parte
        const token = req.headers.authorization.split(' ').pop() 
        //Del token, miramos en Payload (revisar verifyToken de utils/handleJwt)
        const dataToken = await verifyTokenUser(token)

        if(!dataToken) {
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401)
            return
        }

        if(dataToken.role != "member")
        {
            handleHttpError(res, "NOT_MEMBER_TOKEN", 401)
            return
        }

        const member = await members.findByPk(dataToken.id)

        if(member == null)
        {
            handleHttpError(res, "NOT_EXISTS_MEMBER", 401)
            return
        }

        req.member = member // Inyecto al user en la petición
        
        

        next()

    }catch(err){
        console.log(err)
        handleHttpError(res, "NOT_USER_SESSION", 401)
    }
}

const authMiddlewareSponsor = async (req, res, next) => {
    try{
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }

        // Nos llega la palabra reservada Bearer (es un estándar) y el Token, así que me quedo con la última parte
        const token = req.headers.authorization.split(' ').pop() 
        //Del token, miramos en Payload (revisar verifyToken de utils/handleJwt)
        const dataToken = await verifyTokenSponsor(token)

        if(!dataToken) {
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401)
            return
        }

        if(dataToken.role != "sponsor")
        {
            handleHttpError(res, "NOT_MEMBER_TOKEN", 401)
            return
        }

        const sponsor = await sponsors.findByPk(dataToken.id)
        req.sponsor = sponsor // Inyecto al user en la petición
        
        if(sponsor == null)
        {
            handleHttpError(res, "NOT_EXISTS_SPONSOR", 401)
            return
        }

        next()

    }catch(err){
        console.log(err)
        handleHttpError(res, "NOT_SPONSOR_SESSION", 401)
    }
}

const authMiddlewareAdministrator = async (req, res, next) => {
    try{
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }

        // Nos llega la palabra reservada Bearer (es un estándar) y el Token, así que me quedo con la última parte
        const token = req.headers.authorization.split(' ').pop() 
        //Del token, miramos en Payload (revisar verifyToken de utils/handleJwt)
        const dataToken = await verifyTokenAdmin(token)

        if(!dataToken) {
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401)
            return
        }

        if(dataToken.role != "admin")
        {
            handleHttpError(res, "NOT_MEMBER_TOKEN", 401)
            return
        }

        const admin = await administrators.findByPk(dataToken.id)
        req.admin = admin // Inyecto al user en la petición

        if(admin == null)
        {
            handleHttpError(res, "NOT_EXISTS_ADMIN", 401)
            return
        }
        
        next()

    }catch(err){
        console.log(err)
        handleHttpError(res, "NOT_ADMINISTRATOR_SESSION", 401)
    }
}

module.exports = { authMiddlewareMember, authMiddlewareSponsor, authMiddlewareAdministrator }