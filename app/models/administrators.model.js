module.exports = (sequelize, Sequelize) => {
    const Administrators = sequelize.define("administrators", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: Sequelize.STRING(50),
            validate: {
                validateString(value) {
                if (value === null || value.len > 50 ) {
                    throw new Error("User name incorrect");
                }
                }
            }
        },
        email: {
            type: Sequelize.STRING(65),
            validate: {
            validateString(value) {
                if (value === null || len > 50 || !isEmail) {
                throw new Error("Email incorrect");
                }
            }
            }
        },
        phone: {
            type: Sequelize.STRING(50),
            validate: {
            validateString(value) {
                if (value === null || len > 50 || len < 9 || !isNumeric) {
                throw new Error("Phone contact incorrect");
                }
            }
            }
        },

    }, 
    { timestamps:true });
  
    return Administrators;
  };