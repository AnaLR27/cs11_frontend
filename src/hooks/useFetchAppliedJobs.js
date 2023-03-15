/**
 * @fileoverview custom hook that makes the requests to the backend for the CandidateAppliedJobs component
 * @author Alice Marchi
 */

import { useState } from "react";

const URL = "http://localhost:8000/job/candidate-applied-jobs/";
const token = sessionStorage.getItem("accessToken");

const useFetchAppliedJobs = () => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  // message is a string that contains the message that is displayed when the user deletes an application from the table successfully
  const [message, setMessage] = useState("");

  /**
   * This function makes the request to the backend to get the list of jobs that the candidate has applied to.
   * @param {string} candidateId the id of the candidate
   * @returns {Promise} the data returned by the request to the backend
   */
  const getAppliedJobs = async (candidateId) => {
    try {
      setPending(true);
      const response = await fetch(`${URL}${candidateId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      const data = await response.json();
      if (data.status === "Succeeded") {
        setData(data.data);
      } else {
        setData([]);
      }
    } catch (error) {
      setError("Ha ocurrido un error, por favor inténtelo de nuevo más tarde.");
    } finally {
      setPending(false);
    }
  };

  /**
   * This function makes the request to the backend to delete the application of the candidate to a job.
   * @param {string} jobId the id of the job
   * @param {string} candidateId the id of the candidate
   * @returns {Promise} the response of the request
   */
  const deleteAppliedJob = async (jobId, candidateId) => {
    console.log("jobId", jobId);
    console.log("candidateId", candidateId);
    try {
      setPending(true);
      const response = await fetch(`${URL}${candidateId}/${jobId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      const data = await response.json();
      if (data.status === "Succeeded") {
        setMessage("Candidatura eliminada con éxito.");
      } else {
        setError("Error al eliminar tu candidatura.");
      }
    } catch (error) {
      setError("Error al eliminar tu candidatura.");
    } finally {
      setPending(false);
    }
  };

  return {
    data,
    pending,
    error,
    message,
    getAppliedJobs,
    deleteAppliedJob,
  };
};

export default useFetchAppliedJobs;
