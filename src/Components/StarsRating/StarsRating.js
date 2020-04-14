import React from "react";
import StarRatings from 'react-star-ratings';


export const StarRating = (props) => {
const {movieItem: {vote_average} } = props;

    return (
        <StarRatings rating={vote_average} starDimension="15px" starSpacing="2px" numberOfStars={10} starRatedColor='gold' />
    )
};
