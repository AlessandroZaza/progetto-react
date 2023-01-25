import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import React from 'react';
import DetailPage from '../Components/detailPage';

const DetailPages = () => {

    return (
        <>
            <Navbar />

            <div style={{ backgroundColor: 'white' }}>

                <DetailPage match={{
                    params: {
                        id: ''
                    }
                }} />

            </div>
            <Footer></Footer>
        </>
    )
}

export default DetailPages;