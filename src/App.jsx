import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import "./App.css";
import Landing from "./pages/Landing";
import DashboardLayout from "./layouts/DashboardLayout";
import Join from "./pages/Join";
import SignIn from "./pages/LogIn";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import AdminSignUp from "./pages/AdminSignUp";
import Products from "./pages/Products";
import CreateAd from "./pages/CreateAd";
import Notifications from "./pages/Notifications";
import MyMessages from "./pages/MyMessages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/admin",
      element: <AdminSignUp />, 
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
      
        {
          path: "create-add",
          element: <CreateAd/>,
        },
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
    {
      path: "/join",
      element: <Join />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    
    
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
