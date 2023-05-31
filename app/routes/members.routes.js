module.exports = app => {
  const members = require("../controllers/members.controller.js");
  const activities = require("../controllers/activities.controller.js");
  var router = require("express").Router();
  
  const {validatorCreateMember, validatorGetMember, validatorGetActivitySponsor, hashPasswordUpdate} = require("../validators/members.validators.js")
  const { authMiddlewareMember } = require("../middleware/session.js")

  
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

  router.get("/sponsor/:sponsor_id", validatorGetActivitySponsor, activities.getActivities);

  /**
   * @openapi
   * /api/members/{id}:
   *  put:
   *      tags:
   *      - Members
   *      summary: Update a member
   *      description: Update a member, a member will just be able to edit his own account, as he will get the id from the token
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
   *      security:
   *          - bearerAuth: []
   */
  router.put("/", authMiddlewareMember, hashPasswordUpdate, members.update)

  router.delete("/:id", validatorGetMember, members.deleteOne);
  
  app.use('/api/members', router);
};