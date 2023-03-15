import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faMoneyBills,
    faBars,
    faClock,
    faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import classes from "./candidatesDashboard.module.css";

function CandidatesDashboard() {
    //Controlador del fetch
    const [isLoading, setIsLoading] = useState(true);
    const [useCardsApp, setCandidatesDashboard] = useState([]);

    //Fetch, llamada a la base de datos para renderizar los datos
    useEffect(() => {
        fetch("http://localhost:8000/candidates")
            .then((response) => response.json())
            .then((useCardsApp) => {
                setCandidatesDashboard(useCardsApp);
                setIsLoading(false); //Cuando se cargue los datos, deja de cargar la pagina
            })
            .catch((error) => console.log("Algo ha fallado..."));
    }, []);

    //Forma de renderizar algo durante la espera a la llamada de la base de datos
    if (isLoading) {
        return (
            <div className={classes.CardCand}>
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <>
            <section className={classes.DivCardsApp}>
                <div>
                    <div>
                        <h3>Bienvenido, (nombre)!!</h3>
                        <p>¿Listo para seguir donde lo dejaste?</p>
                        <div>
                            <button>
                                <FontAwesomeIcon icon={faBars} /> Menu
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Empleos Solicitados Recientemente</h4>
                        </div>
                        <div>
                            {useCardsApp.data
                                .filter((lol) => lol.appliedJobs.length >= 1)
                                .sort(
                                    (c, d) =>
                                        -new Date(
                                            c.appliedJobs.at(-1).appliedDate
                                        ).getTime() +
                                        new Date(
                                            d.appliedJobs.at(-1).appliedDate
                                        ).getTime()
                                )
                                .slice(0, 6)
                                .map((uca, i) => {
                                    // calculo de tiempo transcurrido desde {uca.createdAt} y date.now()
                                    let elapsedTime = Math.floor(
                                        (Date.now() -
                                            new Date(uca.createdAt).getTime()) /
                                            3600000
                                    );
                                    console.log(elapsedTime);

                                    return (
                                        <div
                                            className={classes.CardEmp}
                                            key={i}
                                        >
                                            <div>
                                                <img
                                                    alt="Company Logo"
                                                    className={
                                                        classes.imgCardEmp
                                                    }
                                                    src={uca.logo}
                                                />
                                            </div>
                                            <div>
                                                <h4>{uca.title}</h4>
                                                <div>
                                                    <div>
                                                        <FontAwesomeIcon
                                                            className={
                                                                classes.IconsCards
                                                            }
                                                            icon={faBriefcase}
                                                        />
                                                        <p>{uca.companyName}</p>
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon
                                                            className={
                                                                classes.IconsCards
                                                            }
                                                            icon={faLocationDot}
                                                        />
                                                        <p>{uca.location}</p>
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon
                                                            className={
                                                                classes.IconsCards
                                                            }
                                                            icon={faClock}
                                                        />
                                                        <p>Hace elapsedTime horas</p>
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon
                                                            className={
                                                                classes.IconsCards
                                                            }
                                                            icon={faMoneyBills}
                                                        />
                                                        <p>${uca.salary}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li>{uca.jobType}</li>
                                                        <li>{uca.privacy}</li>
                                                        <li>Urgente</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CandidatesDashboard;
