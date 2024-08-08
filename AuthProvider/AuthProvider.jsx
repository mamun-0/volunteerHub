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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setUser(currentUser);
        common.post("/jwt", { email: currentUser.email }).then((res) => {
          const { token } = res.data;
          if (token) {
            window.localStorage.setItem("access-token", token);
          } else {
            window.localStorage.removeItem("access-token");
          }
        });
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
