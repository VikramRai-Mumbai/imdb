const express = require("express");
const router = express.Router();

// simple route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to router." });
});

module.exports = router;
