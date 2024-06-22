const express = require("express")
const mongoose = require("mongoose")
const axios = require("axios")
const {getGames} = require("./controller/games");
const Game = require('./model/games');


const app = express();
const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/gamestore', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

getGames();

app.use(express.static('public'));

app.get('/store/games', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (error) {
        res.status(500).send(error);
    }
});



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});    