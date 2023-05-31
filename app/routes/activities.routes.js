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
  *      security:
  *          - bearerAuth: []
  */
  router.post("/",authMiddlewareSponsor, validatorCreateActivity, activities.create);

  /**
   * @openapi
   * /api/activities:
   *  get:
   *      tags:
   *      - Activities
   *      summary: Get activities in the System
   *      description: ''
   *      responses:
   *          '200':
   *              description: Returns the activities
   *          '500':
   *              description: Server error
   */
  router.get("/", activities.findAll);

  /**
   * @openapi
   * /api/activities/{id}:
   *  get:
   *      tags:
   *      - Activities
   *      summary: Get an activity by id in the System
   *      description: ''
   *      parameters:
   *          -   name: id
   *              in: path
   *              description: id that is requested
   *              required: true
   *              schema:
   *                  type: string
   *      responses:
   *          '200':
   *              description: Returns the activity
   *          '500':
   *              description: Server error
   */
  router.get("/:id", validatorGetActivity, activities.findOne);
  
  /**
   * @openapi
   * /api/activities/sponsor/{sponsor_id}:
   *  get:
   *      tags:
   *      - Activities
   *      summary: Get all activities from a sponsor in the System
   *      description: ''
   *      parameters:
   *          -   name: sponsor_id
   *              in: path
   *              description: id of the sponsor that you want to get its activities
   *              required: true
   *              schema:
   *                  type: string
   *      responses:
   *          '200':
   *              description: Returns the activities
   *          '500':
   *              description: Server error
   */
  router.get("/sponsor/:sponsor_id", validatorGetActivitySponsor, activities.getActivities);

  /**
   * @openapi
   * /api/activities/{id}:
   *  put:
   *      tags:
   *      - Activities
   *      summary: Update an activity
   *      description: Update an activity
   *      parameters:
   *          -   name: id
   *              in: path
   *              description: id that need to be updated
   *              required: true
   *              schema:
   *                  type: string
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
  router.put("/:id", validatorGetActivity, validatorCreateActivity, activities.update);

  /**
   * @openapi
   * /api/activities/{id}:
   *  delete:
   *      tags:
   *      - Activities
   *      summary: Delete an activity
   *      description: Delete an activity by an id
   *      parameters:
   *          -   name: id
   *              in: path
   *              description: ''
   *              required: true
   *              schema:
   *                  type: string
   *      responses:
   *          '200':
   *              description: Returns the status
   *          '401':
   *              description: Validation error
   */
  router.delete("/:id", validatorGetActivity, activities.deleteOne);

  router.get("/category/:category", validatorGetCategory, activities.findCategory)
  router.get("/actionField/:actionField", validatorGetActionField, activities.findActionField)
  router.get("/involvedGroup/:involvedGroup", validatorGetInvolvedGroup, activities.findInvolvedGroup)
  router.get("/date/orderDate", activities.orderDate)

  app.use('/api/activities', router);
  };