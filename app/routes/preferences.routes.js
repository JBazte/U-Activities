module.exports = app => {
    const preferences = require("../controllers/preferences.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", preferences.create);
    
    // Retrieve a single Member with id
    router.get("/:id", preferences.findOne);
  
    router.put("/:id", preferences.update)
  
    router.delete("/:id", preferences.deleteOne);
  
    app.use('/api/preferences', router);
  };