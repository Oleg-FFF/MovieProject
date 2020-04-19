import React, { Component, Fragment } from 'react';
import { BoxLoading, LoopCircleLoading } from 'react-loadingg';
import './HomePage.css'
import {Header} from "../Header/HeaderContainer";
import {MoviesList} from "../../Components/MoviesList/MoviesList";
import {PaginationComponent} from "../../Components/Pagination/Pagination";


const CN = 'home-page';

export class HomePage extends Component {

    componentDidMount() {
        const {actions: {getGenres, getMovies, setPage, changeTheme }, movies: {page, isLoading, isLoaded}, header: {darkTheme}} = this.props;
        console.log(this.props);
        getGenres();
        getMovies(page);
    }


    render() {
        const {header: {darkTheme}, movies: {moviesList, isLoading, page, totalPages}, genres: {genresList}, genres, actions: {setPage, changeTheme}} = this.props;
        return (
            <div>
                <Header />
                {!moviesList.length && !genresList.length &&
                    <LoopCircleLoading color="#252A37" size='large' />
                }
                <PaginationComponent setPage={setPage} totalPages={totalPages} darkTheme={darkTheme}></PaginationComponent>
                {!!moviesList.length && !!genresList.length &&
                    <MoviesList moviesList={moviesList} genresList={genresList} stePage={setPage} darkTheme={darkTheme}/>
                }
            </div>
        )
    }
}

//{movies.map(el => <div>{el.title}</div>)}
//{movies.results.map(el => <div>{el.name}</div>)}
