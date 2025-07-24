import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/log-in" replace />;
  }

  return children;
};

export default PrivateRoute;
