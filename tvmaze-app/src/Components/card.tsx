import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface ICardProps {
    image: string;
    text: string;
}

export const FilmCard: React.FC<ICardProps> = ({ image, text }) => {
    return (
        <div className="filmCard">
            <Card sx={{ maxWidth: 345 }} style={{ margin: '1% 0% 0% 0%' }}>
            <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="../Images/interstellar.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Interstellar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    );
}
