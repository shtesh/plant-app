const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PlantSchema = new Schema(
{
    name: String,                              
    height: Number,                        
    light: String,                               
    floweringTime: String,               
    native: String,
    tags: String,                            
    imageURL: String                       
    },
    {
        timestamps: true
    });
module.exports = model('Plant', PlantSchema);

    