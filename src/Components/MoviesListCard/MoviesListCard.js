import React, {Fragment} from "react";
import {Header} from "../../Containers/Header/Header";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarRating} from "../StarsRating/StarsRating";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import './MovieListCard.css'
import {MovieInfo} from "../MovieInfo/MovieInfo";


const CN = 'movie-card';

export const MoviesListCard = (props) => {
    const {movieItem, genresList} = props;

    return (
        <div className={`${CN}`}>
            <PosterPreview movieItem={movieItem}/>
            <MovieInfo movieItem={movieItem} genresList={genresList} />
            <StarRating movieItem={movieItem}/>
        </div>
    )
};
