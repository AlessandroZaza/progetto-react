import React, { useState } from 'react';
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
import { Link } from "react-router-dom";

interface ShowProps {
  id: number;
  name: string;
  summary: string;
  image: string;
}

const TVShowCard: React.FC<ShowProps> = (props) => {
  return (

    /* <div className="TVShowCard">
       <img src={props.image} alt={props.name} />
       <h3 className="card-title">{props.name}</h3>
       <p className="card-summary">{props.summary}</p>
 
       <Divider variant="middle" />
 
       <div className='card-buttons'>
         <Button variant="contained" style={{ marginTop: '3%', marginBottom: '5%' }} >Read More</Button>
         <IconButton size="large" style={{ color: 'white' }}>
           <RemoveRedEye />
         </IconButton>
         <IconButton size="large" style={{ color: 'white' }}>
           <FavoriteBorderIcon />
         </IconButton>
       </div>
     </div> */

    <div className="TVShowCard">
      <Card sx={{ maxWidth: 345 }} >

        <Link to={`/search/${props.id}`} className="link-no-decoration">
          <CardActionArea>
            <img className="card-img" src={props.image} alt={props.name} />
            <h3 className="card-title">{props.name}</h3>
            <p className="card-summary">{props.summary}</p>
          </CardActionArea>
        </Link>

        <Divider variant="middle" style={{ marginTop: '3%', marginBottom: '5%' }} />

        <div className='card-buttons'>
          <Link to={`/show/${props.id}`} className="link-no-decoration">
            <Button variant="contained" >Read More</Button>
          </Link>
          <IconButton size="large" style={{ color: 'rgb(32, 104, 197)' }}>
            <RemoveRedEye />
          </IconButton>
          <IconButton size="large" style={{ color: 'rgb(32, 104, 197)' }}>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
      </Card>

    </div>

  );
}

export default TVShowCard;
