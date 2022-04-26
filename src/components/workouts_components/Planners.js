import React, { useState} from "react";

export function Planners (){
    const [planners, setPlanners] = useState([])
    const [workouts, setWorkouts] = useState([])
     
    return(
        <div id="planners-container">
            <h1>Planners container</h1>
        </div>
    )
}