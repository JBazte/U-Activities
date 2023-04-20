module.exports = app => {
    const preferences = require("../controllers/preferences.controller");
  
    var router = require("express").Router();
  
    router.post("/", preferences.create);

    router.get("/", preferences.findAll);
    
    // Retrieve a single Preference with id
    router.get("/:id", preferences.findOne);
  
    router.put("/:id", preferences.update);
  
    router.delete("/:id", preferences.deleteOne);
  
    app.use('/api/preferences', router);
  };