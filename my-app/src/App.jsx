/** Employee Portal Attendence App **/
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import EmployeeTracker from "./Components/EmployeeTracker";

const App = () => {
    return (
        <div className="App">
        <Navbar />
        <Routes>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/tracker">
                <EmployeeTracker />
            </Route>
        </Routes>
        </div>
    );
}

export default App;