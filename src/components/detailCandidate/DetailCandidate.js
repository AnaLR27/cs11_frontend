/**
 * @fileoverview DetailCandidate component
 * @author Juan Dominguez
 * @modified 15/03/2022 by Alina Dorosh
 */
import classesDetails from "./DetailCandidate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCalendar,
  faHourglassHalf,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faCoins, faLanguage } from "@fortawesome/free-solid-svg-icons";
// import img from "../../assets/img/candidate-2.png";
import GetCandidateData from "../../services/detailCandidateService/GetCandidateData";
import Like from "../../services/detailCandidateService/ButtonMark";
import { useEffect, useState } from "react";


function DetailCandidate(props) {
  const [infoCandidate, setInfoCandidate] = useState([]);

  useEffect(() => {
    let infoCandidateTmp = GetCandidateData();
    infoCandidateTmp.then((data) => {
      setInfoCandidate(data);
    });
  }, [ ]);
  // console.log(infoCandidate.appliedJobs);
  return (
    <div className={classesDetails.container}>
      <div className={classesDetails["col-lg-8"]}>
        <div className={classesDetails["content-candidate"]}>
          <div>
             <img
              src={infoCandidate.photo}
              alt="imagen"
              className={classesDetails["img-candidate"]}
            /> 
            <h4 className={classesDetails["name-candidate"]}>
              {infoCandidate.firstName} {infoCandidate.lastName}
            </h4>
            <ul className={classesDetails["info-candidate"]}>
              <li className={classesDetails["job"]}>
                {infoCandidate.specialty}
              </li>
              <li>
                <span className={classesDetails["date"]}>
                  <FontAwesomeIcon
                    icon={faClock}
                    className={classesDetails["icon-fa-clock"]}
                  />
                  Member Since, {infoCandidate.registerAt}
                </span>
              </li>
            </ul>
          </div>
          <div className={classesDetails["description"]}>
            <p>{infoCandidate.description}</p>
          </div>
        </div>
      </div>
      <div className={classesDetails["col-lg-4"]}>
        <div className={classesDetails["button-container"]}>
          <a
            className={classesDetails["button-cv"]}
            href={infoCandidate.resume}
            download
          >
            Download CV
          </a>
          <button
            className={
              classesDetails["button-mark"]
            } onClick={()=>Like(props.candidate) }
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
        <div className={classesDetails["content"]}>
          <ul className={classesDetails["jobs-information"]}>
            <li>
              <FontAwesomeIcon
                icon={faCalendar}
                className={classesDetails["icons-job"]}
              />

              <h5>Email:</h5>
              <a href={`mailto:${infoCandidate.email}`}>{infoCandidate.email}</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faHourglassHalf}
                className={classesDetails["icons-job"]}
              />
              <h5>Bootcamp:</h5>
              <span>{infoCandidate.bootcamp} {infoCandidate.edition}</span>
            </li>
            <li>
            <FontAwesomeIcon icon={faCoins} className={classesDetails["icons-job"]} />
            <h5>Linkedin:</h5>
            <a target="_blank" href={infoCandidate.socialNetworks?.linkedin}>
               {infoCandidate.socialNetworks?.linkedin}
            </a>
          </li>
            <li>
              <FontAwesomeIcon
                icon={faLanguage}
                className={classesDetails["icons-job"]}
              />
              <h5>Language:</h5>
              <span>{infoCandidate.languages?.join(", ")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailCandidate;


// {`mailto:${infoCandidate.email}`} realiza la función de un href, pero en este caso es para enviar un correo electrónico.