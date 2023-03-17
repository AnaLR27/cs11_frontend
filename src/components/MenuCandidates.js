import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileLines, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFileLines,
  faLock,
  faRightFromBracket,
  faTrashCan,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function MenuCandidates() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //Cuando está true lo pasa a false y viceversa
    setClicked(!clicked);
  };

  const [isLogged, setIsLogged] = useState(false);
  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro de que quieres hacer logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#47d7ac",
      cancelButtonColor: "#2c7a7b",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire({
          title: "Volviendo a la página principal",
          icon: "success",
          confirmButtonColor: "#2c7a7b",
        });

        sessionStorage.removeItem("userToken");
        sessionStorage.clear();
        setIsLogged(!isLogged);
      }
    });
  };

  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = () => {
    setIsDeleted(!isDeleted);
    Swal.fire({
      title: "¿Estás seguro de que quieres eliminar tu perfil?",
      text: "No podrás recuperarlo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#47d7ac",
      cancelButtonColor: "#2c7a7b",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Perfil eliminado con éxito",
          text: "Volviendo a la página principal",
          icon: "success",
          confirmButtonColor: "#2c7a7b",
        });
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
          <ol>
            <li>
              <Link className="Menu-a" to="/Myprofile">
                <span className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Mi Perfil
              </Link>
              <Link className="Menu-a" to="/CVmanager">
                <span className="icon">
                  <FontAwesomeIcon icon={faFileLines} />
                </span>
                Gestor de CV
              </Link>
              <Link className="Menu-a" to="/Changepassword">
                <span className="icon">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                Cambiar Contraseña
              </Link>
              <Link className="Menu-a" to="/#">
                <span className="icon">
                  <FontAwesomeIcon onClick={handleLogout} icon={faRightFromBracket} />
                </span>
                Log out
              </Link>
              <Link onClick={handleDelete} className="Menu-a" to="/#">
                <span className="icon">
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
                Eliminar cuenta
              </Link>
            </li>
            s
          </ol>
        </nav>
      </MenuContainer>
    </>
  );
}

export default MenuCandidates;

const MenuContainer = styled.div`
.Menu-a {
  padding-top: 8%;
  font-size: 1.2rem;
  color: #4a4a4a;
  background-color: #e5f0ed;
  text-decoration: none;
  display: block;
  padding-bottom: 1rem;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 50px;
}
.icon{
margin-right: 15px;
font-size: 20px;
}
  
.Menulinks {
  position: absolute;
    left: 0px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    background-color: #e5f0ed;
    width: 30%;
    height: 100%; 
   
    
  @media (max-width: 768px) {
   position: relative;
    left: -700px;
    background-color: #e5f0ed;
    padding-top: 8%;
    width: 8%;
    height: 100vh; 
    transition: all .6s ease-in-out;
    
    
  }}
  .Menulinks.active{
    background-color: #e5f0ed;
    width: 65%;
    height: 100vh;
    display: block;
    margin-left: 0;
    margin-right: auto;
    top: 10%;
    left: 0;
    rigth: 0;
    text-align: left;
  }
.burger-container{
 margin-top: 15%;
  @media (min-width: 768px) {
    display: none;

}
`;
