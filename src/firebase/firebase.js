import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsKWtnUk5ZGH6_A0v8GOFCXYMqmfpfxEA",
  authDomain: "sistemapos-47927.firebaseapp.com",
  projectId: "sistemapos-47927",
  storageBucket: "sistemapos-47927.firebasestorage.app",
  messagingSenderId: "356846453528",
  appId: "1:356846453528:web:f42d804a460933bd18946d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
