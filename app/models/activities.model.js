const Sponsors = require("../models/sponsors.model");

module.exports = (sequelize, DataTypes) => {
    const Activities = sequelize.define("activities", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                async isUnique(value) {
                    const exists = await Activities.findOne({ where: { name: value } });
                    if (exists) {
                    throw new Error('El nombre de actividad ya está en uso');
                    }
                }
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        category: {
            type: DataTypes.STRING,
            allowNull:false
        },
        action_field: {
            type: DataTypes.STRING,
            allowNull:false
        },
        involved_group: {
            type: DataTypes.STRING,
            allowNull:false
        },
        location: {
            type: DataTypes.STRING,
            allowNull:false
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull:false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull:false
        },
        modality: {
            type: DataTypes.STRING,
            allowNull:false
        },
        min_members: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        max_members: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        sponsor_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            /*validate: {
                async isUnique(value) {
                    const exists = await Sponsors.findOne({ where: { id: value } });
                    if (!exists) {
                        throw new Error('El id sponsor seleccionado no existe');
                    }
                }
            }*/
        }

    }, 
    { timestamps:true });
  
    return Activities;
  };