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
import NowWatching from './Pages/nowWatching';

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
  {
    path: "/now-watching",
    element: 


        <NowWatching />

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

export default App;
