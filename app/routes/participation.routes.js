module.exports = app => {
    const participation = require("../controllers/participation.controller.js");
    const { authMiddlewareMember } = require("../middleware/session.js")

    const {validatorCreateParticipation, validatorGetParticipation, validatorGetActivityParticipation, checkValidActivity} = require("../validators/participation.validators.js")
  
    var router = require("express").Router();
    /**
    * @openapi
    * /api/participation:
    *  post:
    *      tags:
    *      - Participation
    *      summary: create a new member
    *      description: ''
    *      requestBody:
    *          content:
    *              application/json:
    *                  schema:
    *                      $ref: "#/components/schemas/participation"
    *      responses:
    *          '200':
    *              description: Returns the inserted object
    *          '401':
    *              description: Validation error
    *      security:
    *          - bearerAuth: []
    */
    router.post("/:activity_id", authMiddlewareMember, checkValidActivity,  participation.create);

    /**
     * @openapi
     * /api/participation:
     *  get:
     *      tags:
     *      - Participation
     *      summary: Get participations in the System
     *      description: ''
     *      responses:
     *          '200':
     *              description: Returns the participations
     *          '500':
     *              description: Server error
     */
    router.get("/", participation.findAll);
    
    /**
     * @openapi
     * /api/participation/{:id}:
     *  get:
     *      tags:
     *      - Participation
     *      summary: Get one participation in the System
     *      description: ''
     *      responses:
     *          '200':
     *              description: Returns the participation
     *          '500':
     *              description: Server error
     */
    router.get("/:id", validatorGetParticipation, participation.findOne);
  
    /**
     * @openapi
     * /api/participation/activity/{:activity_id}:
     *  get:
     *      tags:
     *      - Participation
     *      summary: Get the number of members that are in a participation
     *      description: ''
     *      responses:
     *          '200':
     *              description: Returns the number of members in the participation
     *          '500':
     *              description: Server error
     */
    router.get("/activity/:activity_id", validatorGetActivityParticipation, participation.getMembers);
    
    /**
     * @openapi
     * /api/participation/{id}:
     *  put:
     *      tags:
     *      - Participation
     *      summary: Update a participation
     *      description: Update a participation
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
     *                      $ref: "#/components/schemas/participation"
     *      responses:
     *          '200':
     *              description: Returns the inserted object
     *          '401':
     *              description: Validation error
     */
    router.put("/:id", validatorGetParticipation, validatorCreateParticipation, participation.update);
    
    /**
     * @openapi
     * /api/participation/{id}:
     *  delete:
     *      tags:
     *      - Members
     *      summary: Delete a participation
     *      description: Delete a participation by an id
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
     *      security:
     *          - bearerAuth: []
     */
    router.delete("/:activity_id", authMiddlewareMember, validatorGetParticipation, participation.deleteOne);

    app.use('/api/participation', router);
  };