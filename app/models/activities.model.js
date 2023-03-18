const Sponsors = require("../models/sponsors.model");

module.exports = (sequelize, Sequelize) => {
    const Activities = sequelize.define("activities", {
        name: {
            type: Sequelize.STRING(50),
            validate: {
                validateString(value) {
                if (value === null || value.len > 50 ) {
                    throw new Error("Activity name incorrect");
                }
                }
            }
        },
        description: {
            type: Sequelize.STRING(250),
            validate: {
            validateString(value) {
                if (value === null || len > 250) {
                    throw new Error("Description incorrect");
                }
            }
            }
        },
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
        action_field: {
            type: Sequelize.STRING(30),
            validate: {
            validateString(value) {
                if (value === null || len > 30) {
                    throw new Error("Action field incorrect");
                }
            }
            }
        },
        involved_group: {
            type: Sequelize.STRING(50),
            validate: {
            validateString(value) {
                if (value === null || len > 50) {
                    throw new Error("Involved field incorrect");
                }
            }
            }
        },
        location: {
            type: Sequelize.STRING(100),
            validate: {
            validateString(value) {
                if (value === null || len > 100) {
                    throw new Error("Location incorrect");
                }
            }
            }
        },
        start_date: {
            type: Sequelize.DATEONLY,
            validate: {
            validateString(value) {
                if (value === null) {
                    throw new Error("Start date incorrect");
                }
            }
            }
        },
        end_date: {
            type: Sequelize.DATEONLY,
            validate: {
            validateString(value) {
                if (value === null) {
                    throw new Error("End date incorrect");
                }
            }
            }
        },
        modality: {
            type: Sequelize.STRING(10),
            validate: {
            validateString(value) {
                if (value === null || len > 10) {
                    throw new Error("End date incorrect");
                }
            }
            }
        },
        min_members: {
            type: Sequelize.INTEGER,
            validate: {
            validateString(value) {
                if (value === null) {
                    throw new Error("Min members incorrect");
                }
            }
            }
        },
        max_members: {
            type: Sequelize.INTEGER,
            validate: {
                validateString(value) {
                    if (value === null) {
                        throw new Error("Max members incorrect");
                    }
                }
            }
        },
        sponsor: {
            type: Sequelize.INTEGER,
            references: {
                model: Sponsors,
                key: 'id'
            },
            validate: {
                validateString(value) {
                    if (value === null) {
                        throw new Error("Sponsor incorrect");
                    }
                }
            }
        }

    }, 
    { timestamps:false });
  
    return Sponsors;
  };

  Sponsors.hasMany(Activities)