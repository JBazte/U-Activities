module.exports = app => {
    const participation = require("../controllers/participation.controller.js");
    const { authMiddlewareMember } = require("../middleware/session.js")

    const {validatorCreateParticipation, validatorGetParticipation, validatorGetActivityParticipation, checkValidActivity} = require("../validators/participation.validators.js")
  
    var router = require("express").Router();

    /**
     * @openapi
     * /api/auth/activity/:activity_id:
     *  post:
     *      tags:
     *      - Registered User
     *      summary: A member gets involved with an activity, creating a new row
     *      description: ''
     *      parameters:
    *          -   name: activity_id
    *              in: path
    *              description: activity_id that need to be updated
    *              required: true
    *              schema:
    *                  type: string
     *      responses:
     *          '200':
     *              description: Delete a sponsor
     *          '403':
     *              description: Errors in parameters or not found sponsor
     *          '500':
     *              description: Server error
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
     * /api/auth/activity/:activity_id:
     *  delete:
     *      tags:
     *      - Registered User
     *      summary: A member deletes its participation with an activity
     *      description: ''
     *      parameters:
    *          -   name: activity_id
    *              in: path
    *              description: activity_id participation that need to be deleted
    *              required: true
    *              schema:
    *                  type: string
     *      responses:
     *          '200':
     *              description: Delete a sponsor
     *          '403':
     *              description: Errors in parameters or not found sponsor
     *          '500':
     *              description: Server error
     *      security:
     *          - bearerAuth: []
     */
    router.delete("/:activity_id", authMiddlewareMember, validatorGetParticipation, participation.deleteOne);

    app.use('/api/participation', router);
  };