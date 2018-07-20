import {delay} from 'redux-saga';
import {put,takeEvery,all} from 'redux-saga/effects';
import {ADD} from './actionsTypes';
function* addSync(){
    yield delay(1000);
    yield put({type:ADD})
}
function* watchaddSync(){
yield takeEvery("addSync",addSync)
}

export default function* rootSaga(){
    yield all([
        watchaddSync()
    ])
}