import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvQ-_zqCoRWQLHdTgqmzQ-zxvs9BQx27M",
  authDomain: "elite-camp-4x4.firebaseapp.com",
  projectId: "elite-camp-4x4",
  storageBucket: "elite-camp-4x4.firebasestorage.app",
  messagingSenderId: "51239473482",
  appId: "1:51239473482:web:8848a48437b686793f31b3",
  measurementId: "G-T5JWWYDK0T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, updateDoc };
