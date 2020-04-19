import { batch } from 'react-redux';
import { api_key } from '../Constants/Constants'
import {
    CHANGE_THEME,
    DECREMENT,
    GET_MOVIES,
    GET_MOVIES_ERROR,
    INCREMENT,
    LOADING_MOVIES_END,
    LOADING_MOVIES_START, LOG_TOGGLE,
    SORT_BY, SET_PAGE
} from './MoviesActionTypes';



export const getMoviesSuccess = (movies) => ({ type: GET_MOVIES, payload: movies });
export const getMoviesError = (error) => ({ type: GET_MOVIES_ERROR, payload: error });
export const startMoviesLoading = () => ({ type: LOADING_MOVIES_START });
export const endMoviesLoading = () => ({ type: LOADING_MOVIES_END });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const logToggle = () => ({ type: LOG_TOGGLE });
export const changeTheme = () => ({ type: CHANGE_THEME });
export const setPages = (page) => ({ type: SET_PAGE, payload: page });


export function setPage(page){
    return (dispatch) => {
        batch(() => {
            dispatch(setPages(page));
            dispatch(getMovies(page))
        })
    }
}


export function getMovies(page) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    return (dispatch) => {
        const moviesListObjectString = localStorage.getItem('moviesList');

        if (moviesListObjectString) {
            let moviesListObject = {};
            try {
                moviesListObject = JSON.parse(moviesListObjectString);
            } catch (e) {
                console.log('error in parsing json');
            }
            const {moviesList: moviesListObj, date, currentPage} = moviesListObject;
                const date1 = new Date();
                const date2 = new Date(date);
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / 1000);
                console.log('diffDays', diffDays);
                console.log('currentPage', currentPage);
                const { moviesList } = moviesListObj;
                if (diffDays < 30 && moviesList && moviesList.length && currentPage===page) {
                    return dispatch(getMoviesSuccess(moviesListObj)); // выход из функции
                }
        }
        debugger
        dispatch(startMoviesLoading());
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then(({ results, total_pages }) => {
                batch(() => {
                    dispatch(endMoviesLoading());
                    dispatch(getMoviesSuccess({
                        results, page, total_pages
                    }));
                })
            })
            .catch((error) => {
                batch(() => {
                    dispatch(endMoviesLoading());
                    dispatch(getMoviesError(error))
                })
            });
    };
}

