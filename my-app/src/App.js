import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Movies from "./Components/Movies";

/** 7b97d75f **/

const API_URL = 'http://www.omdbapi.com?apikey=7b97d75f'

const App = () => {
    const [tab, setTab] = useState("/")

    const findMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json();
    }

    useEffect(() => {
      findMovies('Superman');
    }, []);

    return (
        <div className="App">
        <NavBar onChangeTab={setTab} />
        <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/home" element={<Home />} />
        <Route className="errorp" path="*" element={<h2>Error 404</h2>} />
        </Routes>
        </div>
    );
}

export default App;