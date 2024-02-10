var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameData = new Schema({
    gamename:String,
    gamestudio:String
});

var playerScore = new Schema({
    score:String,
    username:String
})

mongoose.model('games', gameData);

mongoose.model('playerData', playerScore);