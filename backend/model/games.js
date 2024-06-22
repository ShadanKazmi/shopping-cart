const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    id: Number,
    title: String,
    thumbnail: String,
    short_description: String,
    game_url: String,
    genre: String,
    platform: String,
    publisher: String,
    developer: String,
    release_date: String,
    freetogame_profile_url: String
});

const Game = mongoose.model('game', gameSchema);

module.exports = Game;