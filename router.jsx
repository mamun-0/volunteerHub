import { createBrowserRouter } from "react-router-dom";
import { Main } from "./src/components/Layout/Main";
import { Login } from "./src/pages/Login/Login";
import { Register } from "./src/pages/Register/Register";
import { Error404 } from "./src/pages/Error/Error404";
import { Home } from "./src/pages/Home/Home";
import { AddVolunteer } from "./src/pages/AddVolunteer/AddVolunteer";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { VolunteerDetails } from "./src/pages/VolunteerDetails/VolunteerDetails";
import { NeedVolunteer } from "./src/pages/NeedVolunteer/NeedVolunteer";
export const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/need-volunteer",
        children: [
          { index: true, element: <NeedVolunteer /> },
          {
            path: ":id",
            element: <VolunteerDetails />,
            loader: ({ params }) => {
              return params.id;
            },
          },
        ],
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/add-volunteer",
        element: (
          <ProtectedRoute>
            <AddVolunteer />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
