const mongoose = require('mongoose');

const Schema = mongoose.Schema


const workoutschema = new Schema({
    title:{
        type: String,
        required: [true,"title is required"]
    },

    reps:{
        type:String,
        required:[true,"reps i required"],
    },

    load:{
        type:Number,
        required:[true,"load i required"]
    }
}, { timestamps: true})

const workout = mongoose.model('workouts',workoutschema)
module.exports = {workout}