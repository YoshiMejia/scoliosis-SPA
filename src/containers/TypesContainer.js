import React from 'react';
import types_of_scoly from '../types_of_scoly.jpeg';
import { Thoracic } from '../components/types_components/Thoracic';
import { Lumbar } from '../components/types_components/Lumbar';
import { Thoracolumbar } from '../components/types_components/Thoracolumbar';
// import { connect } from 'react-redux'


class TypesContainer extends React.Component {
    state = {
        showThoracic: false,
        showLumbar: false,
        showThoracolumbar: false
    }

    hideForm = (e) => {
        switch(e.target.className){
            case 'thoracic-button':
                this.setState({
                    ...this.state,
                    showThoracic: !this.state.showThoracic
                })
                break;
            case 'lumbar-button':
                this.setState({
                    ...this.state,
                    showLumbar: !this.state.showLumbar
                })
                break;
            case 'thoracolumbar-button':
                this.setState({
                    ...this.state,
                    showThoracolumbar: !this.state.showThoracolumbar
                })
                break;
            default: 
                console.log("unknown category");
                break;
        }

    }
       
    render(){
        return(
            <div id="types-container">
                <h1>Types of Scoliosis</h1>
                    {<img src={types_of_scoly} alt="types_of_scoliosis" className='type_pic'/>}

                    <p className='thoracic-button' onClick={this.hideForm}>Thoracic Curve</p>
                        {this.state.showThoracic && <Thoracic />}
                    <p className='lumbar-button' onClick={this.hideForm}>Lumbar Curve</p>
                        {this.state.showLumbar && <Lumbar />}
                    <p className='thoracolumbar-button' onClick={this.hideForm}>Thoracolumbar Curve</p>
                        {this.state.showThoracolumbar && <Thoracolumbar />}
            </div>
    )
}

}

// mapState = state => {
//     return{

//     }
// }
// export default connect(null, mapDispatch)(TypesContainer)
export default TypesContainer