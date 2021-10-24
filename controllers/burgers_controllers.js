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

module.exports = router;