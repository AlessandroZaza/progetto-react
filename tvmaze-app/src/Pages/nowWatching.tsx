import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import Example from '../Components/addNowWatching'
const NowWatching = () => {

    return (
        <>
            <Navbar></Navbar>

            <div style={{
                backgroundColor: 'whitesmoke',
                position: 'absolute',
                width: '100%',
                minHeight: '100vh',
                top: '6.7vh',
                zIndex: '-1'
            }} >
                <h3 style={{ maxWidth: 'max-content', margin: '0 auto', paddingTop: '2vh' }} > Now watching: </h3>

                <Footer></Footer>
            </div>

        </>
    )
}

export default NowWatching;
