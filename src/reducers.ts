import { combineReducers } from 'redux';
import {ADD} from './actionsTypes';
import {CounterState} from './statesTypes';

const defaultState={
    count:0
} as CounterState;
function counter(state=defaultState,action:any){
switch (action.type) {
    case ADD:
        return {...state,count:state.count+1};
    default:
        return state;
}
}
export default combineReducers({
    counter:counter
});