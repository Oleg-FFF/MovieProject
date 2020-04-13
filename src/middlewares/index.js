import { GET_MOVIES } from '../Actions/MoviesActionTypes';
import {GET_GENRES} from "../Actions/GenreActionsTypes";

export const saveMoviesToLocalStorage = store => next => action => {
    console.log('dispatching', action);

    if (action.type === GET_MOVIES) {
        const { payload: {results}} = action;
        let dataForStorage = '{}';
        try {
            dataForStorage = JSON.stringify({
                date: new Date(),
                moviesList: results
            });
        } catch(e) {
            console.log('error happened while stringifying');
        }
        localStorage.setItem('moviesList', dataForStorage);
    }
    return next(action);
};

export const saveGenresToLocalStorage = store => next => action => {
    console.log('dispatching', action);

    if (action.type === GET_GENRES) {
        const { payload: { genres } } = action;
        let dataForStorage = '{}';
        try {
            dataForStorage = JSON.stringify({
                date: new Date(),
                genresList: genres
            });
        } catch(e) {
            console.log('error happened while stringifying');
        }
        localStorage.setItem('genresList', dataForStorage);
    }

    return next(action);
};
