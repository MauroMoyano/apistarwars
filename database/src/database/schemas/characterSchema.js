const { Schema } = require("mongoose");

const statesGender = ["Male", "Female", "n/a", "hermaphrodite", "none" ];

const  characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: {type: String, enum: statesGender},
    homeworld: {type: String, ref:"Planet" },
    films: [ {type: String, ref: "Film" } ]
})

module.exports = characterSchema;