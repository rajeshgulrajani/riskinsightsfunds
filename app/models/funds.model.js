module.exports = (sequelize, Sequelize) => {
    const Funds = sequelize.define("funds", {
      /*title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }*/
      data: {
        type: Sequelize.JSONB,
      }
    });
  
    return Funds;
  };