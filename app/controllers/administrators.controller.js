const db = require("../models");
const Administrators = db.administrators;
const Op = db.Sequelize.Op;

//CREATE ONE MEMBER
exports.create = (req, res) => {

    // Validate the request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create an Admin
    const administrator = {
      user: req.body.user,
      email: req.body.email,
      phone: req.body.phone
    };
  
    console.log(administrator)
  
    // Save Admin in the database
    Administrators.create(administrator)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Admin."
        });
      });
};

exports.deleteOne = (req, res) => {
    const id = req.params.id;
  
    Administrators.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Admin was deleted successfully!"
          });
        } else {
          res.send({
            message: "Cannot delete admin with id=" + id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ad with id=" + id
        });
      });
}