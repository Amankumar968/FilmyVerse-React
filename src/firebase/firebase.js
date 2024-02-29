import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBufkJK6Ss-xWIWSAkCCMhJBIqzkeV7lN4",
  authDomain: "filmyverse-e165c.firebaseapp.com",
  projectId: "filmyverse-e165c",
  storageBucket: "filmyverse-e165c.appspot.com",
  messagingSenderId: "924383021139",
  appId: "1:924383021139:web:15950994818c46e1fadea6",
  measurementId: "G-6PE60SCZFP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;