const db = require("../models");
const sequelize = require("sequelize")
const Participations = db.participation;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Create a Participation
    const participation = {
      member_id: req.member.id,
      activity_id: req.params.activity_id
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

exports.findAll = (req, res) =>{
  const part = req.query.part;

  Participations.findAll()
    .then(data =>{
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving participations."
      });
    });
}

exports.getMembers = (req, res) => {
  const activity_id = req.params.activity_id
  console.log(activity_id)
  Participations.findAll({
    where: { activity_id: activity_id },
    attributes: [ [sequelize.fn('COUNT', sequelize.col('member_id')), "n_members"] ]
  })
    .then(data =>{
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving participations."
      });
    });
}  

exports.findOne = (req, res) => {
  const id = req.params.id

  Participations.findByPk(id)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: "Cannot find a Participation with id" + id
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Participation with id=" + id
    });
  });
}

exports.update = (req,res) => {
  const id = req.params.id;

  Participations.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Participation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update participation with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating participation with id=" + id
      });
    });
}

exports.deleteOne = (req, res) => {
    const idMember = req.member.id;
    const idActivity = req.params.activity_id;
  
    Participations.destroy({
      where: { member_id: idMember, activity_id: idActivity }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Participation was deleted successfully!"
          });
        } else {
          res.send({
            message: "Cannot delete participation from member with id=" + idMember + "and activity with id="  + id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete participation with id=" + id
        });
      });
}