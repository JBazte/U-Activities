const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//-------------------------------

const db = require("./app/models");

db.sequelize.sync();
/*
db.sequelize.sync({force: true})//borrar {force:true} al final del desarollo
  .then(() => {
    console.log("Drop and re-Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
*/

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a U-Activities" });
});

require("./app/routes/members.routes")(app);

  // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});