import React, { Component, Fragment } from 'react';
import { BoxLoading, LoopCircleLoading } from 'react-loadingg';
import './HomePage.css'
import {Header} from "../Header/Header";
import {MoviesList} from "../../Components/MoviesList/MoviesList";
import {PaginationComponent} from "../../Components/Pagination/Pagination";


const CN = 'home-page';

export class HomePage extends Component {

    componentDidMount() {
        const {actions: {getGenres, getMovies, setPage }, movies: {page, isLoading, isLoaded}} = this.props;
        console.log(this.props);
        getGenres();
        getMovies(page);
    }


    render() {
        const {movies: {moviesList, isLoading, page, totalPages}, genres: {genresList}, genres, actions: {setPage}} = this.props;
        return (
            <div>
                <Header />
                {!moviesList.length && !genresList.length &&
                    <LoopCircleLoading color='#456446' size='large' />
                }
                <PaginationComponent setPage={setPage} totalPages={totalPages}></PaginationComponent>
                {!!moviesList.length && !!genresList.length &&
                    <MoviesList moviesList={moviesList} genresList={genresList} stePage={setPage}/>
                }
            </div>
        )
    }
}

//{movies.map(el => <div>{el.title}</div>)}
//{movies.results.map(el => <div>{el.name}</div>)}
