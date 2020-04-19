import React from "react";
import StarRatings from 'react-star-ratings';
import './StarsRating.css';


const CN = 'stars-rating';


export const StarRating = (props) => {
const {movieItem: {vote_average} } = props;

    return (
        <div className={`${CN}`}>
            <StarRatings rating={vote_average} starDimension="1.0em" starSpacing="0.1em" numberOfStars={10} starRatedColor='gold'   />
        </div>
    )
};
