import firebase from 'firebase/app'
import 'firebase/firestore'
if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAHqOpYdV3oBUyWsOUqwYWsuwrgRp-2fUA",
        authDomain: "candidatehiring-82677.firebaseapp.com",
        projectId: "candidatehiring-82677",
        storageBucket: "candidatehiring-82677.appspot.com",
        messagingSenderId: "76571866571",
        appId: "1:76571866571:web:e181a42b38298418fbb24e"
    })
} else {
    firebase.app()
}

const firestore = firebase.firestore()
export default firestore;
    
