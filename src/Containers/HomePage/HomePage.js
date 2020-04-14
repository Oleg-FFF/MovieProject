import React, { Component, Fragment } from 'react';
import { BoxLoading, LoopCircleLoading } from 'react-loadingg';
import './HomePage.css'
import {Header} from "../../Components/Header/Header";
import {MoviesList} from "../../Components/MoviesList/MoviesList";


const CN = 'home-page';

export class HomePage extends Component {

    componentDidMount() {
        const {actions: {getGenres, getMovies, }} = this.props;
        console.log(this.props);
        getMovies();
        getGenres();
    }


    render() {
        const {movies: {moviesList}, genres: {genresList}} = this.props;
        return (
            <div>
                <Header />
                {!moviesList.length && !genresList.length &&
                    <LoopCircleLoading color='#456446' size='large' />
                }
                {moviesList.length && genresList.length &&
                    <MoviesList moviesList={moviesList} genresList={genresList}/>
                }
            </div>
        )
    }
}

//{movies.map(el => <div>{el.title}</div>)}
//{movies.results.map(el => <div>{el.name}</div>)}
