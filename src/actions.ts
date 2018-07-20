import {ADD} from './actionsTypes';

const add=()=>{
    return {type:ADD};
}
const addSync=(dispath:any)=>{
    setTimeout(function () {
        return dispath(add())
    },1000)
}
export {
    add,
    addSync
}