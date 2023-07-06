import React, { useEffect, useState } from 'react';

const EmployeeTracker = () => {
    

    return (
        <div>
        <h1 className="et">Employee Attendance Tracker</h1>
        <div className="form">
            <form>
                <label className="control">Date:</label><br></br>
                <input placeholder="00/00/000" type="text"></input><br></br>
                <label className="control">Name:</label><br></br>
                <input placeholder="John Doe" type="text"></input><br></br>
                <label className="control">Function:</label><br></br>
                <input placeholder="Dock, Stow, Problem Solve,..." type="text"></input><br></br>
                <button onClick={() => {}} className="formbtn">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default EmployeeTracker

