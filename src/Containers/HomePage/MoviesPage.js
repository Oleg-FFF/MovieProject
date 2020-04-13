import React, { Component, Fragment } from 'react';
import { Badge } from 'reactstrap';
import {GenreBadge} from "../../Components/GenreBadge/GenreBadge";
import './MoviePage.css'


const CN = 'movies-page';

export class MoviesPage extends Component {

    componentDidMount() {
        const { actions: { getGenres, getMovies } } = this.props;
        console.log(this.props);
        // const { moviesList } = this.props.movies;
        // const {movies: { movies }} = this.state;
        getMovies();
        getGenres();
    }


    render(){
        const {movies: { moviesList }, genres: { genresList }} = this.props;
        return (
            <Fragment>
                {moviesList.length && genresList.length &&
                    moviesList.map((movie) => {
                        return (
                            <div className={`${CN} movie-card`}>
                            <div key={movie.id}>{`${movie.title}`}</div>
                            <GenreBadge key={movie.id+1} movieItem={movie} genres={genresList}/>
                            </div>
                        );
                    })
                }
            </Fragment>
        )
}
}

//{movies.map(el => <div>{el.title}</div>)}
//{movies.results.map(el => <div>{el.name}</div>)}
