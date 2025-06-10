// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArJ-ZPMqC3MEKaaPZL9-si_S9oVTT0PH0",
    authDomain: "myportfolioboard.firebaseapp.com",
    projectId: "myportfolioboard",
    storageBucket: "myportfolioboard.firebasestorage.app",
    messagingSenderId: "1057991063021",
    appId: "1:1057991063021:web:95e1ad5a3e399688a363e4",
    measurementId: "G-RV9XLQX116"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
