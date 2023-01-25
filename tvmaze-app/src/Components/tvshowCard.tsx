import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from 'react';
import AddNowWatching from './addNowWatching';

interface ShowProps {
  id: number;
  name: string;
  summary: string;
  image: string;
}

const TVShowCard: React.FC<ShowProps> = (props) => {

  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  }

  return (

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
          <Link to={`/search/${props.id}`} className="link-no-decoration">
            <Button variant="contained" >Read More</Button>
          </Link>
          
          <AddNowWatching />

          <IconButton size="large" onClick={handleClick}>
            {isFavorited ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon style={{ color: 'rgb(32, 104, 197)' }} />}
          </IconButton>
        </div>
        
      </Card>

    </div>

  );
}

export default TVShowCard;
