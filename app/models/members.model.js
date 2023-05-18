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
        allowNull:false
      },
      birth_date:{
        type: DataTypes.DATEONLY,
        allowNull:false
      },
      dni:{
        type: DataTypes.STRING,
        unique: true,
        allowNull:false
      },
      gender:{
        type: DataTypes.STRING,
        allowNull:false
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false,
        /*validate: {
          len: [5, 10]
        }*/
      },
      degree: {
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