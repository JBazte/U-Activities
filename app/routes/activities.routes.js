module.exports = app => {
    const activities = require("../controllers/activities.controller.js");

    const {validatorCreateActivity, validatorGetActivity} = require("../validators/activities.validators.js")
  
    var router = require("express").Router();
  
    router.post("/", validatorCreateActivity, activities.create);
    
    // Retrieve all Members
    router.get("/", activities.findAll);
  
    // Retrieve a single Member with id
    router.get("/:id", validatorGetActivity, activities.findOne);
  
    router.put("/:id", validatorGetActivity, validatorCreateActivity, activities.update)
  
    router.delete("/:id", validatorGetActivity, activities.deleteOne);
  
    app.use('/api/activities', router);
  };