import {Dispatch
} from 'redux';
import {ADD} from './actionsTypes';

const add=()=>{
    return {type:ADD};
}
const addSync=()=>(dispath:Dispatch)=>{
    setTimeout(function () {
        return dispath(add())
    },1000)
}
export {
    add,
    addSync
}