import types_of_scoly from '../types_of_scoly.jpeg';

export const TypesContainer = () => {

    return(
        <div id="types-container">
            <h1>Types of Scoliosis</h1>
            {<img src={types_of_scoly} alt="types_of_scoliosis" className='type_pic'/>}
            <p>

            </p>
                  {/* 
                  container will hold Types.js which will be components of data holding info on each curve in the photo. 
                  onClick of each link, an info box will open up and hold more info on each curve. there will be links to the excercises for each Type.
                  
                  */}
              </div>
    )

}