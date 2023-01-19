import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import MovieCard from '../Components/movieCard'
import CardList from '../Components/cardList';


const data = [
    { image: '/image1.jpg', text: 'Card 1' },
    { image: '/image2.jpg', text: 'Card 2' },
    { image: '/image2.jpg', text: 'Card 2' },
    { image: '/image2.jpg', text: 'Card 2' },
];

function Home() {

return (
    <>
        <Navbar></Navbar>

        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', border: '1px solid red' }}>

            <div className="home">
                <CardList data={data} />
            </div>
        </div>

        <Footer></Footer>
    </>
)
}

export default Home;
