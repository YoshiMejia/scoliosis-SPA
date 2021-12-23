import React from 'react';
import types_of_scoly from '../types_of_scoly.jpeg';
import { Thoracic } from '../components/Thoracic';
import { Lumbar } from '../components/Lumbar';


class TypesContainer extends React.Component {
    state = {
        showThoracic: false,
        showLumbar: false
    }

    hideForm = (e) => {
        if (e.target.className === 'thoracic-button'){
            this.setState({
                ...this.state,
                showThoracic: !this.state.showThoracic
            })
        } else if (e.target.className === 'lumbar-button'){
            this.setState({
                ...this.state,
                showLumbar: !this.state.showLumbar
            })
        }
    }
       
    render(){
        return(
            <div id="types-container">
                <h1>Types of Scoliosis</h1>
                    {<img src={types_of_scoly} alt="types_of_scoliosis" className='type_pic'/>}

                    <p className='thoracic-button' onClick={this.hideForm}>Thoracic Curve</p>
                        {this.state.showThoracic && <Thoracic />}
                <br />
                    <p className='lumbar-button' onClick={this.hideForm}>Lumbar Curve</p>
                        {this.state.showLumbar && <Lumbar />}
                    {/* 
                    container will hold Types.js which will be components of data holding info on each curve in the photo. 

                    onClick of each link, an info box will open up and hold more info on each curve. there will be links to the excercises for each Type.
                    
                    */}
            </div>
    )
}

}
export default TypesContainer