import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import { ToastContainer } from "react-toastify";

export function Main() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer autoClose={1000} />
    </div>
  );
}
