module.exports = app => {
    const sponsors = require("../controllers/sponsors.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", sponsors.create);
    
    // Retrieve all Members
    router.get("/", sponsors.findAll);
  
    // Retrieve a single Member with id
    router.get("/:id", sponsors.findOne);
  
    router.put("/:id", sponsors.update)
  
    router.delete("/:id", sponsors.deleteOne);
  
    app.use('/api/sponsors', router);
  };