import React from "react"
import { Link } from "react-router-dom"
import types_of_scoly from '../../types_of_scoly.jpeg';

export function TypesBio(){

    return(
        <div className="types_bio">
            {<img src={types_of_scoly} alt="types_pic" className='types_pic'/>}

            <h1>What Sets the Different Types of Scoliosis Apart?</h1>

            <p>There are many ways to determine the differences between the various forms of scoliosis.  The most common method uses etiology or the underlying cause for the condition. Most experts feel there are three categories of scoliosis:
            <br />
            <br />
                <ul>  
                    <li>
                    <span>idiopathic</span>
                    </li>
                    <li> congenital</li>
                    <li> neuromuscular</li>
                </ul>
            Idiopathic is the most common type of scoliosis. This means that the cause is unknown or that there is no single factor that contributes to the development of the disease.
            <br />
            Congenital forms of scoliosis result from a spinal defect present at birth. This is usually detected at a much earlier age than idiopathic forms of scoliosis.
            <br />
            Neuromuscular scoliosis is spinal curvature that develops because of some kind of other diseases.  Examples include muscular dystrophy or cerebral palsy. This form of scoliosis tends to progress much more quickly than others.
            <br />
            Knowing how spinal curvatures are classified is important. It may provide a foundation of knowledge on how to treat a specific type of scoliosis.
            </p>
            <br />
            <h4>Choose one of the types below to learn more!</h4>
            <Link to={"/types/lumbar"}> Lumbar curve</Link>
        </div>
    )
}