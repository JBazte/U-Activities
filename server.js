const express = require("express");
const bodyParser = require("body-parser");

const app = express();


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//-------------------------------

const db = require("./app/models");


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a U-Activities" });
});

require("./app/routes/members.routes")(app);
require("./app/routes/preferences.routes")(app);
require("./app/routes/administrators.routes")(app);
require("./app/routes/sponsors.routes")(app);
require("./app/routes/activities.routes")(app);
require("./app/routes/participation.routes")(app);

  // set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});