import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from '../reducers/RootReducer';
import { saveMoviesToLocalStorage, saveGenresToLocalStorage } from '../middlewares';


export const store = createStore(createRootReducer(), composeWithDevTools(compose(applyMiddleware(thunk), applyMiddleware(saveMoviesToLocalStorage, saveGenresToLocalStorage))));
// const initialState = {
//     counter: 0,
//     userIsAuth: false
// };
//
// export default initialState;

//composeWithDevTools()
