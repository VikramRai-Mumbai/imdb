module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Tango@123",
  DB: "imdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
