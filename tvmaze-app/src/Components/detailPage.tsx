import React, { useState, useEffect } from 'react';
import '../Style/TVShowCard.css'; // importa il file CSS per la card
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Show {
    id: number;
    name: string;
    summary: string;
    image: {
        medium: string;
    };
    cast: [
        {
            name: string;
        }
    ];
    premiered: string;
    runtime: number;
}

interface Props {
    match: {
        params: {
            id: string;
        };
    };
}

const DetailPage: React.FC<Props> = ({ match }) => {
    const [show, setShow] = useState<Show | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://api.tvmaze.com/shows/${match.params.id}?embed[]=cast`
            );
            setShow(result.data);
        };
        fetchData();
    }, [match.params.id]);


    return (
        <div>
            {!show ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>{show.name}</h1>
                    <img src={show.image.medium} alt={show.name} />
                    <p>{show.summary}</p>
                    <h2>Cast</h2>
                    <ul>
                        {show.cast.map((actor) => (
                            <li key={actor.name}>{actor.name}</li>
                        ))}
                    </ul>
                    <p>Premiered: {show.premiered}</p>
                    <p>Runtime: {show.runtime} minutes</p>
                </>
            )}
        </div>
    );

}



export default DetailPage;
