const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
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
db.members = require("./members.model.js")(sequelize, Sequelize);
db.preferences = require("./preferences.model.js")(sequelize, Sequelize);
db.sponsors = require("./sponsors.model.js")(sequelize, Sequelize);
db.activities = require("./activities.model.js")(sequelize, Sequelize);
db.participation = require("./participation.model.js")(sequelize, Sequelize);

module.exports = db;