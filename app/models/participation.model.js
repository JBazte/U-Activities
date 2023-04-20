const Members = require("../models/members.model");
const Activities = require("../models/activities.model");

module.exports = (sequelize, DataTypes) => {
    const Participation = sequelize.define("participation", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        member_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            validate: {
                async isUnique(value) {
                    const exists = await Members.findOne({ where: { id: value } });
                    if (!exists) {
                        throw new Error('El id member seleccionado no existe');
                    }
                }
            }
       },
        activity_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            validate: {
                async isUnique(value) {
                    const exists = await Activities.findOne({ where: { id: value } });
                    if (!exists) {
                        throw new Error('El id activity seleccionado no existe');
                    }
                }
            }
        }

    }, 
    { timestamps:true });
  
    return Participation;
  };