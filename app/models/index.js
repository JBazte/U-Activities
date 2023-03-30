const dbConfig = require("../config/db.config.js");

const {Sequelize, DataTypes} = require("sequelize");


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


//tablas
db.administrators = require("./administrators.model.js")(sequelize, Sequelize);
db.members = require("./members.model.js")(sequelize, DataTypes);
db.preferences = require("./preferences.model.js")(sequelize, Sequelize);
db.sponsors = require("./sponsors.model.js")(sequelize, Sequelize);
db.activities = require("./activities.model.js")(sequelize, Sequelize);
db.participation = require("./participation.model.js")(sequelize, Sequelize);

const Members = db.members
const Preferences = db.preferences

//ASIGNAMOS FK
//RELACION 1-N member y preferences
Members.hasOne(Preferences, {
  foreignKey: 'member_id_fk'
});
Preferences.belongsTo(Members);


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



module.exports = db;