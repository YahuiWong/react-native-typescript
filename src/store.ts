import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const configureStore = (preloadedState:any) => {
//     return createStore (
//         rootReducer,
//         preloadedState
//     );
// }

// const store = configureStore({});
const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;