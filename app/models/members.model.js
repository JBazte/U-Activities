module.exports = (sequelize, DataTypes) => {
    const Members = sequelize.define("members", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (value === null || value.len > 50 ) {
              throw new Error("First Name incorrect");
            }
          }
        }
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (value === null || value.len > 50 ) {
              throw new Error("Last name incorrect");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (value === null || len > 50 || !isEmail) {
              throw new Error("Email incorrect");
            }
          }
        }
      },
      bith_date:{
        type: DataTypes.DATEONLY,
        validate: {
          validateString(value) {
            if (value === null) {
              throw new Error("Birth date incorrect");
            }
          }
        }
      },
      dni:{
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (value === null || len != 9) {
              throw new Error("DNI incorrect");
            }
          }
        }
      },
      genre:{
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (value === null) {
              throw new Error("Genre incorrect");
            }
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (value === null || len > 50 || len < 8 || !isAlphanumeric) {
              throw new Error("Password incorrect");
            }
          }
        }
      },
      studies: {
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (value === null) {
              throw new Error("Password incorrect");
            }
          }
        }
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          validateString(value) {
            if (!isNumeric || value.len != 9) {
              throw new Error("Phone incorrect");
            }
          }
        }
      },
      extra_info: {
        type: DataTypes.STRING
      }
    }, 
    { 
      timestamps:true
    });
  
    return Members;
  };