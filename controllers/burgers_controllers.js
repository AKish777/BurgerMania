var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.select(function(data){
        var burgerOb = {
            burgers: data
        };
        res.render("index", burgerOb)
    });
});

router.post("/api/burgers", function(req, res){
    burger.insert([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({id: result.insertId});
    });
});

module.exports = router;