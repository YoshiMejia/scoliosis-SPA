import React from "react"
import { Link } from "react-router-dom"
import lumbar from '../../media/lumbar.png'
import healthy from '../../media/healthy.png'
import combined from '../../media/combined.png'
import thoracic from '../../media/thoracic.png'
import thoraco_lumbar from '../../media/thoraco_lumbar.png'


export function TypesBio(){

    return(
        <div className="types_bio">
            <div>
                <h1>What Sets the Different Types of Scoliosis Apart?</h1>
            </div>

        <div id="main">
            <h4>Choose one of the types below to learn more!</h4>

            <div id="types_links">
                <Link to={"/types/healthy"}>
                    <img src={healthy} alt='healthy_pic' id="spine_pic"/>
                </Link>
                <Link to={"/types/lumbar"}>
                    <img src={lumbar} alt='lumbar_pic' id="spine_pic"/>
                </Link>
                <Link to={"/types/thoracic"}>
                    <img src={thoracic} alt='thoracic_pic' id="spine_pic"/>
                </Link>
                <Link to={"/types/thoraco_lumbar"}>
                    <img src={thoraco_lumbar} alt='thoraco_lumbar_pic' id="spine_pic"/>
                </Link>
                <Link to={"/types/combined"}>
                    <img src={combined} alt='combined_pic' id="spine_pic"/>
                </Link>
            </div>

        <div className="types_text">
            <p>
            There are many ways to determine the differences between the various forms of scoliosis.  The most common method uses etiology or the underlying cause for the condition. Most experts feel there are three categories of scoliosis:
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
        </div>
    </div>
    </div>
    )
}