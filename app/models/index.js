//const dbConfig = require("../config/db.config.js");
require('dotenv').config();
const {Sequelize, DataTypes} = require("sequelize");



const sequelize = new Sequelize('test_voluntariado', 'test', '1234Peperoni!', {
  host: process.env.HOST, // dirección del host de la base de datos
  dialect: process.env.DIALECT // dialecto de la base de datos
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//tablas
db.administrators = require("./administrators.model.js")(sequelize, DataTypes);
db.members = require("./members.model.js")(sequelize, DataTypes);
db.preferences = require("./preferences.model.js")(sequelize, DataTypes);
db.sponsors = require("./sponsors.model.js")(sequelize, DataTypes);
db.activities = require("./activities.model.js")(sequelize, DataTypes);
db.participation = require("./participation.model.js")(sequelize, DataTypes);

const Members = db.members
const Preferences = db.preferences
const Administrators = db.administrators
const Sponsors = db.sponsors
const Activities = db.activities
const Participation = db.participation

//RELACIONES:

//RELACION 1-N member y preferences
Members.hasOne(Preferences, {
  foreignKey: 'member_id',
  sourceKey:'id'
});
Preferences.belongsTo(Members,{
  foreignKey:'member_id',
  targetId:'id'
});


//RELACION 1-N sponsor y activities
Sponsors.hasMany(Activities, {
  foreignKey: 'sponsor_id',
  sourceKey:'id'
});
Activities.belongsTo(Sponsors, {
  foreignKey:'sponsor_id',
  targetId:'id'
});


//RELACION N-N entre members y activities, tabla partcipation
Members.hasMany(Participation, {
  foreignKey: 'member_id',
  sourceKey: 'id'
});
Participation.belongsTo(Members,{
  foreignKey:'member_id',
  targetId:'id'
});

Activities.hasMany(Participation, {
  foreignKey: 'activity_id',
  sourceKey:'id'
});
Participation.belongsTo(Activities, {
  foreignKey:'activity_id',
  targetId:'id'
});



//Sincronizamos las tablsa en la base de datos
db.sequelize.sync({force: true })
    .then(() => {
        console.log('Tablas sincronizadas')
    });

module.exports = db;