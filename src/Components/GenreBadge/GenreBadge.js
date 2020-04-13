import React, {useState} from 'react';
import { Badge } from 'reactstrap';


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
            {itemGenres.map((el, i) => {
            return (
                <Badge key={el.i} color="secondary">
                    {`${el}`}
                </Badge>
            )}
            )}
        </div>
    );

};