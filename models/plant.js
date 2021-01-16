const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PlantSchema = new Schema(
{
    name: String,                              
    height: Number,                        
    light: String,                               
    floweringTime: String,               
    native: [String],
    tags: [String],                            
    imageURL: String                     
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    });
module.exports = model('Plant', PlantSchema);

    