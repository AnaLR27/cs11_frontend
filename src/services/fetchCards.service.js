/**
 * @fileoverview This file contains the functions that make the requests to the backend to get all jobs
 * @author Ana Lorenzo
 * @author Benjamín Mancera
 */
export const fetchCards = async (url) => {
  const request = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": sessionStorage.getItem("accessToken"),
    },
  });

  const datos = await request.json().catch((error) => {
    if (
      error.message === "Expired token" ||
      sessionStorage.token === undefined
    ) {
      window.location.href = "/login";
    }
  });

  return {
    datos,
  };
};
