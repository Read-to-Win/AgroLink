import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import FarmerHome from "./pages/farmer/FarmerHome";
import DashboardLayout from "./layouts/DashboardLayout";
import FarmerAds from "./pages/farmer/FarmerAds";
import CreateAd from "./pages/CreateAd";
import Join from "./pages/Join";
import SignIn from "./pages/SignIn";
import FarmerForm from "./pages/FarmerForm";
import EditForm from "./pages/EditForm";
import Notifications from "./pages/Notifications";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import ViewDetail from "./pages/ViewDetails";
import AdminSignUp from "./pages/AdminSignUp";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import MyMessages from "./pages/MyMessages";

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/farmer",
    element: <AdminSignUp />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <FarmerHome />,
      },
      {
        path: "adverts",
        element: <FarmerAds />,
      },
      {
        path: "create-add",
        element: <CreateAd />,
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
        path: "edit/:id",
        element: <EditForm />,
      },
      {
        path: "messages",
        element: <MyMessages />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
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
    path: "/farmerform",
    element: <FarmerForm />,
  },
  {
    path: "/edit",
    element: <EditForm />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/ad-detail/:id",
    element: <ViewDetail />,
  },
]);

}

export default App;
