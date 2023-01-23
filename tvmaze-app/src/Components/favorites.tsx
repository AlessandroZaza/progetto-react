import React, { useState } from 'react';
import TVShowCard from './tvshowCard';

interface Props {
shows: ShowProps[];
}

interface ShowProps {
id: number;
name: string;
summary: string;
image: string;
isFavorited: boolean;
}

const FavoritesPage: React.FC<Props> = ({ shows }) => {
const [favoritedShows, setFavoritedShows] = useState<ShowProps[]>([]);

const handleFavorites = (show: ShowProps) => {
    if (show.isFavorited) {
        setFavoritedShows(favoritedShows.filter(s => s.id !== show.id));
    } else {
        setFavoritedShows([...favoritedShows, show]);
    }
};

return (
    <div>
        <h1>Favorites</h1>
        {favoritedShows.map((show) => (
            <TVShowCard
                key={show.id}
                id={show.id}
                name={show.name}
                summary={show.summary}
                image={show.image}
            />
        ))}
    </div>
);
}; 

export default FavoritesPage;