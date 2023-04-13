const Sponsors = require("../models/sponsors.model");

module.exports = (sequelize, DataTypes) => {
    const Activities = sequelize.define("activities", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            validate: {
                validateString(value) {
                if (value === null || value.len > 50 ) {
                    throw new Error("Activity name incorrect");
                }
                }
            }
        },
        description: {
            type: DataTypes.STRING(250),
            validate: {
            validateString(value) {
                if (value === null || len > 250) {
                    throw new Error("Description incorrect");
                }
            }
            }
        },
        category: {
            type: DataTypes.STRING(20),
            validate: {
            validateString(value) {
                if (value === null || len > 20) {
                    throw new Error("Category incorrect");
                }
            }
            }
        },
        action_field: {
            type: DataTypes.STRING(30),
            validate: {
            validateString(value) {
                if (value === null || len > 30) {
                    throw new Error("Action field incorrect");
                }
            }
            }
        },
        involved_group: {
            type: DataTypes.STRING(50),
            validate: {
            validateString(value) {
                if (value === null || len > 50) {
                    throw new Error("Involved field incorrect");
                }
            }
            }
        },
        location: {
            type: DataTypes.STRING(100),
            validate: {
            validateString(value) {
                if (value === null || len > 100) {
                    throw new Error("Location incorrect");
                }
            }
            }
        },
        start_date: {
            type: DataTypes.DATEONLY,
            validate: {
            validateString(value) {
                if (value === null) {
                    throw new Error("Start date incorrect");
                }
            }
            }
        },
        end_date: {
            type: DataTypes.DATEONLY,
            validate: {
            validateString(value) {
                if (value === null) {
                    throw new Error("End date incorrect");
                }
            }
            }
        },
        modality: {
            type: DataTypes.STRING(10),
            validate: {
            validateString(value) {
                if (value === null || len > 10) {
                    throw new Error("End date incorrect");
                }
            }
            }
        },
        min_members: {
            type: DataTypes.INTEGER,
            validate: {
            validateString(value) {
                if (value === null) {
                    throw new Error("Min members incorrect");
                }
            }
            }
        },
        max_members: {
            type: DataTypes.INTEGER,
            validate: {
                validateString(value) {
                    if (value === null) {
                        throw new Error("Max members incorrect");
                    }
                }
            }
        },
        sponsor_id: {
            type: DataTypes.INTEGER,
            validate: {
                validateString(value) {
                    if (value === null) {
                        throw new Error("Sponsor incorrect");
                    }
                }
            }
        }

    }, 
    { timestamps:true });
  
    return Activities;
  };