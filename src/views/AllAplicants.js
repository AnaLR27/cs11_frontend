import Styles from "../styles/AllAplicants.module.css";
import { useEffect, useState } from "react";
import FetchJobs from "../services/allAplicantsService/FetchJobs";
import FetchAllUsers from "../services/allAplicantsService/FetchAllUsers";
import JobSelector from "../components/allaplicants/jobselector/JobSelector";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Card from "../components/allaplicants/cardcandidate/CardCandidate";
import { Link, Navigate } from "react-router-dom";
import Spinner from "../components/UI/Spinner/Loader";
import Unauthorized from "../components/Unauthorized";

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
            jApplicants.push(jobs.data[key].applicants[key2].applicantId.loginId);
          });
        }
      });
    }
    setJobApplicants(jApplicants);
    // console.log(jApplicants);
    return jApplicants;
  }


  async function getJobApplicantsData() {
    let jap = await [];
    let jobApplicants =  await getJobApplicants();
    if (userReady && jobReady) {
      Object.keys(users.data).map((key) => {
        if (jobApplicants.includes(users.data[key].loginId)) {
          jap.push(users.data[key]);
        }
      });
    }
    setJobApplicantsData(jap);
    console.log(jap);
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

    setJobs(FetchJobs(localStorage.getItem("userId") ? localStorage.getItem("userId") : sessionStorage.getItem("userId"))
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
            <h3>Candidatos</h3>
            <p className={Styles["subtittle"]}>Encuentra a la persona adecuada</p>
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
                      linkid={jobApplicantsData[key].loginId}
                      photo={jobApplicantsData[key].photo}
                      username={jobApplicantsData[key].fullName + " " + jobApplicantsData[key].secondLastName}
                      especiality={jobApplicantsData[key].speciality}
                      edition={jobApplicantsData[key].bootcamp + " " + jobApplicantsData[key].edition}
                      skills={jobApplicantsData[key].professionalSkills}
                      // email={users.data[key].email}
                      email={"the.d00m.666@gmail.com"}
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
        <Unauthorized />
      )
      }
      {!userReady && !jobReady && (
        <div className={Styles["spinner"]}>
          <Spinner/>
        </div>
      )}
      {countDown === 0 && <Navigate to="/" />}
    </>
  );
}

export default Allaplicants;
