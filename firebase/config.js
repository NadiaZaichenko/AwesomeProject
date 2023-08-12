import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import 'firebase/compat/auth';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuF0pId9RJnWzG6jaMb2zvdoJbOwQngb4",
  authDomain: "nativeproject-955c1.firebaseapp.com",
  projectId: "nativeproject-955c1",
  storageBucket: "nativeproject-955c1.appspot.com",
  messagingSenderId: "322320753743",
  appId: "1:322320753743:web:0b0e4c8e6a651d51f1763a",
  measurementId: "G-MCNGHFVRCY"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);