import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, BrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/home';
import Favorites from './Pages/favorites';
import DetailPage from './Pages/detailPage';
import SearchPage from './Pages/searchPage';
import SignIn from './Pages/signIn';
import SignUp from './Pages/signUp';
import CardList from './Components/cardList';

const router = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/sign-in", element: <SignIn /> },
  {
    path: "/search",
    element: 


        <SearchPage />

    ,
  },
  {
    path: "/search/:showId",
    element: 


        <DetailPage />

    ,
  },
  {
    path: "/sign-up",
    element: 


        <SignUp />

    ,
  },
  {
    path: "/home",
    element: 


        <Home />

    ,
  },
  {
    path: "/favorites",
    element: 


        <Favorites />

    ,
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

interface ICard {
  image:string;
  text:string;
}

const data = [
{ image: '/Images/interstellar.jpg', text: 'CARD 1' },
{ image: '/image2.jpg', text: 'Card 2' },
{ image: '/image2.jpg', text: 'Card 2' },
];


function AppCard() {
  return (
    <div className="app">
      <CardList data={data} />
    </div>
  );
}

export default App;
