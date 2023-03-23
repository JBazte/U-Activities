module.exports = app => {
    const participation = require("../controllers/participation.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", participation.create);
    
    router.delete("/:id", participation.deleteOne);
  
    app.use('/api/participation', router);
  };