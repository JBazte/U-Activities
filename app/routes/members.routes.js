module.exports = app => {
  const members = require("../controllers/members.controller.js");
  var router = require("express").Router();
  
  const {validatorCreateMember, validatorGetMember} = require("../validators/members.validators.js")

  /**
  * @openapi
  * /api/members:
  *  post:
  *      tags:
  *      - Members
  *      summary: create a new member
  *      description: ''
  *      requestBody:
  *          content:
  *              application/json:
  *                  schema:
  *                      $ref: "#/components/schemas/members"
  *      responses:
  *          '200':
  *              description: Returns the inserted object
  *          '401':
  *              description: Validation error
  */
  router.post("/", validatorCreateMember, members.create);
  
  /**
   * @openapi
   * /api/members:
   *  get:
   *      tags:
   *      - members
   *      summary: Get members in the System
   *      description: ''
   *      responses:
   *          '200':
   *              description: Returns the members
   *          '500':
   *              description: Server error
   */
  router.get("/", members.findAll);

  /**
   * @openapi
   * /api/members/{id}:
   *  get:
   *      tags:
   *      - Members
   *      summary: Get a member by id in the System
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
   *              description: Returns the member
   *          '500':
   *              description: Server error
   */
  router.get("/:id", validatorGetMember, members.findOne);

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
   * /api/members/{id}:
   *  put:
   *      tags:
   *      - Members
   *      summary: Update a member
   *      description: Update a member
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
   *                      $ref: "#/components/schemas/members"
   *      responses:
   *          '200':
   *              description: Returns the inserted object
   *          '401':
   *              description: Validation error
   */
  router.put("/:id", validatorGetMember, validatorCreateMember, members.update)

  /**
   * @openapi
   * /api/members/{id}:
   *  delete:
   *      tags:
   *      - Members
   *      summary: Delete a member
   *      description: Delete a member by an id
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
  router.delete("/:id", validatorGetMember, members.deleteOne);

  app.use('/api/members', router);
};