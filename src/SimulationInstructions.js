import React from 'react'
import { Link } from "react-router-dom";
export default function SimulationInstructions() {
    return (
        <div className="container">
            <div className="row">   
                <div className="col">
                Instructions
                </div>
           </div>
           <div className="row">   
                <div className="col">
                Instructions description
                </div>
           </div>
           <div className="row">   
                <div className="col">
                    <Link to="/testtaker" className="btn btn-primary">Next</Link>
                </div>
            </div>
        </div>
    )
}
