import React, { useState } from 'react';

const EmployeeTracker = () => {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({})
    }

    return (
        <div>
        <h1 className="et">Employee Attendance Tracker</h1>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label className="control">Date:</label><br></br>
                <input 
                placeholder="00/00/000" 
                type="text"
                value={data.date || ""}
                onChange={handleChange}
                /><br></br>
                <label className="control">Name:</label><br></br>
                <input 
                placeholder="John Doe" 
                type="text"
                value={data.name || ""}
                /><br></br>
                <label className="control">Function:</label><br></br>
                <input 
                laceholder="Dock, Stow, Problem Solve,..." 
                type="text"
                value={data.function || ""}
                /><br></br>
                <button type="submit" className="formbtn">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default EmployeeTracker

