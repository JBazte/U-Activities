const db = require("../models");
const Preferences = db.preferences;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate the request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create Preferences for a user
    const preference = {
      category: req.body.category,
      modality: req.body.modality,
      commitment_estimate: req.body.commitment_estimate,
      availability: req.body.availability,
      member_id: req.body.member_id
    };
  
    console.log(preference)
  
    // Save those Preferences in the database
    Preferences.create(preference)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Prefernce."
        });
      });
};

exports.findALl = (req, res) => {
  const mem = req.query.mem;

  Preferences.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving preferences."
      });
    });
}

// Find a single Member with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Preferences.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Cannot find a Preference with id" + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Preference with id=" + id
      });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Preferences.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Preference was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Preference with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Preference with id=" + id
        });
      });
};


exports.deleteOne = (req, res) => {
  const id = req.params.id;

  Preferences.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Preference was deleted successfully!"
        });
      } else {
        res.send({
          message: "Cannot delete preference with id=" + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete preference with id=" + id
      });
    });
}
