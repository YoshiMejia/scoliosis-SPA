import React, {useEffect} from "react";
import lumbar_skel from '../../media/lumbar_skel.png'

export function Lumbar(){
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className="lumbar_div">
            <div>
                <h1 className="banner">What is Lumbar Scoliosis?</h1>
            </div>

            <img src={lumbar_skel} alt='skeleton highlight lumbar portion of spine' id="lumbar_skel"/>
            <div className="lumbar_text">
                <p>Of the several different kinds of Scoliosis, Lumbar Scoliosis appears as a C shaped curve in the lower section of the spine.  Also, this curve may occur by itself, or it may occur with thoracic scoliosis, which typically appears with an S shape to the spine as the two curves form in different directions.
                <br />
                In most cases, lower back scoliosis becomes apparent during early to mid-childhood. However, in cases of adult degenerative scoliosis, it may also occur along with or as the result of other related conditions.
                <br />
                Furthermore, lumbar scoliosis occurs most frequently in the lower back because of degeneration.  In addition, It is not uncommon for older adults, people older than 65, to have this condition. We usually see this condition with spinal stenosis, or narrowing of the spinal canal.  Typically, spinal stenosis pinches the spinal nerves, and thus, makes it difficult for them to function properly. Moreover, our doctors find that back pain occurs with scoliosis in the lumbar region and begins gradually with activity. In conclusion, the curvature of the spine can appear relatively minor, so surgery only occurs when conservative methods fail to stop the pain.
                </p>
                
                    <div className="symptoms">
                        <h2>Scoliosis Symptoms</h2>
                    </div>
                    
                <p>To clarify, the symptoms of lumbar scoliosis differ from person to person and depend on a number of factors.  Also, these include age, the severity of the curve, the location of the curve, and more. Some patients experience little to no scoliosis pain even after years with the condition, while others experience pain right away.
                <br />
                Some symptoms of lower back scoliosis include:
                <br />
                </p>
            <ul>
                <li>Uneven shoulders</li>
                <li>Unusually raised hips</li>
                <li>Uneven rib cage alignment</li>
                <li>Uneven waist</li>
                <li>Body leaning to one side</li>
                <li>Back pain</li>
            </ul>
        </div>
    </div>
    )
}