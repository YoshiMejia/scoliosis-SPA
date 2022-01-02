import React from 'react';
import workout_spine from '../workout_spine.jpeg'


class WorkoutsContainer extends React.Component {
    state = {

    }

    render(){
        return(
            <div className='workouts-container'>
             {<img src={workout_spine} alt="workouts for scoliosis" className='workouts_pic'/>}

            </div>
        )
    }
}

export default WorkoutsContainer