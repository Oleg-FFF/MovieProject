import React from "react";
import {imageUrlBase, imageWidth} from '../../Constants/Constants';
import './PosterPreview.css'
const CN = 'poster-image';


export const PosterPreview = (props) => {
    const {movieItem: {poster_path}} = props;


    return (
            <img className={`${CN}`} src={`${imageUrlBase}${imageWidth}${poster_path}`}/>
    )
};
