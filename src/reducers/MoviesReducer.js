import { GET_MOVIES, LOADING_MOVIES_START, LOADING_MOVIES_END } from '../Actions/MoviesActionTypes'
import {api_key} from "../Constants/Constants";
import { sortingTypes } from '../Constants/Constants'



const initialState = {
    moviesList: [],
    isLoading: false,
    sortType: sortingTypes.BY_DEFAULT
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {
            console.log(action.payload)
            const { payload: {results}} = action;
            return {
                ...state, moviesList: results
            }
        }
        case LOADING_MOVIES_START:{
            return {
                ...state,
                isLoading: true
            };
        }
        case LOADING_MOVIES_END:{
            return {
                ...state,
                isLoading: false
            };
        }
        default:
            return state
    }
};
