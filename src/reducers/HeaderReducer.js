import {INCREMENT, DECREMENT, LOG_TOGGLE, SORT_BY, GET_MOVIES} from '../Actions/MoviesActionTypes'
import {api_key} from "../Constants/Constants";


const initialState = {
    darkTheme: false,
    counter: 0,
    userIsAuth: true
};

export const headerReducer = (state = initialState, action) => {
    debugger
    console.log('action');
    switch (action.type) {
        case INCREMENT: {
            console.log("incremented");
            return {...state, counter: state.counter +1};
        }
        case DECREMENT: {
            return {...state, counter: state.counter -1};
        }
        case LOG_TOGGLE: {
            return {...state, userIsAuth: !state.userIsAuth};
        }
        default:
            return state
    }
};
