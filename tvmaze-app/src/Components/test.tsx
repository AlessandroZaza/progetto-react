import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

interface Props { }

const Example: React.FC<Props> = () => {
    const [isFavorited, setIsFavorited] = useState<boolean>(false);

    const handleClick = () => {
        setIsFavorited(!isFavorited);
    }

    return (
        <IconButton size="large" onClick={handleClick}>
            {isFavorited ? <FavoriteIcon style={{color: 'red'}} /> : <FavoriteBorderIcon style={{color: 'blue'}} />}
        </IconButton>
    );
}

export default Example;

