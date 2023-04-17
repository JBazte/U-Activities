const Members = require("../models/members.model");

module.exports = (sequelize, DataTypes) => {
    const Preferences = sequelize.define("preferences", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull:false
        },
        modality: {
            type: DataTypes.STRING,
            allowNull:false
        },
        commitment_estimate: {
            type: DataTypes.STRING,
            allowNull:false
        },
        availability: {
            type: DataTypes.STRING,
            allowNull:false
        },
        member_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        }

    }, 
    { timestamps:true });
  
    return Preferences;
  };