import React from 'react';
import workout_spine from "../media/workout_spine.jpeg"


// use workoutplanner for this. create planners for each curve, link to each planner 
// planners will create
 const WorkoutsContainer = () => {
   
    return(
        <div className='workouts-container'>
            <h1 className="banner">Workouts container</h1>
                <br />
            {<img src={workout_spine} alt="workouts for scoliosis" className='workouts_pic' />}
        </div>
    )
}

export default WorkoutsContainer
