import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import MovieCard from '../Components/movieCard'
import CardList from '../Components/cardList';
import React from 'react';
import TVShowsList from '../Components/tvShowsList'


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
