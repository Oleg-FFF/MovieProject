import { combineReducers } from 'redux';
import { headerReducer } from './HeaderReducer';
import { moviesReducer} from './MoviesReducer'
import { genresReducer } from "./GenresReducer";

export default () => {
    return combineReducers({
        counter: headerReducer,
        movies: moviesReducer,
        genres: genresReducer
    });
}
