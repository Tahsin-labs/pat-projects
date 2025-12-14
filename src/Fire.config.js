// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaZj2dpC63hB3tCu8g3yCLjw76kzO9nms",
    authDomain: "pat-projects.firebaseapp.com",
    projectId: "pat-projects",
    storageBucket: "pat-projects.firebasestorage.app",
    messagingSenderId: "956042646638",
    appId: "1:956042646638:web:81f39d367067f364b8427f",
    measurementId: "G-RZCSGNKZ5X"
};

// Initialize Firebase
 export const   app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
