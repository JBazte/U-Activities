const Members = require("../models/members.model");
const Activities = require("../models/activities.model");

module.exports = (sequelize, Sequelize) => {
    const Participation = sequelize.define("participation", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        member: {
            type: Sequelize.INTEGER,
            references: {
                model: Members,
                key: 'id'
            },
            validate: {
                validateString(value) {
                    if (value === null) {
                        throw new Error("Member incorrect");
                    }
                }
            }
       },
        activity: {
            type: Sequelize.INTEGER,
            references: {
                model: Activities,
                key: 'id'
            },
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