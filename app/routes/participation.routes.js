module.exports = app => {
    const participation = require("../controllers/participation.controller.js");

    const {validatorCreateParticipation, validatorGetParticipation, validatorGetActivityParticipation} = require("../validators/participation.validators.js")
  
    var router = require("express").Router();
  
    router.post("/", validatorCreateParticipation,  participation.create);

    router.get("/", participation.findAll);
    
    router.get("/:id", validatorGetParticipation, participation.findOne);
  
    router.get("/activity/:activity_id", validatorGetActivityParticipation, participation.getMembers);

    router.put("/:id", validatorGetParticipation, validatorCreateParticipation, participation.update);
    
    router.delete("/:id", validatorGetParticipation, participation.deleteOne);

    app.use('/api/participation', router);
  };