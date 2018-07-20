import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './saga';

// const configureStore = (preloadedState:any) => {
//     return createStore (
//         rootReducer,
//         preloadedState
//     );
// }

// const store = configureStore({});
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store=createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;