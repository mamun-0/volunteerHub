import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "../router";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "../AuthProvider/AuthProvider";
import { ModeProvider } from "../ModeProvider/ModeProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ModeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModeProvider>
  </AuthProvider>
);
