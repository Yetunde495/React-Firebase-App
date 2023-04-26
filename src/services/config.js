import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBjiFWBhXcFYSACXOu-nxVybBvKnGD3fCM",
  authDomain: "mealsterr.firebaseapp.com",
  projectId: "mealsterr",
  storageBucket: "mealsterr.appspot.com",
  messagingSenderId: "407699879900",
  appId: "1:407699879900:web:a14f5ab4b7fff19d2a8119",
  measurementId: "G-2PD6FNMSXZ"
};



// Initialize Firebase



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


  
  


const firebaseDb = {
  db,
  storage,
  auth,
};

export default firebaseDb;
