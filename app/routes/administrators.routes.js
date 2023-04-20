module.exports = app => {
    const administrators = require("../controllers/administrators.controller.js");

    const {validatorCreateAdministrator, validatorGetAdministrator} = require("../validators/administrators.validators.js")
  
    var router = require("express").Router();
  
    router.post("/", validatorCreateAdministrator, administrators.create);
    
    router.delete("/:id", validatorGetAdministrator, administrators.deleteOne);
  
    app.use('/api/administrators', router);
  };