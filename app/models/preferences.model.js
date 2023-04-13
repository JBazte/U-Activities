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
            validate: {
            validateString(value) {
                if (value === null || value.len > 20) {
                    throw new Error("Category incorrect");
                }
            }
            }
        },
        modality: {
            type: DataTypes.STRING,
            validate: {
            validateString(value) {
                if (value === null || value.len > 20) {
                    throw new Error("Modality incorrect");
                }
            }
            }
        },
        commitment_estimate: {
            type: DataTypes.STRING,
            validate: {
            validateString(value) {
                if (value === null || value.len > 10) {
                    throw new Error("Commitment estimate incorrect");
                }
            }
            }
        },
        availability: {
            type: DataTypes.STRING,
            validate: {
            validateString(value) {
                if (value === null || value.len > 10) {
                    throw new Error("Availability incorrect");
                }
            }
            }
        },
        member_id_fk: {
            type: DataTypes.INTEGER,
            validate: {
                validateString(value) {
                    if (value === null) {
                        throw new Error("Member incorrect");
                    }
                }
            }
        }

    }, 
    { timestamps:true });
  
    return Preferences;
  };