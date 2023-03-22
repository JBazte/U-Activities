const db = require("../models");
const Participations = db.Participations;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate the request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Participation
    const participation = {
      member: req.body.member,
      activity: req.body.activity
    };
  
    console.log(participation)
  
    // Save Participation in the database
    Participations.create(participation)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Participation."
        });
      });
};

exports.deleteOne = (req, res) => {
    const member = req.params.member;
    const activity = req.params.activity;
  
    Participations.destroy({
      where: { member: member, activity: activity }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Participation was deleted successfully!"
          });
        } else {
          res.send({
            message: "Cannot delete participation with id=" + id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete participation with id=" + id
        });
      });
}