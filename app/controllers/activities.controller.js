const db = require("../models");
const sequelize = require("sequelize");
const Activities = db.activities;
const Sponsors = db.sponsors
const Op = db.Sequelize.Op;
const {handleHttpError} = require("../utils/handleErrors")

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
      sponsor_id: req.sponsor.id
    };

    console.log(activity)

    Activities.create(activity)
        .then(data =>{
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
/**
exports.findAll = async (req, res) =>{
    const act = req.query.act;
    const data = await Activities.findAll()
    const newData = []

    for(let i in data)
    {
      let name = await Sponsors.findOne({
        where: {
            id: data[i].sponsor_id
        },
        attributes: ['user']
      }) 
      console.log(name)
      newData.push({
        id: data[i].id,
        name: data[i].name,
        description: data[i].description,
        category: data[i].category,
        action_field: data[i].action_field,
        involved_group: data[i].involved_group,
        location: data[i].location,
        start_date: data[i].start_date,
        end_date: data[i].end_date,
        modality: data[i].modality,
        min_members: data[i].min_members,
        max_members: data[i].max_members,
        sponsor_id: data[i].sponsor_id,
        sponsor_name: name.user
      })
      
    }
    res.send(newData);
  }
;
 */
exports.getActivities = (req, res) => {
  const sponsor_id = req.params.sponsor_id
  
  Activities.findAll({
    where: { sponsor_id: sponsor_id },
    //attributes: [ [sequelize.fn('COUNT', sequelize.col('id')), "n_activities"] ]
  })
    .then(data =>{
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving activities for sponsor " + sponsor_id + "."
      });
    });
}
// Retrieve all Activities from the database.
exports.findAll = async (req, res) =>{
    const act = req.query.act;
    const data = await Activities.findAll();
    const newData = await Promise.all(
      data.map(async (activity) => {
        const sponsor = await Sponsors.findOne({
          where: {
            id: activity.sponsor_id,
          },
          attributes: ['entity'],
        });

        return {
          ...activity.toJSON(),
          sponsor_name: sponsor.entity,
        };
      })
    );
    
  res.send(newData);
}

// Find a single Activity whit an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    const activity = await Activities.findByPk(id)
    

    if(activity)
    {
      const name = await Sponsors.findOne({
        where: {
            id: activity.sponsor_id
        },
        attributes: ['entity']
      })

      //...activity(se ponen los tres puntos para sacar toda la información del objeto "activity") y le añadimos el sponsor
      const newData = {
        ...activity.toJSON(),
        sponsor_name: name.entity
      }

      res.send(newData);
    }
    else{
      handleHttpError(res, "USER_NOT_EXISTS", 404)
      return
    }
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
                });
            } else {
                res.send({
                    message: `Cannot update Activity with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
              message: "Error updating activity with id=" + id
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

exports.findCategory = (req, res) => {
  const category = req.params.category;

  Activities.findAll({
    where: { category: category }
  })
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving all Activities."
      });
  });
}

exports.findActionField = (req, res) => {
  const actionField = req.params.actionField;

  Activities.findAll({
    where: { action_field: actionField }
  })
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving all Activities."
      });
  });
}

exports.findInvolvedGroup = (req, res) => {
  const involvedGroup = req.params.involvedGroup;

  Activities.findAll({
    where: { involved_group: involvedGroup }
  })
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving all Activities."
      });
  });
}

exports.orderDate = (req, res) => {

  Activities.findAll({
    order:  [["start_date", "asc"]]
  })
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving all Activities."
      });
  });
}
