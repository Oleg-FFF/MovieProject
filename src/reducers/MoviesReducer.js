import { GET_MOVIES, LOADING_MOVIES_START, LOADING_MOVIES_END, SET_PAGE } from '../Actions/MoviesActionTypes'
import {api_key} from "../Constants/Constants";
import { sortingTypes } from '../Constants/Constants'



const initialState = {
    moviesList: [],
    isLoading: false,
    isLoaded: false,
    sortType: sortingTypes.BY_DEFAULT,
    page: 1,
    totalPages: 10
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {
            console.log(action.payload)
            const { payload: {results, page, total_pages}} = action;
            return {
                ...state, moviesList: results, totalPages: total_pages
            }
        }
        case LOADING_MOVIES_START:{
            return {
                ...state,
                isLoading: true
            };
        }
        case SET_PAGE: {
            console.log(action.payload)
            const { payload: page} = action;
            return {
                ...state, page
            }
        }
        case LOADING_MOVIES_END:{
            return {
                ...state,
                isLoading: false,
                isLoaded: true
            };
        }
        default:
            return state
    }
};
