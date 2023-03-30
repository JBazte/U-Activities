module.exports = (sequelize, Sequelize) => {
    const Members = sequelize.define("members", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
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
      bith_date:{
        type: Sequelize.DATEONLY,
        validate: {
          validateString(value) {
            if (value === null) {
              throw new Error("Birth date incorrect");
            }
          }
        }
      },
      dni:{
        type: Sequelize.STRING(9),
        validate: {
          validateString(value) {
            if (value === null || len != 9) {
              throw new Error("DNI incorrect");
            }
          }
        }
      },
      genre:{
        type: Sequelize.STRING(9),
        validate: {
          validateString(value) {
            if (value === null) {
              throw new Error("Genre incorrect");
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
      studies: {
        type: Sequelize.STRING(50),
        validate: {
          validateString(value) {
            if (value === null) {
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
      },
      extra_info: {
        type: Sequelize.STRING(300)
      }
    }, 
    { 
      timestamps:true
    });
  
    return Members;
  };