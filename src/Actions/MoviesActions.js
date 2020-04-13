import { batch } from 'react-redux';
import { api_key } from '../Constants/Constants'
import {
    DECREMENT,
    GET_MOVIES,
    GET_MOVIES_ERROR,
    INCREMENT,
    LOADING_MOVIES_END,
    LOADING_MOVIES_START, LOG_TOGGLE,
    SORT_BY
} from './MoviesActionTypes';



export const getMoviesSuccess = (movies) => ({ type: GET_MOVIES, payload: movies });
export const getMoviesError = (error) => ({ type: GET_MOVIES_ERROR, payload: error });
export const startMoviesLoading = () => ({ type: LOADING_MOVIES_START });
export const endMoviesLoading = () => ({ type: LOADING_MOVIES_END });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const logToggle = () => ({ type: LOG_TOGGLE });

export function getMovies() {
    // todo перенесена сюда функция создания url, теперь функция принимает параметры номер страницы и количество объектов на странице
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    return (dispatch) => {
        const moviesListObjectString = localStorage.getItem('moviesList');

        if (moviesListObjectString) {
            let moviesListObject = {};
            try {
                moviesListObject = JSON.parse(moviesListObjectString);
            } catch (e) {
                console.log('error in parsing json');
            }
            const {moviesList: moviesListObj, date} = moviesListObject;

            // todo обратите внимание здесь добавлена проверка отличаются ли параметры которые прилетели как аргументы
            //     от тех, что лежат в localStorage
            //     + это приведение к типу число
                const date1 = new Date();
                const date2 = new Date(date);
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / 1000);
                console.log('diffDays', diffDays);
                const { moviesList } = moviesListObj;
                if (diffDays < 30 && moviesList && moviesList.length) {
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
            .then(({ results }) => {
                batch(() => {
                    dispatch(endMoviesLoading());
                    dispatch(getMoviesSuccess({
                        results
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

