
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCKQCdYvRDTd9AQIw8IUOpxFHqB7xLPmXQ",
  authDomain: "react-links-c784a.firebaseapp.com",
  projectId: "react-links-c784a",
  storageBucket: "react-links-c784a.firebasestorage.app",
  messagingSenderId: "499323953148",
  appId: "1:499323953148:web:815b82898bd57a4c0a5c79"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export{auth, db};