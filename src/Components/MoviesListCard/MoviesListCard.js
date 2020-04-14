import React, {Fragment} from "react";
import {Header} from "../Header/Header";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarRating} from "../StarsRating/StarsRating";
import './MovieListCard.css'

const CN = 'movie-card';

export const MoviesListCard = (props) => {
    const {movieItem, genresList} = props;

    return (
        <div className={`${CN}`}>
            <div>{`${movieItem.title}`}</div>
            <GenreBadge movieItem={movieItem} genres={genresList}/>
            <StarRating movieItem={movieItem}/>
        </div>
    )
};
