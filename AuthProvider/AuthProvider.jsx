import { createContext, useEffect } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { useLoading } from "../hooks/useLoading";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const firebaseAuth = useFirebaseAuth(null);
  const [loading, setLoading] = useLoading(true);
  useEffect(() => {
    const { setUser } = firebaseAuth;
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        firebaseAuth,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
