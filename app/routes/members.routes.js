module.exports = app => {
  const members = require("../controllers/members.controller.js");

  var router = require("express").Router();

  router.post("/", members.create);
  
  // Retrieve all Members
  router.get("/", members.findAll);

  // Retrieve a single Member with id
  router.get("/:id", members.findOne);

  router.put("/:id", members.update)

  router.delete("/:id", members.deleteOne);

  app.use('/api/members', router);
};