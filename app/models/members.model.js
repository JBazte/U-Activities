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
        allowNull:false
      },
      bith_date:{
        type: DataTypes.DATEONLY,
        allowNull:false
      },
      dni:{
        type: DataTypes.STRING,
        allowNull:false
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