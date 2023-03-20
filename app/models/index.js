const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const membersModel = require("./members.model.js");
const administratorsModel = require("./administrators.model.js");
const preferencesModel = require("./preferences.model.js");
const sponsorsModel = require("./sponsors.model.js");
const activitiesModel = require("./activities.model.js");
const participationModel = require("./participation.model.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//ASIGNAMOS FK
//RELACION 1-N member y preferences
membersModel.hasMany(preferencesModel, {
  foreignKey: 'member'
});
preferencesModel.belongsTo(membersModel, {
  foreignKey: 'member',
  targetKey: 'id'
});


//RELACION 1-N sponsor y activities
sponsorsModel.hasMany(activitiesModel, {
  foreignKey: 'sponsor'
});
activitiesModel.belongsTo(sponsorsModel, {
  foreignKey: 'sponsor',
  targetKey: 'id'
});


//RELACION N-N entre members y activities, tabla partcipation
membersModel.hasMany(participationModel, {
  foreignKey: 'member'
});
participationModel.belongsTo(membersModel, {
  foreignKey: 'member',
  targetKey: 'id'
});

activitiesModel.hasMany(participationModel, {
  foreignKey: 'activity'
});
participationModel.belongsTo(activitiesModel, {
  foreignKey: 'activity',
  targetKey: 'id'
});


//tablas
db.administrators = require("./administrators.model.js")(sequelize, Sequelize);
db.members = require("./members.model.js")(sequelize, Sequelize);
db.preferences = require("./preferences.model.js")(sequelize, Sequelize);
db.sponsors = require("./sponsors.model.js")(sequelize, Sequelize);
db.activities = require("./activities.model.js")(sequelize, Sequelize);
db.participation = require("./participation.model.js")(sequelize, Sequelize);




module.exports = db;