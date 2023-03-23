module.exports = app => {
    const administrators = require("../controllers/administrators.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", administrators.create);
    
    router.delete("/:id", administrators.deleteOne);
  
    app.use('/api/administrators', router);
  };