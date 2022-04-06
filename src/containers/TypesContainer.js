import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { AllTypes } from '../components/types_components/AllTypes';
// import types_of_scoly from '../types_of_scoly.jpeg';
import { Thoracic } from '../components/types_components/Thoracic';
import { Lumbar } from '../components/types_components/Lumbar';
import { Thoracolumbar } from '../components/types_components/Thoracolumbar';
import { TypesBio } from '../components/types_components/Types_Bio';
// import { connect } from 'react-redux'


const TypesContainer = () => {

const {typeName} = useParams();
const typesBio = <TypesBio />
const thoracic = <Thoracic />
const lumbar = <Lumbar />
const thoracolumbar = <Thoracolumbar />

    return(
        <>
            {typesBio}
            {/* <h1>{type}</h1> */}
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