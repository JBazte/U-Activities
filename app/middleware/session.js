const { handleHttpError } = require("../utils/handleErrors")
const { verifyTokenUser }     = require("../utils/handleJwt")
const { members }      = require("../models")

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

        const member = await members.findByPk(dataToken.id)
        req.member = member // Inyecto al user en la petición
        
        next()

    }catch(err){
        console.log(err)
        handleHttpError(res, "NOT_USER_SESSION", 401)
    }
}

module.exports = { authMiddlewareMember }