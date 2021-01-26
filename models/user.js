const {Schema, model} = require('mongoose');
const emailRegex = /^\S+@\S+\.\S+$/;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            match: [emailRegex, "Please use a valid email address"],
        },
        username: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
        },
        passwordHash: {
            type: String,
            required: true,
            trim: true,
        },
        profilePicture: { type: String, default: 'https://github.com/kentcdodds/jest-cypress-react-babel-webpack.git' },
        favorites: [
        { 
            type: Schema.Types.ObjectId,
            ref: "Plant"
        }
    ],
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

module.exports = model("User", UserSchema);
