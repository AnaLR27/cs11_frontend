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
import { useContext } from "react";
import { LoginModalContext } from "../../providers/LoginModalProvider";

import ReactDOM from "react-dom";
import Modal from "../UI/Modal";
import LoginForm from "../login_register_forms/LoginForm";
import RegisterForm from "../login_register_forms/RegisterForm";
import Navbar from "../navbar/Navbar";

function Header() {
  const { onLogin, setOnLogin, onRegister, setOpenLoginModal, openLoginModal } =
    useContext(LoginModalContext);

  const handleClick = () => {
    setOpenLoginModal(true);
    setOnLogin(true);
  };
  return (
    <header className={classes.header}>
      {ReactDOM.createPortal(
        <Modal openModal={openLoginModal} setOpenModal={setOpenLoginModal}>
          {onLogin && <LoginForm  />}
          {onRegister && <RegisterForm />}
        </Modal>,
        document.querySelector("#modal")
      )}

      <img className={classes.logo} src={logo} alt='' />
      <Navbar/>
      <div className={classes.btns}>
        <button className={classes.btn} onClick={handleClick}>
          Login / Register
        </button>

        <div className={classes.icon}>
          <FontAwesomeIcon icon={faUser} role="button" onClick={handleClick} />
        </div>
      </div>
    </header>
  );
}

export default Header;
