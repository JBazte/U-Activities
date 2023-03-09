module.exports = app => {
    const members = require("../controllers/members.controller.js");
  
    var router = require("express").Router();
  
    
    // Retrieve all Members
    router.get("/", members.findAll);
  
    // Retrieve a single Member with id
    router.get("/:id", members.findOne);

    app.use('/api/members', router);
  };