import React, { useState } from 'react';
import '../Style/TVShowCard.css'; // importa il file CSS per la card
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';



interface ShowProps {
    id: number;
    name: string;
    summary: string;
    image: string;
}

const TVShowCard: React.FC<ShowProps> = (props) => {
    return (
        <div className="TVShowCard">
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
        </div>
    );
}

function IconExample() {
    const [isSelected, setIsSelected] = useState(false);
  
    const handleClick = () => {
      setIsSelected(!isSelected);
    }
  
    return (
      <div>
        {isSelected ? (
          <FavoriteIcon onClick={handleClick} />
        ) : (
          <FavoriteBorderIcon onClick={handleClick} />
        )}
      </div>
    );
  }

export default TVShowCard;
