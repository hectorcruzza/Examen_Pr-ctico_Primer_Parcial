import { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const loginGoogle = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, loginGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
