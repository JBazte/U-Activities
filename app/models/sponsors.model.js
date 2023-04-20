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
        allowNull:false,
        validate: {
          async isUnique(value) {
              const exists = await Sponsors.findOne({ where: { user: value } });
              if (exists) {
              throw new Error('El nombre de usuario ya está en uso');
              }
          }
      }
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            async isUnique(value) {
                const exists = await Sponsors.findOne({ where: { email: value } });
                if (exists) {
                  throw new Error('El email ya está en uso');
                }
            }
        }
      }

    }, 
    { 
      timestamps:true 
    });
  
    return Sponsors;
  };