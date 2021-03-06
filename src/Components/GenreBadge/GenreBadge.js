import React, {useState} from 'react';
import { Badge } from 'reactstrap';
import './GenreBadge.css'


const CN =  'badge-item';


export const GenreBadge = ( props ) => {

    const {movieItem, genres} = props;

    function getItemGenres(movieItem, genres) {
        const movieItemGenres = [...movieItem.genre_ids];
        const itemGenres = [];
        for (let i = 0; i < movieItemGenres.length; i++) {
            for (let genre of genres) {
                if (movieItemGenres[i] === genre.id) {
                        itemGenres.push(genre.name)
                }
            }
        }
        return itemGenres;
    }


    const itemGenres = getItemGenres(movieItem, genres);

    return (
        <div>
            {!!itemGenres.length && itemGenres.map((el, i) => {
            return (
                <Badge color="secondary" key={el.i} className={`${CN}`}>
                    {`${el}`}
                </Badge>
            )}
            )}
        </div>
    );

};
