import React, {Fragment} from "react";
import {Header} from "../../Containers/Header/Header";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarRating} from "../StarsRating/StarsRating";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import './MoviesList.css'


const CN = 'movies-list';

export const MoviesList = (props) => {
    const {moviesList, genresList } = props;

    return (
        <div className={`${CN}`}>
            {moviesList.length && genresList.length &&
            moviesList.map((movie) => {
                return (
                        <MoviesListCard key={movie.id} movieItem={movie} genresList={genresList} />
                );
            })
            }
        </div>
    )
};
