module.exports = app => {
    const preferences = require("../controllers/preferences.controller");

    const {validatorCreatePreference, validatorGetPreference} = require("../validators/preferences.validators.js")
  
    var router = require("express").Router();
  
    router.post("/", validatorCreatePreference, preferences.create);

    router.get("/", preferences.findAll);
    
    // Retrieve a single Preference with id
    router.get("/:id", validatorGetPreference, preferences.findOne);
  
    router.put("/:id", validatorGetPreference, validatorCreatePreference, preferences.update);
  
    router.delete("/:id", validatorGetPreference, preferences.deleteOne);
  
    app.use('/api/preferences', router);
  };