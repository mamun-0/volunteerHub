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
import { BeAVolunteer } from "./src/pages/BeAVolunteer/BeAVolunteer";
import { ManageMyPost } from "./src/pages/ManageMyPost/ManageMyPost";
export const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/manage-post",
        element: (
          <ProtectedRoute>
            <ManageMyPost />
          </ProtectedRoute>
        ),
      },
      {
        path: "/be-a-volunteer/:id",
        element: (
          <ProtectedRoute>
            <BeAVolunteer />
          </ProtectedRoute>
        ),
        loader: ({ params }) => {
          return params.id;
        },
      },
      {
        path: "/need-volunteer",
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <NeedVolunteer />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id",
            element: (
              <ProtectedRoute>
                <VolunteerDetails />
              </ProtectedRoute>
            ),
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
