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

    router.get("/", participation.findAll);
    
    router.get("/:id", validatorGetParticipation, participation.findOne);
  
    router.get("/activity/:activity_id", validatorGetActivityParticipation, participation.getMembers);
    
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