import Styles from "../styles/AllAplicants.module.css";
import { useEffect, useState } from "react";
import FetchJobs from "../services/allAplicantsService/FetchJobs";
import FetchAllUsers from "../services/allAplicantsService/FetchAllUsers";
import JobSelector from "../components/allaplicants/jobselector/JobSelector";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Card from "../components/allaplicants/cardcandidate/CardCandidate";
import { Link, Navigate } from "react-router-dom";

function Allaplicants() {

  const [jobs, setJobs] = useState();
  const [users, setUsers] = useState();
  const [userReady, setUserReady] = useState(false);
  const [jobReady, setJobReady] = useState(false);
  const [jobList, setJobList] = useState();
  const [selectedJob, setSelectedJob] = useState();
  const [jobApplicants, setJobApplicants] = useState();
  const [jobApplicantsData, setJobApplicantsData] = useState([]);
  const [role, setRole] = useState(true);
  const [countDown, setCountDown] = useState(5);

  
 

  function getJobList() {
    let jobList = [];
    if (userReady && jobReady) {
      Object.keys(jobs.data).map((key) => {
        let obj = {
          value : jobs.data[key].title,
          label : jobs.data[key].title
      };
        jobList.push(obj);
      });
    }
    return jobList;
  }


  function handleJobChange(e) {
    setSelectedJob(e.value);
    let jobApplicants = getJobApplicants();
    setJobApplicants(jobApplicants);
    let jobApplicantsData = getJobApplicantsData();
    setJobApplicantsData(jobApplicantsData);
  }

  async function getJobApplicants() {
    let jApplicants = await [];
    if (jobReady) {
      Object.keys(jobs.data).map((key) => {
        if (jobs.data[key].title === selectedJob) {
          Object.keys(jobs.data[key].applicants).map((key2) => {
            jApplicants.push(jobs.data[key].applicants[key2]._id);
          });
        }
      });
    }
    setJobApplicants(jApplicants);
    return jApplicants;
  }


  async function getJobApplicantsData() {
    let jap = await [];
    let jobApplicants =  await getJobApplicants();
    if (userReady && jobReady) {
      Object.keys(users.data).map((key) => {
        if (jobApplicants.includes(users.data[key]._id)) {
          jap.push(users.data[key]);
        }
      });
    }
    setJobApplicantsData(jap);
    return jap;
  }
  
  useEffect(() => {

    if (
    (localStorage.getItem("role") !== "employer" && sessionStorage.getItem("role") !== "employer") &&
    (localStorage.getItem("role") !== "admin" && sessionStorage.getItem("role") !== "admin") &&
    (localStorage.getItem("role") !== "empleado" && sessionStorage.getItem("role") !== "empleado")
    ) {
      setRole(false);
        if (countDown > 0) {
          setTimeout(() => {
            setCountDown(countDown - 1); 
          }, 1000);
        }

    }

    setJobs(FetchJobs(localStorage.getItem("user") ? localStorage.getItem("user") : sessionStorage.getItem("user"))
    .then((data) => {
      setJobs(data);
      setJobReady(true);
    }));

    setUsers(FetchAllUsers()
    .then((data) => {      
      setUsers(data);
      setUserReady(true);
    }
    ));

    setJobList(getJobList());
    setJobApplicants(getJobApplicants());
    setJobApplicantsData(getJobApplicantsData());
    console.log(users);
    console.log(jobs);
  }
  , [userReady && jobReady, selectedJob, role, countDown]);
  
  return (
    <>
     {role && userReady && jobReady && (
        <div className={Styles["main-container"]}>
          <div className={Styles["main-title"]}>
            <h3>Estos son los candidatos</h3>
            <h4>esto solo es un subtitulo de prueba</h4>
            <button className={Styles["menu-button"]}>
              <HiOutlineMenuAlt3 className={Styles["menu-icon"]} />
              Menu
            </button>
          </div>
          <div className={Styles["main-applicants"]}>
            <p>Tus Candidatos</p>
            <JobSelector options={jobList} onChange={handleJobChange} />
          </div>
          <div className={Styles["main-jobs"]}>
            <div className={Styles["jobs-title"]}>
              <div className={Styles["job-candidates"]}>Candidatos</div>
              <div className={Styles["applicants-count"]}>
                Total(s): {jobApplicantsData.length}
              </div>
            </div>
            <div className={Styles["applicants-list"]}>
              {userReady && jobReady &&
                selectedJob &&
                Object.keys(jobApplicantsData).map((key) => {
                  return (
                    <Card
                      key={key}
                      className={Styles["applicant"]}
                      photo={jobApplicantsData[key].photo}
                      username={jobApplicantsData[key].fullName}
                      especiality={jobApplicantsData[key].speciality}
                      location={"Málaga, España"}
                      hourate={"€ 20"}
                      // skills={jobApplicantsData[key].skills}
                      // email={users.data[key].email}
                      email={"the.d00m.666@gmail.com"}
                      // name={`${users.data[key].firstName} ${users.data[key].lastName}`}
                      job={selectedJob}
                      accepted={"aceptada"}
                      refused={"rechazada"}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
      {!role && (
        <div className={Styles["access-denied"]}>
          <h1>Acceso denegado</h1>
          <h2>Parece que no tienes permisos para acceder aquí...</h2>
          <h3>serás redirigido en {countDown} segundos</h3>
          <div className={Styles["go-back"]}>
            <Link to="/login"> Volver atras </Link>
          </div>
        </div>
      )
      }
      {countDown === 0 && <Navigate to="/login" />}
    </>
  );
}

export default Allaplicants;
