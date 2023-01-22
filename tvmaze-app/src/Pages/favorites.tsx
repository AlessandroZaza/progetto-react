import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import TVShowsList from '../Components/tvShowsList'

const Favorites = () => {

    return (
        <>
            <Navbar></Navbar>

            
                
                <h3>Preferiti:</h3>
                
                <TVShowsList />
            
            

            <Footer></Footer>
        </>
    )
}

export default Favorites;