import { combineReducers } from 'redux'
import travelReducer from './travelReducer';
import uiReducer from './uiReducer';
 
const rootReducer = combineReducers({
     
    travel: travelReducer,
    ui: uiReducer,
   
})
 
export default rootReducer;