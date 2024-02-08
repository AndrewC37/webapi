///*
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
//var bodyparser = require('body-parser');

app.use(express.json);

//connect to mongo db via mongoose
mongoose.connect("mongodb://localhost:27017/WebAPI").then(function()
    {
        console.log("Connected to mongoDB database");
    }
    ).catch(function(err)
    {
        console.log(err);
    });

//load static folder, to get the image
app.use(express.static(__dirname+'/pages'))

app.listen(5000, function(){
    console.log("Running on port 5000");
})

