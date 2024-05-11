import { createBrowserRouter } from "react-router-dom";
import { Main } from "./src/components/Layout/Main";
import { Login } from "./src/pages/Login/Login";
import { Register } from "./src/pages/Register/Register";
import { Error404 } from "./src/pages/Error/Error404";
import { Home } from "./src/pages/Home/Home";
export const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
