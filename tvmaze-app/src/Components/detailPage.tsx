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
import { getShowsById } from '../API';

const DetailPage = () => {

    /* if (!show) {
        return <div style={{ border: '1px solid whitesmoke', position: 'fixed', width: '100%', minHeight: '100vh', backgroundColor: 'whitesmoke' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '33vh' }}>
                <CircularProgress />
                <p style={{ marginTop: '2.5vh' }}> Loading ... </p>
            </Box>

        </div>;
    } else {
        return (
            <div>
                <h1>{show.name}</h1>
                <img src={show.image.medium} alt={show.name} />
                <p>{show.summary}</p>
                
                <p>Runtime: {show.runtime} minutes</p>
            </div>
        );
    } */


};

export default DetailPage;
