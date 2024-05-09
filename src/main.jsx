import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "../router";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "../AuthProvider/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
