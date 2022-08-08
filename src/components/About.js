import React from "react";
import no_more_pain from '../media/no_more_pain.jpeg'

export const About = () => (
  <div id="main">
    <div>
      <h1>Scoliosis Advice</h1>
    </div>

  <div>
    <img src={no_more_pain} alt='street sign that says no more pain' id="nomore_sign"/>
  </div>
    <div>
      <h3>Welcome!</h3>
    </div>

    <div>
      <p>This site is for anyone looking for help on managing their scoliosis.
      < br/>
      Click on one of the links above to see our info!</p>
      < br/>
    </div>

    <text>
      According to MayoClinic: "Scoliosis is a sideways curvature of the spine that most often is diagnosed in adolescents. 
      [...] The cause of most childhood scoliosis is unknown.
      < br/>
      Most cases of scoliosis are mild, but some curves worsen as children grow. Severe scoliosis can be disabling."
    </text>

    < br/>
  </div>
)