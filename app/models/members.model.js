module.exports = (sequelize, DataTypes) => {
    const Members = sequelize.define("members", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false,
        validate: {
          async isUnique(value) {
            const exists = await Members.findOne({ where: { email: value } });
            if (exists) {
              throw new Error('El email ya está en uso');
            }
          }
        }
      },
      birth_date:{
        type: DataTypes.DATEONLY,
        allowNull:false
      },
      dni:{
        type: DataTypes.STRING,
        unique: true,
        allowNull:false,
        validate: {
          async isUnique(value) {
            const exists = await Members.findOne({ where: { dni: value } });
            if (exists) {
              throw new Error('El DNI ya está en uso');
            }
          }
        }
      },
      genre:{
        type: DataTypes.STRING,
        allowNull:false
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false
      },
      studies: {
        type: DataTypes.STRING,
        allowNull:false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull:false
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