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
            validate: {
                validateString(value) {
                    if (value === null) {
                        throw new Error("Member incorrect");
                    }
                }
            }
       },
        activity_id: {
            type: DataTypes.INTEGER,
            validate: {
                validateString(value) {
                    if (value === null) {
                        throw new Error("Activity incorrect");
                    }
                }
            }
        }

    }, 
    { timestamps:true });
  
    return Participation;
  };