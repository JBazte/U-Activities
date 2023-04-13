module.exports = (sequelize, DataTypes) => {
    const Administrators = sequelize.define("administrators", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING,
            validate: {
                validateString(value) {
                if (value === null || value.len > 50 ) {
                    throw new Error("User name incorrect");
                }
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
            validateString(value) {
                if (value === null || value.len > 50 || !value.isEmail) {
                throw new Error("Email incorrect");
                }
            }
            }
        },
        phone: {
            type: DataTypes.STRING,
            validate: {
            validateString(value) {
                if (value === null || value.len > 50 || value.len < 9 || !value.isNumeric) {
                throw new Error("Phone contact incorrect");
                }
            }
            }
        },

    }, 
    { timestamps:true });
  
    return Administrators;
  };