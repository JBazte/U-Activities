const Members = require("../models/members.model");

module.exports = (sequelize, Sequelize) => {
    const Preferences = sequelize.define("preferences", {
        category: {
            type: Sequelize.STRING(20),
            validate: {
            validateString(value) {
                if (value === null || len > 20) {
                    throw new Error("Category incorrect");
                }
            }
            }
        },
        modality: {
            type: Sequelize.STRING(20),
            validate: {
            validateString(value) {
                if (value === null || len > 20) {
                    throw new Error("Modality incorrect");
                }
            }
            }
        },
        commitment_estimate: {
            type: Sequelize.STRING(10),
            validate: {
            validateString(value) {
                if (value === null || len > 10) {
                    throw new Error("Commitment estimate incorrect");
                }
            }
            }
        },
        availability: {
            type: Sequelize.STRING(10),
            validate: {
            validateString(value) {
                if (value === null || len > 10) {
                    throw new Error("Availability incorrect");
                }
            }
            }
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
        }

    }, 
    { timestamps:false });
  
    return Sponsors;
  };

  Members.hasOne(Preferences)

  /*Members.hasOne(Preferences);
  Preferences.belongsTo(Members, {
    foreignKey: 'member'
    });*/