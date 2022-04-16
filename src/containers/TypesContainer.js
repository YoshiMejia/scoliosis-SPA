import React from 'react';
import { TypesBio } from '../components/types_components/Types_Bio';
// import { connect } from 'react-redux'

const TypesContainer = () => {

    return(
        <>
            {<TypesBio />}
        </>
    )
}

export default TypesContainer
    
    // return(
    //     <div id="types-container">
    //         <br />
    //             {<img src={workout_spine} alt="workouts_pic" className='workouts_pic'/>}
    //         < TypesBio/>
    //             {/* {<img src={types_of_scoly} alt="types_of_scoliosis" className='type_pic'/>} */}
    
    //             <p className='thoracic-button' onClick={hideForm()}>Thoracic Curve</p>
    //                 {this.state.showThoracic && <Thoracic />}
    //             <p className='lumbar-button' onClick={hideForm()}>Lumbar Curve</p>
    //                 {this.state.showLumbar && <Lumbar />}
    //             <p className='thoracolumbar-button' onClick={hideForm()}>Thoracolumbar Curve</p>
    //                 {this.state.showThoracolumbar && <Thoracolumbar />}
    //     </div>
    // )
// mapState = state => {
    //     return{
        
        //     }
        // }
        // export default connect(null, mapDispatch)(TypesContainer)
        // const hideForm = (e) => {
        //     switch(e.target.className){
        //     case 'thoracic-button':
        //         this.setState({
        //             ...this.state,
        //             showThoracic: !this.state.showThoracic
        //         })
        //         break;
        //     case 'lumbar-button':
        //         this.setState({
        //             ...this.state,
        //             showLumbar: !this.state.showLumbar
        //         })
        //         break;
        //     case 'thoracolumbar-button':
        //         this.setState({
        //             ...this.state,
        //             showThoracolumbar: !this.state.showThoracolumbar
        //         })
        //         break;
        //     default: 
        //         console.log("unknown category");
        //         break;
        //         }
        //     }