const db = require("../models");
const Participations = db.participation;
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
      member_id: req.body.member_id,
      activity_id: req.body.activity_id
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
    const id = req.params.id;
  
    Participations.destroy({
      where: { id: id }
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