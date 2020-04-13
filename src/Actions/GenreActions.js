import { batch } from 'react-redux';
import {GET_GENRES, GET_GENRES_ERROR, LOADING_GENRES_END, LOADING_GENRES_START} from './GenreActionsTypes';
import {api_key} from "../Constants/Constants";


export const getGenresSuccess = (genres) => ({ type: GET_GENRES, payload: genres });
export const getGenresError = (error) => ({ type: GET_GENRES_ERROR, payload: error });
export const startGenresLoading = () => ({ type: LOADING_GENRES_START });
export const endGenresLoading = () => ({ type: LOADING_GENRES_END });

export function getGenres() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
    return (dispatch) => {
        const genresListObjectString = localStorage.getItem('genresList');

        if (genresListObjectString) {
            let genresListObject = {};
            try {
                genresListObject = JSON.parse(genresListObjectString);
            } catch (e) {
                console.log('error in parsing json');
            }
            const {genresList: genresListObj, date} = genresListObject;
            const date1 = new Date();
            const date2 = new Date(date);
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / 1000);
            console.log('diffDays', diffDays);
            const { genresList } = genresListObj;
            if (diffDays < 30 && genresList && genresList.length) {
                return dispatch(getGenresSuccess(genresListObj)); // выход из функции
            }
        }
        debugger
        dispatch(startGenresLoading());
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then(({ genres }) => {
                batch(() => {
                    dispatch(endGenresLoading());
                    dispatch(getGenresSuccess({
                        genres
                    }));
                })
            })
            .catch((error) => {
                batch(() => {
                    dispatch(endGenresLoading());
                    dispatch(getGenresError(error))
                })
            });
    };
}
