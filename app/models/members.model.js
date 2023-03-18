module.exports = (sequelize, Sequelize) => {
    const Members = sequelize.define("members", {
      first_name: {
        type: Sequelize.STRING(50),
        validate: {
          validateString(value) {
            if (value === null || value.len > 50 ) {
              throw new Error("First Name incorrect");
            }
          }
        }
      },
      last_name: {
        type: Sequelize.STRING(50),
        validate: {
          validateString(value) {
            if (value === null || value.len > 50 ) {
              throw new Error("Last name incorrect");
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
      phone: {
        type: Sequelize.STRING(50),
        validate: {
          validateString(value) {
            if (!isNumeric || value.len != 9) {
              throw new Error("Phone incorrect");
            }
          }
        }
      }
      

    }, 
    { timestamps:false });
  
    return Members;
  };