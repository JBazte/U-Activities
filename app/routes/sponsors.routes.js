module.exports = app => {
    const sponsors = require("../controllers/sponsors.controller");

    const {validatorCreateSponsor, validatorGetSponsor} = require("../validators/sponsors.validators.js")
  
    var router = require("express").Router();
  
    router.post("/", validatorCreateSponsor, sponsors.create);
    
    // Retrieve all Members
    router.get("/", sponsors.findAll);
  
    // Retrieve a single Member with id
    router.get("/:id", validatorGetSponsor, sponsors.findOne);
  
    router.put("/:id", validatorGetSponsor, validatorCreateSponsor, sponsors.update)
  
    router.delete("/:id", validatorGetSponsor, sponsors.deleteOne);
  
    app.use('/api/sponsors', router);
  };