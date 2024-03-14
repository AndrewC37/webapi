var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dataToSend;

require('../models/GameData')
require('../models/UnityGameData')
var gameModel = mongoose.model("games");
var unityModel = mongoose.model("unitygames");
var playerModel = mongoose.model("playerData");

router.get('/getdata', function(req, res)
{
    gameModel.find({}).then(function(games)
    {
        res.json({games});
    }).catch(function(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error'});
    });
});

router.get('/getScores', function(req,res){
    res = playerModel.find();
    cursor.sort({score: -1});
    
});

router.get('/gameSearch', function(req,res){
    res = gameModel.find();
    
});

router.get('/gameSort', function(req,res){
    res = gameModel.find();
    //res.sort({});
});

router.post('/deletegame', function(req,res)
{
    console.log(req.body);
    gameModel.findByIdAndDelete(req.body.game._id).exec();
    res.redirect('games.html');
})

router.post('/updategame', function(req,res)
{
    gameModel.findByIdAndUpdate(req.body.id, {gamename:req.body.game}).then(
            function()
            {
                res.redirect('games.html');
            });
});

router.post('/saveGame', function(req,res)
{
    console.log(req.body);
    new gameModel(req.body).save().then(function()
    {
        res.redirect('games.html');
    })
});

router.post('/saveScore', function(req,res)
{
    new playerModel(req.body).save().then(function(){
        console.log(req.body);
        res.redirect('/index');
    })
    
})

router.post('/unity', function(req,res)
{
    console.log("unity posted data");
    console.log(req.body);
    dataToSend = req.body;
    new unityModel(req.body).save().then(function()
    {
        res.redirect('games.html');
    })
})

router.post('deleteUnity', function(req,res)
{
 console.log("Deleting item");
 unityModel.findByIdAndDelete(req.body._id).exec();
})

router.post('updateUnity', function(req,res)
{
 console.log("Updating item");
 unityModel.findByIdAndUpdate(req.body._id).exec();
})

//sorts by high score (level)
router.get('/getUnity', function(req,res)
{
    console.log("sent");

    unityModel.find({}).sort({level: -1}).then(function(playerdata){
        console.log(playerdata);
          res.json({playerdata});
    }).catch(function(err){
        console.error(err);
        res.status(500).json({error: 'Internal Server Error'});
    })
})


module.exports = router;