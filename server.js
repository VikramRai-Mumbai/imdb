const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

var corsOptions = {
  origin: "http://localhost:4000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./router/router"));

const db = require("./models");
db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`);
});
