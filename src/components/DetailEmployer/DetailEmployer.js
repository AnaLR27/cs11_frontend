/**
 * @fileoverview DetailEmployer component
 * @author Juan Dominguez 
 * @author David Calero
 * @modified
 */

import classesDetails from "./DetailEmployer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faCoins,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import GetEmployerData from "../../services/detailEmployerService/GetEmployerData";

import { useEffect, useState } from "react";

function DetailEmployer() {
  const [infoEmployer, setInfoEmployer] = useState({});

  useEffect(() => {
    let infoEmployerTmp = GetEmployerData();
    infoEmployerTmp.then((data) => {
      console.log(data);
      setInfoEmployer(data);
    });
  }, []);
  console.log(infoEmployer);
  return (
    <>
      <div className={classesDetails["col-lg-8"]}>
        <div className={classesDetails["content-employer"]}>
          <div>
            <img
              src={infoEmployer.logo}
              alt="imagen"
              className={classesDetails["img-employer"]}
            />
            <h4 className={classesDetails["name-employer"]}>
              {infoEmployer.companyName}
            </h4>
            <ul className={classesDetails["info-employer"]}>
              <li className={classesDetails["job"]}>
                {infoEmployer.location?.country}
              </li>
              <li>
                <span className={classesDetails["date"]}>
                  <FontAwesomeIcon
                    icon={faClock}
                    className={classesDetails["icon-fa-clock"]}
                  />
                  Member Since, {infoEmployer.registerAt}
                </span>
              </li>
            </ul>
          </div>
          <div className={classesDetails["description"]}>
            <h4>About Company</h4>
            <p>{infoEmployer.description}</p>
          </div>
        </div>
      </div>
      <div className={classesDetails["col-lg-4"]}>
        <div className={classesDetails["content"]}>
          <ul className={classesDetails["jobs-information"]}>
            <li>
              <FontAwesomeIcon
                icon={faCalendar}
                className={classesDetails["icons-job"]}
              />

              <h5>Email:</h5>
              <a href={`mailto:${infoEmployer.email}`}>{infoEmployer.email}</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPhone}
                className={classesDetails["icons-job"]}
              />
              <h5>Phone:</h5>
              <span>{infoEmployer.phone}</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCoins}
                className={classesDetails["icons-job"]}
              />
              <h5>Website:</h5>
              <a target="_blank" href={infoEmployer.website}>
                {infoEmployer.website}
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={classesDetails["icons-job"]}
              />
              <h5>Location:</h5>
              <span>
                {infoEmployer.location?.country},{infoEmployer.location?.city}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DetailEmployer;
