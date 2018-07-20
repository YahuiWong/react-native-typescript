
import { ListView, Dimensions } from 'react-native';


export { NavigationActions } from 'react-navigation'

export const delay = (time:any) => new Promise(resolve => setTimeout(resolve, time))

export const createAction = (type:any) => (payload:any) => ({ type, payload });

export const DEVICE_WIDTH = Dimensions.get("window").width;

export const isEmptyObj = (obj:any) => {
    for (let i in obj) {
        if (obj[i]) return false;
    }
    return true;
}

export const indexOf = (arr:any, name:any, val:any) => {
    for (let i in arr) {
        if (arr[i][name] === val) {
            return i;
        }
    }
    return -1;
}
