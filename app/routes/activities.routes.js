module.exports = app => {
  const activities = require("../controllers/activities.controller.js");
  //const {validatorGetSponsor} = require("../validators/sponsors.validators.js");
  const {validatorGetCategory, validatorGetActionField, validatorGetInvolvedGroup, validatorCreateActivity, validatorGetActivity, validatorGetActivitySponsor} = require("../validators/activities.validators.js")
  const { authMiddlewareSponsor } = require("../middleware/session.js")

  var router = require("express").Router();

  /**
  * @openapi
  * /api/activities:
  *  post:
  *      tags:
  *      - Activities
  *      summary: create a new activity
  *      description: ''
  *      requestBody:
  *          content:
  *              application/json:
  *                  schema:
  *                      $ref: "#/components/schemas/activities"
  *      responses:
  *          '200':
  *              description: Returns the inserted object
  *          '401':
  *              description: Validation error
  */
  router.post("/",authMiddlewareSponsor, validatorCreateActivity, activities.create);

  router.get("/", activities.findAll);

  router.get("/:id", validatorGetActivity, activities.findOne);

  router.get("/sponsor/:sponsor_id", validatorGetActivitySponsor, activities.getActivities);

  router.put("/:id", validatorGetActivity, validatorCreateActivity, activities.update);

  router.delete("/:id", validatorGetActivity, activities.deleteOne);

  router.get("/category/:category", validatorGetCategory, activities.findCategory)
  router.get("/actionField/:actionField", validatorGetActionField, activities.findActionField)
  router.get("/involvedGroup/:involvedGroup", validatorGetInvolvedGroup, activities.findInvolvedGroup)
  router.get("/date/orderDate", activities.orderDate)

  app.use('/api/activities', router);
  };