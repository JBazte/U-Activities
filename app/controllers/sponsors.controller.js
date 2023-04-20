const db = require("../models");
const Sponsors = db.sponsors;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate the request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Member
    const sponsor = {
      entity: req.body.entity,
      user: req.body.user,
      email: req.body.email,
      password: req.body.password
    };
  
    console.log(sponsor)
  
    // Save Member in the database
    Sponsors.create(sponsor)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Sponsor."
        });
      });
};



// Retrieve all Sponsors from the database.

exports.findAll = (req, res) => {
    const spon = req.query.spon;
    //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Sponsors.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving sponsors."
        });
      });
};
  
// Find a single Member with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Sponsors.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: "Cannot find a Sponsor with id" + id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Sponsor with id=" + id
        });
      });
};
  
exports.update = (req, res) => {
    const id = req.params.id;
  
    Sponsors.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Sponsor was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update sponsor with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating sponsor with id=" + id
        });
      });
};
  
exports.deleteOne = (req, res) => {
    const id = req.params.id;
  
    Sponsors.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Sponsor was deleted successfully!"
          });
        } else {
          res.send({
            message: "Cannot delete sponsor with id=" + id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete sponsor with id=" + id
        });
      });
}