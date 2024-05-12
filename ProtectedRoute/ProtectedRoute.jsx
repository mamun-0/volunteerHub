import { Navigate, useLocation } from "react-router-dom";
import { useProvideAuth } from "../hooks/useProvideAuth";
import { toast } from "react-toastify";

export function ProtectedRoute({ children }) {
    const location = useLocation();
    const {firebaseAuth:{user}, loading} = useProvideAuth()
    if (loading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );
    }
    if (!user) {
      toast.error("You must login first!");
      return <Navigate to="/login" state={location?.pathname || "/"} />;
    }
    return children;
  }
  