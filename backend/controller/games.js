const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const Game = require('../model/games');


const getGames = async () => {
    try {
        const response = await axios.get('https://www.freetogame.com/api/games');
        const games = response.data;

        // Clear existing data
        await Game.deleteMany();

        // Insert new data
        await Game.insertMany(games);

        console.log('Data successfully stored');
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
};

module.exports = {
    getGames,
}