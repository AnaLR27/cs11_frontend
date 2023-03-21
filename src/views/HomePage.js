/**
 * @fileoverview This is the main page of the application.
 * @author Alina Dorosh
 */
import Home from "../components/Home";
import { useEffect } from "react";
import ApiRequest from "../services/apiRequest";

import useRedirect from "../hooks/useRedirect";

const HomePage = () => {
 
  //ckeck if there is a remembered user and log him in if there is, using refresh token for authentication and recieve new access token
  useEffect(() => {
    const handleRememberedUser = async () => {
      if (!localStorage.getItem("refreshToken")) return;

      const response = await ApiRequest.refresh(
        localStorage.getItem("refreshToken")
      );
      if (!response.accessToken) return;

      if (response.accessToken) {
        //save tokens in sessionStorage to keep user logged in only for development purposes, in production, token should be saved in state and passed to context
        sessionStorage.setItem("accessToken", response.accessToken);
        sessionStorage.setItem("userId", response.id);
        sessionStorage.setItem("role", response.role);
        
      }
    };
    (async () => handleRememberedUser())();
  }, []);
  return <Home />;
};

export default HomePage;
