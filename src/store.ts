import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

// const configureStore = (preloadedState:any) => {
//     return createStore (
//         rootReducer,
//         preloadedState
//     );
// }

// const store = configureStore({});
const store=createStore(rootReducer);
export default store;