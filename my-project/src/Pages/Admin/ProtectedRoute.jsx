import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
    console.log(state,"state")
  // adjust this check based on your auth state shape
  if (!state?.adminEmail) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
