const db = require("../models");
const Members = db.members;
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

  // Create a Member
  const member = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    birth_date: req.body.birth_date,
    dni: req.body.dni,
    genre: req.body.genre,
    studies: req.body.studies,
    phone: req.body.phone,
    extra_info: req.body.extra_info
  };

  console.log(member)

  // Save Member in the database
  Members.create(member)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Member."
      });
    });
  
  
};



// Retrieve all Members from the database.

exports.findAll = (req, res) => {
  const mem = req.query.mem;
  //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Members.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    });
};

// Find a single Member with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Members.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Cannot find a Member with id" + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Member with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Members.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Member was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update member with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating member with id=" + id
      });
    });
};

exports.deleteOne = (req, res) => {
  const id = req.params.id;

  Members.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Member was deleted successfully!"
        });
      } else {
        res.send({
          message: "Cannot delete member with id=" + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete member with id=" + id
      });
    });
}

  

