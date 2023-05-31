module.exports = app => {
  const members = require("../controllers/members.controller.js");
  const activities = require("../controllers/activities.controller.js");
  var router = require("express").Router();
  
  const {validatorCreateMember, validatorGetMember, validatorGetActivitySponsor, hashPasswordUpdate} = require("../validators/members.validators.js")
  const { authMiddlewareMember } = require("../middleware/session.js")

  
  router.post("/", validatorCreateMember, members.create);
  
  router.get("/", members.findAll);

  router.get("/:id", validatorGetMember, members.findOne);

  router.get("/sponsor/:sponsor_id", validatorGetActivitySponsor, activities.getActivities);

  router.put("/", authMiddlewareMember, hashPasswordUpdate, members.update)

  router.delete("/:id", validatorGetMember, members.deleteOne);
  
  app.use('/api/members', router);
};