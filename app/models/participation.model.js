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
            allowNull:false
       },
        activity_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        }

    }, 
    { timestamps:true });
  
    return Participation;
  };