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
import Loader from "../components/UI/Spinner/Loader";

function CandidatesDashboard() {
    //Controlador del fetch
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [userReady, setUserReady] = useState(false);
    const [offerData, setOfferData] = useState();
    const [offerReady, setOfferReady] = useState(false);
    let userID = "";

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

    if (userReady) {
        userID = userData._id;
    }

    //Fetch para obtener los datos de los empleos
    useEffect(() => {
        if (userReady) {
            setOfferData(
                FetchOfferData(userID)
                    .then((data) => {
                        setOfferData(data);
                        setOfferReady(true);
                    })
                    .catch((error) => console.log("Algo ha fallado..."))
            );
        }
    }, [userID, userReady]);
    
    //Controlador de la espera a la llamada de la base de datos
    useEffect(() => {
        if (userReady && offerReady) {
            setIsLoading(false);
        }
    }, [userReady, offerReady]);

    //Forma de renderizar algo durante la espera a la llamada de la base de datos
    if (isLoading) {
        return (
            <Loader />
        );
    }

    console.log(offerData);

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
                            {offerData.map((uca, i) => {
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
                                            <h4>
                                                {uca.title}
                                            </h4>
                                            <div>
                                                <div>
                                                    <FontAwesomeIcon
                                                        className={
                                                            classes.IconsCards
                                                        }
                                                        icon={faBriefcase}
                                                    />
                                                    <p>
                                                        {uca.company}
                                                    </p>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon
                                                        className={
                                                            classes.IconsCards
                                                        }
                                                        icon={faLocationDot}
                                                    />
                                                    <p>
                                                        {uca.location.city},{" "}
                                                        {uca.location.country}
                                                    </p>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon
                                                        className={
                                                            classes.IconsCards
                                                        }
                                                        icon={faClock}
                                                    />
                                                    <p>
                                                        Hace más de 24h
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
                                                    <li>
                                                        {uca.jobType}
                                                    </li>
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
