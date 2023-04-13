module.exports = (sequelize, DataTypes) => {
    const Administrators = sequelize.define("administrators", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull:false
        },

    }, 
    { timestamps:true });
  
    return Administrators;
  };