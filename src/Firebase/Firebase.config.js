// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsB98HA_gfvuqQ6zwjkT3uRCeumwF0-pk",
  authDomain: "the-news-of-dragon-client.firebaseapp.com",
  projectId: "the-news-of-dragon-client",
  storageBucket: "the-news-of-dragon-client.appspot.com",
  messagingSenderId: "727723369130",
  appId: "1:727723369130:web:3849ab92527197744da6d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;