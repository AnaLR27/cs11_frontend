import style from "./jobInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBriefcase,
  faLocationDot,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "../Badge.component";
import { applyJob } from "../../services/ApplyAJob.service";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JobInfo({
  jobIdParams,
  refLogo,
  title,
  specialty,
  location,
  registerAt,
  salary,
  workDay,
  jobType,
}) {
  const [id, setId] = useState();
  useEffect(() => {
    console.log(jobIdParams);
    setId(jobIdParams);
  });

  const applyForJob = async () => {
    const result = await applyJob(id);
  };

  // TODO : Terminarlo
  return (
    <div className={style["job-block"]}>
      <div className={style["inner-box"]}>
        <div className={style["content"]}>
          <span className={style["job-logo"]}>
            <img
              src={`${refLogo}`}
              alt="Company Logo"
              className={style["company-img"]}
            />
          </span>
          <div>
            <h4 className={style["job-title"]}>{title}</h4>
            <ul className={style["job-info"]}>
              <li>
                <span>
                  <FontAwesomeIcon icon={faBriefcase} />
                  {specialty}
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {location?.city},{location?.country}
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faClock} />
                  {registerAt}
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faSackDollar} />
                  {salary * 0.8}k - {salary * 1.2}k
                </span>
              </li>
            </ul>
            <div className={style["job-other-info"]}>
              <Badge type="code" text={workDay} />
              &nbsp;
              <Badge type="code" text={jobType} />
            </div>
          </div>
        </div>
          <div className={style["btn-box"]}>
            <button
              onClick={applyForJob}
              className={`${style["theme-btn"]} ${style["btn-style"]}`}
            >
              Aplicar Trabajo
            </button>
          </div>
      </div>
    </div>
  );
}

export default JobInfo;
