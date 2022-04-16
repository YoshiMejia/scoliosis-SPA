import React from 'react';
import workout_spine from "../media/workout_spine.jpeg"



 const WorkoutsContainer = () => {
   
    return(
        <div className='workouts-container'>
            <h1>Workouts container</h1>
            <br />
            {<img src={workout_spine} alt="workouts for scoliosis" className='workouts_pic' />}
        </div>
    )
}

export default WorkoutsContainer
