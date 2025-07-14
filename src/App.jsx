import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import AdminSignUp from "./pages/AdminSignUp";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import CreateAd from "./pages/CreateAd";
import Notifications from "./pages/Notifications";
import MyMessages from "./pages/MyMessages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminSignUp />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Dashboard /> },

        {
          path: "all-adverts",
          element: <Products />,
        },
        {
          path: "post-adverts",
          element: <CreateAd />,
        },
        {
          path: "notifications",
          element: <Notifications />,
        },
        {
          path: "messages",
          element: <MyMessages />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
