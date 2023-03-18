/**
 * @fileoverview This file contains the TableContainer component. It includes the select that allows the candidate to filter the job applications by date. It gets the data from the backend using a custom hook. The component uses two useEffects, one to make the request to the backend and the other set the data filtered by date.
 * @author Alice Marchi
 */

import classes from "./CandidateAppliedJobs.module.css";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import useFetchAppliedJobs from "../../hooks/useFetchAppliedJobs";
import { filterDate } from "../../utils/filterDate";
import AppliedJobsTable from "./AppliedJobsTable";
import Loader from "../UI/Spinner/Loader";

function CandidateAppliedJobs() {
  // Label is the text that is displayed in the select and value is used to filter the data
  const options = [
    { label: "Último Mes", value: "Last Month" },
    { label: "Últimos 2 Meses", value: "Last 2 Months" },
    { label: "Últimos 3 Meses", value: "Last 3 Months" },
    { label: "Todas", value: "All" },
  ];

  // Value of the selected option, it's used to filter the data and it's updated when the user selects a new option
  const [selectValue, setSelectValue] = useState(options[0].value);

  const token = sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken");
  const decoded = jwt_decode(token);
  const candidateId = decoded.UserInfo.id;

  const { pending, error, getAppliedJobs, data } = useFetchAppliedJobs();

  // loadData is a boolean that is used to control when the component makes the request to the backend, it's set to true when the component is rendered for the first time and to false when the request is made, it's set to true again when the user deletes an application from the table
  const [loadData, setLoadData] = useState(true);

  // filteredData is the data that is displayed in the table, it's updated when the user selects an option in the select
  const [filteredData, setFilteredData] = useState([]);

  // handleChangeSelect is executed when the user selects an option in the select, it updates the value of selectValue and calls the function setFilter that filters the data by date
  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
    setFilteredData(filterDate(event.target.value, data, candidateId));
  };

  // executed when the component is rendered for the first time, or when the user deletes an application from the table
  useEffect(() => {
    if (loadData) {
      getAppliedJobs(candidateId);
      setLoadData(false);
    }
  }, [loadData]);

  useEffect(() => {
    // if loadData is false it means that the request to the backend has been made and the data is loaded
    if (!loadData) {
      setFilteredData(filterDate(selectValue, data, candidateId));
    }
  }, [data]);

  return (
    <>
      <div className={classes["main-container"]}>
        <div className={classes.header}>
          <h3>Mis Candidaturas</h3>
          <p>¡Revisa todas tus ofertas de empleo!</p>
        </div>
        <div>
          {/* Aquí va el componente del menu lateral */}
          <button>Menu</button>
        </div>
        {pending && <Loader />}
        <div className={classes["applied-jobs-container"]}>
          {!pending && error === null && (
            <>
              <div className={classes["table-title"]}>
                <h4>Mis Candidaturas</h4>
                <div>
                  <select
                    value={selectValue}
                    onChange={handleChangeSelect}
                    className={classes["select-filter"]}
                  >
                    {options.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <AppliedJobsTable
                data={filteredData}
                candidateId={candidateId}
                setLoadData={setLoadData}
              />
            </>
          )}
        </div>
        {/* If there are errors with the fetch*/}
        {!pending && error !== null && (
          <p className={classes["fetch-error"]}>{error}</p>
        )}
      </div>
    </>
  );
}

export default CandidateAppliedJobs;
