/**
 * @fileoverview Header component
 * interface for the header component
 * @author Daniel Vallejo
 * functionality for button "Login/Register"
 * @author Alina Dorosh
 */
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/img/logo-negro.png";
import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import { LoginModalContext } from "../../providers/LoginModalProvider";
import Modal from "../UI/Modal";
import LoginForm from "../login_register_forms/LoginForm";
import RegisterForm from "../login_register_forms/RegisterForm";
import Navbar from "../navbar/Navbar";

function Header() {
  //access to modal context
  const {
    onLogin,
    setOnLogin,
    onRegister,
    setOpenLoginModal,
    openLoginModal,
    isAuthenticated,
  } = useContext(LoginModalContext);

  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    isAuthenticated ? setRole(sessionStorage.getItem("role")) : setRole("");
  }, [isAuthenticated]);

  const handleClick = () => {
    setOpenLoginModal(true);
    setOnLogin(true);
  };
  return (
    <header className={classes.header}>
      {ReactDOM.createPortal(
        <Modal openModal={openLoginModal} setOpenModal={setOpenLoginModal}>
          {onLogin && <LoginForm />}
          {onRegister && <RegisterForm />}
        </Modal>,
        document.querySelector("#modal")
      )}

      <img className={classes.logo} src={logo} alt='' />

      <Navbar />
      {!isAuthenticated && (
        <div className={classes.btns}>
          <button className={classes.btn} onClick={handleClick}>
            Login / Register
          </button>

          <div className={classes.icon}>
            <FontAwesomeIcon
              icon={faUser}
              role='button'
              onClick={handleClick}
            />
          </div>
        </div>
      )}
      {isAuthenticated && (
        <button className={classes["dashboard-btn"]} onClick={()=>{navigate(`${role}s-dashboard`)}}>Mi Dashboard</button>
      )}
    </header>
  );
}

export default Header;
