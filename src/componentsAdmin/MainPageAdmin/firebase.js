import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Вставьте вашу конфигурацию Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxzQpz9t-asgWwXe0fF5hMFB3I8zNEFcM",
  authDomain: "med-project-ff549.firebaseapp.com",
  projectId: "med-project-ff549",
  storageBucket: "med-project-ff549.firebasestorage.app",
  messagingSenderId: "69084494765",
  appId: "1:69084494765:web:a1d629987d72e7962bff24",
  measurementId: "G-R9DL3SB3F9"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };