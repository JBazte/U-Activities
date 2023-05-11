require('dotenv').config();
const jwt           = require("jsonwebtoken")

/**
 * El objeto del usuario
 * @param {*} user 
 */
const tokenSignUser = async (user) => {
    const sign = jwt.sign(
        {
            id: user.id,
            role: "member"
            //role: member.role
        },
        process.env.JWT_SECRET_USER,
        {
            expiresIn: "2h"
        }
    )
    return sign
}

const tokenSignAdmin = async (admin) => {
    const sign = jwt.sign(
        {
            id: admin.id,
            role: "admin"
            //role: member.role
        },
        process.env.JWT_SECRET_ADMIN
    )
    return sign
}

const tokenSignSponsor = async (sponsor) => {
    const sign = jwt.sign(
        {
            id: sponsor.id,
            role: "sponsor"
            //role: member.role
        },
        process.env.JWT_SECRET_SPONSOR,
        {
            expiresIn: "2h"
        }
    )
    return sign
}

/**
 * Token se sesión
 * @param {*} tokenJwt 
 */
const verifyTokenUser = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, process.env.JWT_SECRET_USER)
    }catch(err) {
        console.log(err)
    }
}

const verifyTokenAdmin = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, process.env.JWT_SECRET_ADMIN)
    }catch(err) {
        console.log(err)
    }
}

const verifyTokenSponsor = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, process.env.JWT_SECRET_SPONSOR)
    }catch(err) {
        console.log(err)
    }
}



module.exports = { tokenSignUser, tokenSignAdmin, tokenSignSponsor, verifyTokenUser, verifyTokenAdmin, verifyTokenSponsor }