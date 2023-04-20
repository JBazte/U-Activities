const db = require("../models");
const Activities = db.activities;
const Op = db.Sequelize.Op;

//CREATE ONE ACTIVITY
exports.create = (req, res) => {

    // Validate the request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create an Activity
    const activity = {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      action_field: req.body.action_field,
      involved_group: req.body.involved_group,
      location: req.body.location,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      modality: req.body.modality,
      min_members: req.body.min_members,
      max_members: req.body.max_members,
      sponsor_id: req.body.sponsor_id
    };

    console.log(activity)

    Activities.create(activity)
        .then()(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Activity."                
            });
        });
};

// Retrieve all Activities from the database.

exports.findAll = (req, res) =>{
    const act = req.query.act;

    Activities.findAll()
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving all Activities."
            });
        });
};

// Find a single Activity whit an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Activities.findByPk(id)
        .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(404).send({
                message: "Cannot find a Activity with id" + id
              });
            }
          })
        .catch(err => {
            res.status(500).send({
              message: "Error retrieving Activity with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Activities.update(req.body, {
        where: { id:id }
    })
        .then(num =>{
            if(num == 1){
                res.send({
                    message: "Activity was updated successfully."
                })
            } else {
                res.send({
                    message: `Cannot update Activity with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
              message: "Error updating member with id=" + id
            });
        });
}

exports.deleteOne = (req, res) => {
    const id = req.params.id;

    Activities.destroy({
        where: { id:id }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Activity was deleted successfully!"
          });
        } else {
          res.send({
            message: "Cannot delete activity with id=" + id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete activity with id=" + id
        });
    });
}