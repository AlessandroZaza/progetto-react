import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import TVShowsList from '../Components/tvShowsList'
import "./signIn.css";
import { auth } from "../Firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UseUserAuth } from "../Context/authContext";
import { AuthContext } from "../Context/authContext";


function Home() {
    
const { currentUser } = UseUserAuth();
    
    
    console.log("ciao da home " + UseUserAuth() );

return (
    <>
        <Navbar></Navbar>

        <TVShowsList />

        <Footer></Footer>
    </>
)
}

export default Home;
