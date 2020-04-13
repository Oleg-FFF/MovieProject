import { combineReducers } from 'redux';
import { counterReducer } from './CounterReducer';
import { moviesReducer} from './MoviesReducer'
import { genresReducer } from "./GenresReducer";

export default () => {
    return combineReducers({
        counter: counterReducer,
        movies: moviesReducer,
        genres: genresReducer
    });
}
