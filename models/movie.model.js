module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movie", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    relese: {
      type: Sequelize.INTEGER,
    },
    budget: {
      type: Sequelize.DATE,
    },
  });

  return Movie;
};
