import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // 🔥 Add this line

const firebaseConfig = {
  apiKey: "AIzaSyCneMRGPBUsFVWyVYT6K-qz68-yyENRCy8",
  authDomain: "vinay-portfolio-b7483.firebaseapp.com",
  projectId: "vinay-portfolio-b7483",
  storageBucket: "vinay-portfolio-b7483.firebasestorage.app",
  messagingSenderId: "1061947098813",
  appId: "1:1061947098813:web:28bb4fdb278b562c2799d4",
  measurementId: "G-VYDNGJ2ENR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // 👈 Export Firestore
export { app, analytics, db };