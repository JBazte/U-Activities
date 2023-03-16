module.exports = (sequelize, Sequelize) => {
    const Members = sequelize.define("members", {
      /*title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }*/

      /*id: {
        type: Sequelize.INTEGER
      },*/
      first_name: {
        type: Sequelize.STRING(50)
      },
      last_name: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(50),
        validate: {
          min: -90,
          max: 90
        }
      },
      password: {
        type: Sequelize.STRING(50),
        validate: {
          len: [8, 20]
        }
      },
      phone: {
        type: Sequelize.STRING(50)
      }
      

    }, { timestamps:false });
  
    return Members;
  };