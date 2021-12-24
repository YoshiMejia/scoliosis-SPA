//update state, freshly pasted
export const typesReducer = (state, action) => {
        switch(action.type){
            case 'SHOW_THORACIC':
                return {...state, showThoracic: !state.showThoracic
                }
            // break
            default:
            return console.log(state);
        }
}