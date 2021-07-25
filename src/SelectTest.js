import React from 'react'
import { Link } from "react-router-dom";
export default function SelectTest() {
    return (
        <div className="container">
            <div className="row">   
                <div className="col">
                Select a test
                </div>
           </div>
           <div className="row">   
                <div className="col-3">
                <Link to="/selectwelcome" className="btn btn-primary">Candidate Hiring Test</Link>
                </div>
                <div className="col">Some description</div>
           </div>
        </div>
    )
}
