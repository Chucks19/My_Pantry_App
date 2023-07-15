const { workout } = require("../model/workoutModel");
const mongoose  = require('mongoose')

function isValidErr(err) {

    let errors = {title:'',reps:'',load:''}


    if (err.message.includes("workouts validation failed")) {
        Object.values(err.errors).forEach(({properties})=>{
            // errors[properties.path]
            errors[properties.path] = properties.message;


            
        });
    } 
    return errors;
    console.log(errors);

    
}



const allworkout =async (req,res)=>{
    const workouts  = await workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}

const singleworkout =async  (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({err:"no such workout"})
    }

    const workouts  = await workout.findById(id)

    if (!workouts) {
        return res.status(400).json({err:"no such workout"})
    }
    res.status(200).json(workout)
}

const post_new_workout =async (req, res) => {
    const {title,load,reps} = req.body

    try {
        const workouts = await workout.create({title,load,reps});
        res.status(200).json(workouts)
    } catch (error) {
        // console.log(error);

        const err = isValidErr(error)

        // console.log(err);
        res.status(400).json({msg:err})

       
    }
}

const delete_workout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({err:"no such workout"})
    }

    const workouts = await workout.findByIdAndDelete({_id: id})

    if (!workouts) {
        return res.status(400).json({err:"no such workout"})
    }
    res.status(200).json(workout)
}

const update_workout =async  (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({err:"no such workout"})
    }

    const workouts = await workout.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if (!workouts) {
        return res.status(400).json({err:"no such workout"})
    }
    res.status(200).json(workout)

}

module.exports = {allworkout,singleworkout,post_new_workout,delete_workout,update_workout}