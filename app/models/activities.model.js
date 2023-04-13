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
            allowNull:false
        },
        description: {
            type: DataTypes.STRING,
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
            allowNull:false
        }

    }, 
    { timestamps:true });
  
    return Activities;
  };