import{ connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter} from 'react-router';
import * as moviesActions from '../../Actions/MoviesActions';
import * as genresActions from '../../Actions/GenreActions';
import {HomePage as HomePageComponent} from './HomePage';

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        genres: state.genres,
        header: state.header
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
