var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAll
  burger.selectAll(function(burgerData) {
    var myObject = { burgers: burgerData };
    console.log(myObject);
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/insert", function(req, res) {
  // takes the request object using it as input for buger.insertOne
  burger.insertOne(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  burger.updateOne(req.body.burger_id, function(result) {
    // using MySQL update callback will return a log to console
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;