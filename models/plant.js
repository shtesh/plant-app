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
    imageURL:{type:String, default:"https://bs.floristic.org/image/o/6f45044d11b80e84508547dd1d6b15ce83805e2d"}                   
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    });
module.exports = model('Plant', PlantSchema);

    