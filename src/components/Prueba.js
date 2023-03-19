import React from "react";
import { useParams } from "react-router";

export const JobDetails = () => {
  const params = useParams();
  console.log(params.jobId);
  
  return <div>prueba</div>;
};
