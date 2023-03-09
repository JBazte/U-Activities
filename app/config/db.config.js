module.exports = {
    HOST: "suliserver.ddns.net",
    USER: "adminUser",
    PASSWORD: "1234Peperoni",
    DB: "voluntariado",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };