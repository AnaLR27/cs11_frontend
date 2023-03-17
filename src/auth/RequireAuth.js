/**
 * @fileoverview This component is used to check if the user has the correct role to access the route
 * @param {string} allowedRole - The role that is allowed to access the route
 * @author Alina Dorosh
 */
import { useNavigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
const RequireAuth = ({ allowedRole }) => {
  const navigate = useNavigate();
  const [allowAccess, setAllowAccess] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (!token || !allowAccess) navigate("/unauthorized", { replace: true });
  }, []);

  const token = sessionStorage.getItem("accessToken");
  if (token) {
    const decoded = jwt_decode(token);
    const userRole = decoded?.UserInfo?.role;
    setUserRole(userRole);
    setAllowAccess(userRole === allowedRole);
  }
  return allowAccess && <Outlet />;
};

export default RequireAuth;
