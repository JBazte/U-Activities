module.exports = app => {
    const participation = require("../controllers/participation.controller.js");

    const {validatorCreateParticipation, validatorGetParticipation} = require("../validators/participation.validators.js")
  
    var router = require("express").Router();
  
    router.post("/", validatorCreateParticipation,  participation.create);
    
    router.delete("/:id", validatorGetParticipation, participation.deleteOne);
  
    app.use('/api/participation', router);
  };