import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMoneyBills,
  faEye,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import classes from "./employersDashboard.module.css";
import { Link } from "react-router-dom";
import FetchEmployerJobs from "../../services/FetchEmployerJobs";
import Loader from '../UI/Spinner/Loader';

function CardsApplicants() {
  //Controlador del fetch
  const [isLoading, setIsLoading] = useState(true);
  const [useJobs, setJobs] = useState([]);
  const [jobReady, setJobReady] = useState();

  // UseEffect mediante las funciones FetchEmployer y loadJobs hace la llamada
  // a la base de datos para renderizar los datos

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    const data = await FetchEmployerJobs();
    setJobs(data);
    setJobReady(true);
    // Filtrado de la data 
    let filterData = data
      .filter((wow) => wow.applicants.length >= 1)
      .map((usa) => usa.applicants.at(-1))
      .sort(
        (c, d) =>
          -new Date(c.applicationDate).getTime() +
          new Date(d.applicationDate).getTime()
      );
      console.log(filterData);
  }

  // Renderizacion de un componente spinner durante la espera a la
  // llamada de la base de datos
  if (isLoading) {
    return <div className={classes.DivCardsApp}><Loader /></div>;
  }

  return (
    <>
      {/* 
      <section className={classes.DivCardsApp}>
        <div>
          <div>
            <h3>Encuentra el candidato perfecto!</h3>
            <p>¿Listo para entrar de nuevo?</p>
            <div>
              <button>
                <FontAwesomeIcon icon={faBars} /> Menu
              </button>
            </div>
          </div>
          <div>
            <div>
              <h4>Candidatos Recientes</h4>
            </div>
            <div>
              {filtroCandidatos.map((uca, i) => {
                return (
                  <div className={classes.CardCand} key={i}>
                    <div>
                      <img
                        alt="Candidate"
                        className={classes.imgCardCand}
                        src={uca.photo}
                      />
                    </div>
                    <div>
                      <h4>
                        {uca.firstName} {uca.lastName} {uca.secondLastName}
                      </h4>
                      <div>
                        <div>
                          <p className={classes.blueP}>{uca.especiality}</p>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            className={classes.IconsCards}
                            icon={faLocationDot}
                          />
                          <p>{uca.location}</p>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            className={classes.IconsCards}
                            icon={faMoneyBills}
                          />
                          <p>{uca.hourlyRate.max} /hora</p>
                        </div>
                      </div>
                      <div>
                        <p>{uca.skills[0]}</p>
                        <p>{uca.skills[1]}</p>
                        <p>{uca.skills[2]}</p>
                      </div>
                      <div>
                        {/*<Link to={uca}>
                        <FontAwesomeIcon
                          className={classes.ButtonCardsCand}
                          icon={faEye}
                        />
                        {/*</Link> 
                        <a href={uca.socialNetworks.github}>
                          <FontAwesomeIcon
                            className={classes.ButtonCardsCand}
                            icon={faGithub}
                          />
                        </a>
                        <a href={uca.socialNetworks.linkedin}>
                          <FontAwesomeIcon
                            className={classes.ButtonCardsCand}
                            icon={faLinkedin}
                          />
                        </a>
                        {/*<a><FontAwesomeIcon
                          className={classes.ButtonCardsCand}
                          icon={faTrashCan}
                        /></a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    */}
    </>
  );
}
export default CardsApplicants;
