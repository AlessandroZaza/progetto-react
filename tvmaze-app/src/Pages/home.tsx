import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import MovieCard from '../Components/movieCard'
import CardList from '../Components/cardList';
import React from 'react';
import TVShowsList from '../Components/tvShowsList'

const data = [
    { image: '/image1.jpg', text: 'Card 1' },
    { image: '/image2.jpg', text: 'Card 2' },
    { image: '/image3.jpg', text: 'Card 3' },
    { image: '/image4.jpg', text: 'Card 4' },
    { image: '/image3.jpg', text: 'Card 3' },
    { image: '/image4.jpg', text: 'Card 4' },
    { image: '/image3.jpg', text: 'Card 3' },
    { image: '/image4.jpg', text: 'Card 4' },
];

function Home() {

return (
    <>
        <Navbar></Navbar>

        <TVShowsList />

        <Footer></Footer>
    </>
)
}

export default Home;
