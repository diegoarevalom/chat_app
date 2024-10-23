import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBIVN9oak3lTvyBHSiKz1Mp7B6s10WgvG8",
    authDomain: "chat-react-f54c8.firebaseapp.com",
    projectId: "chat-react-f54c8",
    storageBucket: "chat-react-f54c8.appspot.com",
    messagingSenderId: "1072668802007",
    appId: "1:1072668802007:web:d0efd3e5a1c5128e592992"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth,db};

