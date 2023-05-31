module.exports = app => {
    const administrators = require("../controllers/administrators.controller.js");

    const {validatorCreateAdministrator, validatorGetAdministrator} = require("../validators/administrators.validators.js")
  
    var router = require("express").Router();

    // Create a new admin, it will be done by db
    router.post("/", validatorCreateAdministrator, administrators.create);

    //Get all the admins
    router.get("/", administrators.findAll);

    router.get("/:id", validatorGetAdministrator, administrators.findOne);

    router.put("/:id", validatorGetAdministrator, validatorCreateAdministrator, administrators.update);

    router.delete("/:id", validatorGetAdministrator, administrators.deleteOne);
  
    app.use('/api/administrators', router);
  };