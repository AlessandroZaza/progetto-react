import React from 'react';
import axios from 'axios';
import TVShowCard from './tvshowCard';
import '../Style/TVShowCard.css';

interface Show {
    image: any;
    id: number;
    name: string;
    summary: string;
}

interface State {
    shows: Show[],
    offset: number,
    limit: number,
    hasMore: boolean
}

class TVShowsList extends React.Component<{}, State> {
    state: State = {
        shows: [],
        offset: 0,
        limit: 10,
        hasMore: true
    }


    componentDidMount() {
        this.loadShows();
    }

    loadShows = () => {
        axios.get(`https://api.tvmaze.com/shows`)
            .then(res => {

                this.setState(prevState => ({
                    shows: [...prevState.shows, ...res.data]
                }));
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div style={{ paddingTop: '6.4vh' }} >
                {this.state.shows ? (
                    <div>
                        {this.state.shows.slice(0, this.state.limit).map((show: Show) => (
                            <TVShowCard
                                key={show.id}
                                id={show.id}
                                name={show.name}
                                summary={show.summary}
                                image={show.image.medium}
                            />
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

export default TVShowsList;