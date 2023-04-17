module.exports = app => {
  const members = require("../controllers/members.controller.js");
  var router = require("express").Router();
  
  const {validatorCreateMember, validatorGetMember} = require("../validators/members.validators.js")


  router.post("/", validatorCreateMember, members.create);
  
  // Retrieve all Members
  router.get("/", members.findAll);

  // Retrieve a single Member with id
  router.get("/:id", validatorGetMember, members.findOne);

  router.put("/:id", validatorGetMember, validatorCreateMember, members.update)

  router.delete("/:id", validatorGetMember, members.deleteOne);

  app.use('/api/members', router);
};