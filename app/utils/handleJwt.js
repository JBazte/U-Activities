require('dotenv').config();
const jwt           = require("jsonwebtoken")

/**
 * El objeto del usuario
 * @param {*} user 
 */
const tokenSignUser = async (user) => {
    const sign = jwt.sign(
        {
            id: user._id,
            //role: member.role
        },
        process.env.JWT_SECRET_USER,
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

module.exports = { tokenSignUser, verifyTokenUser }