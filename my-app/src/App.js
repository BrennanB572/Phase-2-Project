import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Tournaments from "./Components/Tournaments";
import Create from "./Components/Create";

const App = () => {
    const [tab, setTab] = useState("/")
    return (
        <div className="App">
        <NavBar onChangeTab={setTab} />
        <Routes>
        <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/create" element={<Create />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={404} />
            </Routes>
        </div>
    );
}

export default App;