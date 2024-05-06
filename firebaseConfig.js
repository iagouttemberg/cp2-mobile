// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {

    apiKey: "AIzaSyAOFOYtmC8sxC-ejQ1KS3-OM8OPaXEdXxE",
  
    authDomain: "compras-2b86b.firebaseapp.com",
  
    databaseURL: "https://compras-2b86b-default-rtdb.firebaseio.com",
  
    projectId: "compras-2b86b",
  
    storageBucket: "compras-2b86b.appspot.com",
  
    messagingSenderId: "128057603384",
  
    appId: "1:128057603384:web:6f51be21fa941bc995bdcd",
  
    measurementId: "G-NBS0X4GF74"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);