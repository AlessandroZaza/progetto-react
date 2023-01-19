import Navbar from '../Components/navbar'
import Footer from '../Components/footer'

const Favorites = () => {

    return (
        <>
            <Navbar></Navbar>

            <div style={{ position: 'absolute', top: '55px', bottom: '3.95%', width:'100%',  backgroundColor: 'whitesmoke'}}>
                
                <h3>Preferiti:</h3>

            </div>

            <Footer></Footer>
        </>
    )
}

export default Favorites;