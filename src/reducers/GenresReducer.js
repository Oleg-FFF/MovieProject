import {api_key} from "../Constants/Constants";
import {GET_GENRES, LOADING_GENRES_START, LOADING_GENRES_END, GET_GENRES_ERROR} from "../Actions/GenreActionsTypes";

const initialState = {
    genresList: {},
    isLoading: false
};

export const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES: {
            console.log(action.payload);
            const { payload: {genres} } = action;
            return {
                ...state, genresList: genres
            }
        }
        case LOADING_GENRES_START:{
            return {
                ...state,
                isLoading: true
            };
        }
        case LOADING_GENRES_END:{
            return {
                ...state,
                isLoading: false
            };
        }
        default:
            return state
    }
};
