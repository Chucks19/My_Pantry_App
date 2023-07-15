const express = require('express');
const { allworkout, singleworkout, post_new_workout, delete_workout, update_workout } = require('../Controllers/workoutController');

const router = express.Router();

// all workouts
router.get('/',allworkout);

// single workout

router.get('/:id',singleworkout)

router.post('/', post_new_workout)

router.delete('/:id',delete_workout)

router.patch('/:id',update_workout)

module.exports = router;