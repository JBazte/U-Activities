module.exports = (sequelize, DataTypes) => {
    const Sponsors = sequelize.define("sponsors", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      entity: {
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (value === null || value.len > 50 || value.len < 10 ) {
              throw new Error("Entity Name incorrect");
            }
          }
        }
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
      password: {
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (value === null || value.len > 50 || value.len < 8 || !value.isAlphanumeric) {
              throw new Error("Password incorrect");
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
      }

    }, 
    { 
      timestamps:true 
    });
  
    return Sponsors;
  };