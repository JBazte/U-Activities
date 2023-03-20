module.exports = (sequelize, Sequelize) => {
    const Sponsors = sequelize.define("sponsors", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      entity: {
        type: Sequelize.STRING(50),
        validate: {
          validateString(value) {
            if (value === null || value.len > 50 || value.len < 10 ) {
              throw new Error("Entity Name incorrect");
            }
          }
        }
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
      password: {
        type: Sequelize.STRING(50),
        validate: {
          validateString(value) {
            if (value === null || len > 50 || len < 8 || !isAlphanumeric) {
              throw new Error("Password incorrect");
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
      }

    }, 
    { 
      timestamps:false 
    });
  
    return Sponsors;
  };