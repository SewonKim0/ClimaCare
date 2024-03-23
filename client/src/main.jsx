import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Care from "./pages/care";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/profile",
    element: <ProfilePage />,
  },

  {
    path: "/care",
    element: <Care />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);