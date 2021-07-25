import React from 'react'
import { Link } from "react-router-dom";
export default function SimulationWelcome() {
    return (
        <div className="container">
            <div className="row">   
                <div className="col">
                Welcome
                </div>
           </div>
           <div className="row">   
                <div className="col">Test description</div>
           </div>
           <div className="row">   
                <div className="col">
                    <Link to="selectinstructions" className="btn btn-primary">Next</Link>
                </div>
            </div>
        </div>
    )
}
