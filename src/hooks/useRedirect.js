import { useNavigate } from "react-router";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import ApiRequest from "../services/apiRequest";

const useRedirect = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const redirect = async (token) => {
    const decoded = jwt_decode(token);
    const decodedRole = decoded?.UserInfo?.role;
    const decodedId = decoded?.UserInfo?.id;
    if (!decodedRole || !decodedId) return navigate(`/`);

    if (decodedRole === "employer") {
      try {
        setLoading(true);

        //Check if employer has a profile
        const res = await ApiRequest.getEmployerProfile(token);
        setLoading(false);

        //If employer has no profile, redirect to form for create profile
        if (res.data === null) {
          navigate(`/employer-dashbord/profile/${decodedId}`);
        }

        //If employer has a profile, redirect to dashboard
        if (res.data !== null && res.data?.loginId === decodedId) {
          navigate(`/employers-dashboard`);
        }
      } catch (error) {
        setError(error);
      }
    } else if (decodedRole === "candidate") {
      try {
        setLoading(true);

        //Check if candidate has a profile
        const res = await ApiRequest.getCandidateProfile(token);

        setLoading(false);

        //If candidate has no profile, redirect to form for create profile
        if (res.data === null) {
          navigate(`/candidate-dashbord/profile/${decodedId}`);
        }

        //If candidate has a profile, redirect to dashboard
        if (res.data !== null && res.data?.loginId === decodedId) {
          navigate(`/candidates-dashboard`);
        }
      } catch (error) {
        setError(error);
      }
    } else {
      setError("Role not found");
      navigate(`/`);
    }
  };
  return [redirect, error, loading];
};

export default useRedirect;
