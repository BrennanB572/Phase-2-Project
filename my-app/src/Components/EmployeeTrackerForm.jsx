import React, { useState } from 'react';

const EmployeeTrackerForm = () => {
    const [data, setData] = useState({});
    
    const getData = () => {
        fetch('http://localhost:3000/employees')
        .then(res => res.json())
        .then(data => setData(data))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({})
    }

    return (
        <div>
        <h1 className="et">Employee Attendance Tracker</h1>
        <div className="form">
            <form>
                <label>Date:</label><br></br>
                <input 
                placeholder="00/00/000"
                type="text"
                value={data.date}
                /><br></br>
                <label>Name:</label><br></br>
                <input 
                placeholder="type name..." 
                type="text"
                value={data.name}
                /><br></br>
                <label>Function:</label><br></br>
                <input 
                placeholder="type work function..." 
                type="text"
                value={data.function}
                /><br></br>
                <button onSubmit={handleSubmit} type="submit" className="formbtn">Submit</button>
            </form>
        </div>
        </div> 
    )
}

export default EmployeeTrackerForm

