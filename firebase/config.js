import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3aqmIteGrnZ_y6z_8KnczstUB-6KKGn8",
  authDomain: "expoproject-74957.firebaseapp.com",
  projectId: "expoproject-74957",
  storageBucket: "expoproject-74957.appspot.com",
  messagingSenderId: "467146086659",
  appId: "1:467146086659:web:61686205702a0d42997136"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);