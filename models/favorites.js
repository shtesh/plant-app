const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const favoriteSchema = new Schema({
    plant_id: String
});

module.exports = model('Favorite', favoriteSchema);
