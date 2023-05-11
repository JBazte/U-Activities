module.exports = app => {
    const participation = require("../controllers/participation.controller.js");
    const { authMiddlewareMember } = require("../middleware/session.js")

    const {validatorCreateParticipation, validatorGetParticipation, validatorGetActivityParticipation, checkValidActivity} = require("../validators/participation.validators.js")
  
    var router = require("express").Router();
  
    router.post("/:activity_id", authMiddlewareMember, checkValidActivity,  participation.create);

    router.get("/", participation.findAll);
    
    router.get("/:id", validatorGetParticipation, participation.findOne);
  
    router.get("/activity/:activity_id", validatorGetActivityParticipation, participation.getMembers);

    router.put("/:id", validatorGetParticipation, validatorCreateParticipation, participation.update);
    
    router.delete("/:activity_id", authMiddlewareMember, validatorGetParticipation, participation.deleteOne);

    app.use('/api/participation', router);
  };