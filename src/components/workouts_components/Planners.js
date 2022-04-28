import React, { useEffect, useState} from "react";
import Axios from 'axios';

export function Planners (){
    const [planners, setPlanners] = useState([])
    const [workouts, setWorkouts] = useState([])
     
    
    useEffect(() => {
        getPlanners()
    }, [])
    const url = 'http://127.0.0.1:3000/'
    const getPlanners = () => {
        debugger
        console.log('sfhkj');
        Axios.get(`http://127.0.0.1:3000/planners`)
        .then((resp)=>{
            const allPlanners = resp.data
            setPlanners(allPlanners)
        })
        .catch(error => console.error(`Error: ${error}`))
    }
    
    return(
        <div id="planners-container">
            <h1>Planners container</h1>
        </div>
    )
}