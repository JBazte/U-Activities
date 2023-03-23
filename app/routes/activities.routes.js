module.exports = app => {
    const activities = require("../controllers/activities.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", activities.create);
    
    // Retrieve all Members
    router.get("/", activities.findAll);
  
    // Retrieve a single Member with id
    router.get("/:id", activities.findOne);
  
    router.put("/:id", activities.update)
  
    router.delete("/:id", activities.deleteOne);
  
    app.use('/api/activities', router);
  };