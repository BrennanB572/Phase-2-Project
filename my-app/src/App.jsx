/** Employee Portal Attendence App **/
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import EmployeeTracker from "./Components/EmployeeTracker";

const App = () => {
    const [page, setPage] = useState("/")
    
    return (
        <div className="App">
        <Navbar onChangePage={setPage} />
        <Routes>
            <Route path="/EmployeeTracker" element={<EmployeeTracker />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="*" element={<h1>404 Not Found</h1>}>
            </Route>
        </Routes>
        </div>
    );
}

export default App;