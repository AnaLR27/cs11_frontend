/**
 * @fileoverview DetailCandidate component
 * @author Juan Dominguez
 * @modified 15/03/2022 by Alina Dorosh
 * @modified 15/03/2022 by Juan Dominguez
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
import GetCandidateData from "../../services/detailCandidateService/GetCandidateData";
import Like from "../../services/detailCandidateService/ButtonMark";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { reformatDate } from "../../utils/filterDate"; 

function DetailCandidate(props) {
  const [infoCandidate, setInfoCandidate] = useState([]);
  const params = useParams();
  const loginId = params.loginId;
<<<<<<< HEAD
=======

>>>>>>> 8f8e3ad635ee068ec2f80987223b6e02fa67d1e8
  useEffect(() => {
    let infoCandidateTmp = GetCandidateData(loginId);
    infoCandidateTmp.then((data) => {
      setInfoCandidate(data);
    });
  }, []);
  
  const getCandidatePhoto = (photo) => {
    return photo ? "http://localhost:8000/candidate/photo/" + photo : undefined;
  };
  if(infoCandidate.length === 0) return (<div>Loading...</div>)
  return (
    <div className={classesDetails.container}>
      <div className={classesDetails["col-lg-8"]}>
        <div className={classesDetails["content-candidate"]}>
          <div>
            <img
              src={getCandidatePhoto(infoCandidate.photo)}
              alt="imagen"
              className={classesDetails["img-candidate"]}
            />
            <h4 className={classesDetails["name-candidate"]}>
              {infoCandidate.fullName} 
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
                  Miembro desde {reformatDate(infoCandidate.loginId.registerAt)}
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
            Descargar CV
          </a>
          {/* <button
            className={classesDetails["button-mark"]}
            onClick={() => Like(props.candidate)}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button> */}
        </div>
        <div className={classesDetails["content"]}>
          <ul className={classesDetails["jobs-information"]}>
            <li>
              <FontAwesomeIcon
                icon={faCalendar}
                className={classesDetails["icons-job"]}
              />

              <h5>Email:</h5>
              <a href={`mailto:${infoCandidate.loginId.email}`}>
                {infoCandidate.loginId.email}
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faHourglassHalf}
                className={classesDetails["icons-job"]}
              />
              <h5>Bootcamp:</h5>
              <span>
                {infoCandidate.bootcamp} {infoCandidate.edition}
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCoins}
                className={classesDetails["icons-job"]}
              />
              <h5>Linkedin:</h5>
              <a target="_blank" href={infoCandidate.socialNetworks?.linkedin}>
                {`${infoCandidate.socialNetworks?.linkedin.substring(0, 28)}...`}
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLanguage}
                className={classesDetails["icons-job"]}
              />
              <h5>Idiomas:</h5>
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
