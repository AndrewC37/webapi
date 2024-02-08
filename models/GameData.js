var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameData = new Schema({
    gamename:String,
    gamestudio:String
});

mongoose.model('games', gameData);