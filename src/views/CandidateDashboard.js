import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faMoneyBills,
    faBars,
    faClock,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import classes from "../styles/CandidateDashboard.module.css";
import FetchUserData from "../services/candidateDashboardFetch/FetchUsersData";
import FetchOfferData from "../services/candidateDashboardFetch/FetchOfferData";

function CandidatesDashboard() {
    //Controlador del fetch
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [userReady, setUserReady] = useState(false);
    const [offerData, setOfferData] = useState();
    const [offerReady, setOfferrReady] = useState(false);
    const appliedJobsByTime = [];
    const jobIDs = [];

    //Fetch para obtener los datos del usuario
    useEffect(() => {
        setUserData(
            FetchUserData()
                .then((data) => {
                    setUserData(data);
                    setUserReady(true);
                })
                .catch((error) => console.log("Algo ha fallado..."))
        );
    }, []);

    //Fetch para obtener los datos de las ofertas
    useEffect(() => {
        if (offerReady) {
            setOfferData(
                FetchOfferData()
                    .then((data) => {
                        setOfferData(data);
                        setOfferrReady(true);
                    })
                    .catch((error) => console.log("Algo ha fallado..."))
            );
        }
    }, []);

    useEffect(() => {
        if (offerData) {
            setIsLoading(false);
        }
    }, [offerData]);

    if (userReady) {
        const mappedJobs = userData.appliedJobs.map((job) => {
            appliedJobsByTime.push(job);
            return job;
        });

        // Ordenar los empleos por fecha de solicitud
        const mappedJobsSorted = mappedJobs.sort((a, b) => {
            return new Date(b.appliedDate) - new Date(a.appliedDate);
        });

        const mappedJobsIDs = mappedJobsSorted.map((job) => {
            jobIDs.push(job.idJob);
            return job.idJob;
        });
        console.log(mappedJobsIDs);
    }

    if (offerReady) {
        const mappedOffers = offerData.map((offer) => {
            return offer;
        });
        console.log(mappedOffers);
    }

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
                        <h3>Bienvenido, {userData.firstName}!!</h3>
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
                            {jobIDs.map((uca, i) => {
                                // calculo de tiempo transcurrido desde {uca.createdAt} y date.now()
                                let elapsedTime = Math.floor(
                                    (Date.now() -
                                        new Date(uca.appliedDate).getTime()) /
                                        3600000
                                );
                                console.log(elapsedTime);

                                return (
                                    <div className={classes.CardEmp} key={i}>
                                        <div>
                                            <img
                                                alt="Company Logo"
                                                className={classes.imgCardEmp}
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
                                                    <p>
                                                        Hace {elapsedTime} horas
                                                    </p>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon
                                                        className={
                                                            classes.IconsCards
                                                        }
                                                        icon={faMoneyBills}
                                                    />
                                                    <p>{uca.salary}€</p>
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
