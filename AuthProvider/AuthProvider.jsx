import { createContext, useEffect } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { useLoading } from "../hooks/useLoading";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAxiosCommon } from "../Axios/useAxiosCommon";
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const firebaseAuth = useFirebaseAuth(null);
  const common = useAxiosCommon();
  const [loading, setLoading] = useLoading(true);
  
  useEffect(() => {
    const { setUser } = firebaseAuth;
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const res = await common.post("/jwt", { email: currentUser.email });
          const { token } = res.data;
          if (token) {
            window.localStorage.setItem("access-token", token);
          } else {
            window.localStorage.removeItem("access-token");
          }
        } catch (error) {
          console.error("Failed to retrieve token:", error);
          window.localStorage.removeItem("access-token");
        }
      } else {
        window.localStorage.removeItem("access-token");
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
