import React, { useEffect} from 'react'
import { Link } from "react-router-dom";
import firestore from './firebase';

export default function TestTaker() {

useEffect(() => {
    firestore.collection("questions").get().then((items)=>{
        items.forEach((doc)=>{
            console.log(`${doc.id} => ${doc.data().question}`)
            console.log(doc.data().options)
        })
    })
}, [])

    return (
        <div className="container">
            <div className="row">   
                <div className="col">
                Test Taker input
                </div>
            </div>
            <div className="row">   
                <div className="col">
                    <Link to="/simulation" className="btn btn-primary">Start Test</Link>
                </div>
            </div>
        </div>
    )
}
