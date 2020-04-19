import React from "react";
import './MovieInfo.css';
import {GenreBadge} from '../GenreBadge/GenreBadge';

const CN = 'movie-info';

export const MovieInfo = (props) => {
    const {movieItem: {title, overview, release_date, vote_count}, movieItem, genresList} = props;


    return (
        <div className={`${CN}`}>
            <div className={`${CN} title`}>{title}</div>
            <GenreBadge movieItem={movieItem} genres={genresList}/>
            <div className={`${CN} overview`}>{overview}</div>
        </div>
    )
};
