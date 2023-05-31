module.exports = app => {
    const administrators = require("../controllers/administrators.controller.js");

    const {validatorCreateAdministrator, validatorGetAdministrator} = require("../validators/administrators.validators.js")
  
    var router = require("express").Router();

    // Create a new admin, it will be done by db
    router.post("/", validatorCreateAdministrator, administrators.create);

    //Get all the admins
    router.get("/", administrators.findAll);

    /**
     * @openapi
     * /api/administrators/{id}:
     *  get:
     *      tags:
     *      - Administrators
     *      summary: Get a admin by id in the System
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
     *              description: Returns the admin
     *          '500':
     *              description: Server error
     */
    router.get("/:id", validatorGetAdministrator, administrators.findOne);

    /**
     * @openapi
     * /api/administrators/{id}:
     *  put:
     *      tags:
     *      - Administrators
     *      summary: Update a admin
     *      description: Update a admin
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
     *                      $ref: "#/components/schemas/administrators"
     *      responses:
     *          '200':
     *              description: Returns the inserted object
     *          '401':
     *              description: Validation error
     */
    router.put("/:id", validatorGetAdministrator, validatorCreateAdministrator, administrators.update);

    /**
     * @openapi
     * /api/administrators/{id}:
     *  delete:
     *      tags:
     *      - Administrators
     *      summary: Delete a admin
     *      description: Delete a admin by an id
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
    router.delete("/:id", validatorGetAdministrator, administrators.deleteOne);
  
    app.use('/api/administrators', router);
  };