module.exports = (sequelize, DataTypes) => {
    const Sponsors = sequelize.define("sponsors", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      entity: {
        type: DataTypes.STRING,
        allowNull:false
      },
      user: {
        type: DataTypes.STRING,
        allowNull:false
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false
      }

    }, 
    { 
      timestamps:true 
    });
  
    return Sponsors;
  };