import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import { useProvideMode } from "../../../hooks/useProvideMode";

export function Main() {
  const { toggle } = useProvideMode();
  return (
    <div className={`${toggle ? "dark" : ""}`}>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Outlet />
        <Footer />
        <ToastContainer autoClose={1000} />
      </div>
    </div>
  );
}
