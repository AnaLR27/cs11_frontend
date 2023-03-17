/**
 * @fileoverview This component is used to check if the user has the correct role to access the route
 * @param {string} allowedRole - The role that is allowed to access the route
 * @author Alina Dorosh
 */
import { useNavigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
const RequireAuth = ({ allowedRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!allowAccess) navigate("/unauthorized", { replace: true });
  }, []);

  const token = sessionStorage.getItem("accessToken");
  const decoded = jwt_decode(token);
  const userRole = decoded?.UserInfo?.role;
  const allowAccess = userRole === allowedRole;
  // console.log(allowAccess, "allowAccess");
  // console.log(userRole, "userRole");
  return allowAccess && <Outlet />;
};

export default RequireAuth;
