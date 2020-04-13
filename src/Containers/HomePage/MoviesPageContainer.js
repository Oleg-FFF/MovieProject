import{ connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter} from 'react-router';
import * as moviesActions from '../../Actions/MoviesActions';
import * as genresActions from '../../Actions/GenreActions';
import {MoviesPage as MoviesPageComponent} from './MoviesPage';

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        genres: state.genres
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...moviesActions,
            ...genresActions
        }, dispatch)
        }
};

export const MoviesPage = connect(mapStateToProps, mapDispatchToProps)(MoviesPageComponent);
