import { createBrowserRouter } from "react-router-dom";
import { Main } from "./src/components/Layout/Main";
export const router = createBrowserRouter([
  {
    element: <Main />,
    children: [{ path: "/", element: <h2>Home</h2> }],
  },
]);
