module.exports = (sequelize, DataTypes) => {
    const Administrators = sequelize.define("administrators", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                async isUnique(value) {
                    const exists = await Administrators.findOne({ where: { user: value } });
                    if (exists) {
                    throw new Error('El nombre de usuario ya está en uso');
                    }
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull:false
        }
    }, 
    { timestamps:true });
  
    return Administrators;
  };