import initialState from './initialState';
 
export default function travelReducer(state = initialState.travel, action) {
    switch(action.type) {
         
        /* Add contacts to the state array */
      
        case "ADD_TRAVEL": {
            return {
                ...state,
                travelList: [...state.travelList, state.newTravel]
            }
        }
         
        /* Handle input for the contact form. 
        The payload (input changes) gets merged with the newContact object
        */
 
        case "HANDLE_INPUT_CHANGE": {
             
            return {
                ...state, newTravel: {
                    ...state.newTravel, ...action.payload }
            }
        }
 
        default: return state;
    }
}