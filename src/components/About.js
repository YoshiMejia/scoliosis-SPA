import React from "react";
import no_more_pain from '../media/no_more_pain.jpeg'
import pain_relief from '../media/pain_relief.jpeg'

export const About = () => (
  <div >
    <div>
      <h1 className="banner">Scoliosis Advice</h1>
    </div>

  <div id="main">
    <div>
      <img src={no_more_pain} alt='street sign that says no more pain' id="nomore_sign"/>
    </div>

    <div>
      <img src={pain_relief} alt='street sign that says pain relief' id="relief_sign"/>
    </div>

    <div>
      <h2>Welcome!</h2>
    </div>

    <div>
      <p>
        This site is for anyone looking for help on managing their scoliosis.
        Click on one of the links above to see our info!
      </p>
    </div>

    <div id="mayoclinic">
      According to MayoClinic: "Scoliosis is a sideways curvature of the spine that most often is diagnosed in adolescents. 
      [...] The cause of most childhood scoliosis is unknown.
      Most cases of scoliosis are mild, but some curves worsen as children grow. Severe scoliosis can be disabling."
    </div>

    </div>
  </div>
)