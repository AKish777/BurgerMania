const { application } = require('express');

const express = require('express')();
const port = 3000;

const bodyParser = require('express'),json;
application.use(bodyParser());

application.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})