const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
  const query = "SELECT * FROM facebook;";

  connection.query(query, (err, results) => {
    if (!err) {
      res.status(200).json({
        message: "success",
        results: results,
      });
    } else {
      res.status(500).json({
        message: "error occured",
        err: err,
      });
    }
  });
});

module.exports = router;
