module.exports = app => {
    const activities = require("../controllers/activities.controller.js");
    //const {validatorGetSponsor} = require("../validators/sponsors.validators.js");
    const {validatorCreateActivity, validatorGetActivity, validatorGetActivitySponsor} = require("../validators/activities.validators.js")
  
    var router = require("express").Router();
  
    router.post("/", validatorCreateActivity, activities.create);
    
    // Retrieve all Members
    router.get("/", activities.findAll);
  
    // Retrieve a single Member with id
    router.get("/:id", validatorGetActivity, activities.findOne);
  
    router.get("/sponsor/:sponsor_id", validatorGetActivitySponsor, activities.getActivities);

    router.put("/:id", validatorGetActivity, validatorCreateActivity, activities.update);
  
    router.delete("/:id", validatorGetActivity, activities.deleteOne);
  
    app.use('/api/activities', router);
  };