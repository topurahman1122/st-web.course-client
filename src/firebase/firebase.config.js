// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO57wmWg_0xEpPRe5Kgw9YX1xJM1wlSqA",
    authDomain: "st-webcourse.firebaseapp.com",
    projectId: "st-webcourse",
    storageBucket: "st-webcourse.appspot.com",
    messagingSenderId: "986861989199",
    appId: "1:986861989199:web:b3963fa1353c125968e93a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;