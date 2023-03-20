import { CANDIDATES_API } from "../config/urls";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//BURGERMENU
import BurgerButton from "./BurgerButton";
// STYLED
import styled from "styled-components";
import swal from "sweetalert2";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faListCheck,
  faLock,
  faRightFromBracket,
  faTrashCan,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function MenuEmployers() {
  //BURGERMENU
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //Cuando está true lo pasa a false y viceversa
    setClicked(!clicked);
  };

  // LOGOUT
  const [isLogged, setIsLogged] = useState(false);
  const handleLogout = () => {
    swal
      .fire({
        title: "¿Estás seguro de que quieres hacer logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#47d7ac",
        cancelButtonColor: "#2c7a7b",
        confirmButtonText: "Logout",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal
            .fire({
              title: "Volviendo a la página principal",
              icon: "success",
              confirmButtonColor: "#2c7a7b",
            })
            .then(function () {
              window.location.href = "/#";
            });
          sessionStorage.removeItem("userToken");
          sessionStorage.clear();
          setIsLogged(!isLogged);
        } else {
          window.location.href = "/menu";
        }
      });
  };

  // DELETE PROFILE
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = () => {
    setIsDeleted(!isDeleted);
    swal
      .fire({
        title: "¿Estás seguro de que quieres eliminar tu perfil?",
        text: "No podrás recuperarlo",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#47d7ac",
        cancelButtonColor: "#2c7a7b",
        confirmButtonText: "Eliminar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal
            .fire({
              title: "Perfil eliminado con éxito",
              text: "Volviendo a la página principal",
              icon: "success",
              confirmButtonColor: "#2c7a7b",
            })
            .then(function () {
              window.location.href = "/#";
            });

          async function DeleteCandidateData() {
            let token = sessionStorage.getItem("accessToken");
            let loginId = sessionStorage.getItem("userId");
            // Realizamos la petición a la API para que nos devuelva los datos del candidato descargando el pdf
            try {
              const response = await fetch(` ${CANDIDATES_API}/${loginId}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": token,
                },
              });
              const responseJson = await response.json();
              return responseJson.data;
              // Aquí se puede manipular los datos obtenidos
            } catch (error) {
              console.error(error);
            }
            console.log(loginId);
            console.log("borrando");
          }
          DeleteCandidateData();
        } else {
          window.location.href = "/menu";
        }
      });
  };

  return (
    <>
      <MenuContainer>
        <div className="burger-container">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <nav className={`Menulinks ${clicked ? "active" : ""}`}>
          <div>
            <BurgerButton clicked={clicked} handleClick={handleClick} />
          </div>
          <div className="icon"> </div>
          <Link className="Menu-a" to={"/Profile"}>
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            Perfil
          </Link>
          <Link className="Menu-a" to="/Postanewjob">
            <span className="icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            Publicar nuevo empleo
          </Link>
          <Link className="Menu-a" to="/Managejobs">
            <span className="icon">
              <FontAwesomeIcon icon={faListCheck} />
            </span>
            Administrar Trabajos
          </Link>
          <Link className="Menu-a" to="/Changepassword">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            Cambiar contraseña
          </Link>
          <Link onClick={handleLogout} className="Menu-a" to="/">
            <span className="icon">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            Logout
          </Link>
          <Link onClick={handleDelete} className="Menu-a" to="/">
            <span className="icon">
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
            Eliminar Perfil
          </Link>
        </nav>
      </MenuContainer>
    </>
  );
}

export default MenuEmployers;

const MenuContainer = styled.div`
.Menu-a {
  padding-top: 3rem;
  font-size: 1.3rem;
  color: #4a4a4a;
  background-color: #e5f0ed;
  text-decoration: none;
  display: block;
  list-style-type: disc;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 25px;
  
  
}
.icon{
margin-right: 18px;
font-size: 23px;
}
  
.Menulinks {
  padding-top: 0.4em;
  position: absolute;
    left: 0px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    background-color: #e5f0ed;
    width: 22rem;
    height: 100%; 
   
    
    
  @media (max-width: 821px) {
   position: relative;
    left: -700px;
    background-color: #e5f0ed;
    width: 8%;
    height: 100vh; 
    display: none;


  }}
  
  .Menulinks.active{
    background-color: #e5f0ed;
    width: 21rem;
    height: 100vh;
    display: block;
    margin-left: 0;
    margin-right: auto;
    top: -4rem;
    left: 0;
    rigth: 0;
    text-align: left;
    position: relative;
    border-radius: 0 40px 0 0;
  }
.burger-container{
margin-top: 1rem;
margin-left: -10rem;
  @media (min-width: 821px) {
    display: none;
  

`;
