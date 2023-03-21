import React, { useState } from "react";
import styles from "./HeaderNav.module.css";
import logo from "../assets/Logo/logoTransparente.png";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { SidebarData } from "./navbar/SlidebarData";
import { useContext } from "react";
import { LoginModalContext } from "../providers/LoginModalProvider";

import ReactDOM from "react-dom";
import Modal from "./UI/Modal";
import LoginForm from "./login_register_forms/LoginForm";
import RegisterForm from "./login_register_forms/RegisterForm";

const HeaderNav = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { onLogin, setOnLogin, onRegister, setOpenLoginModal, openLoginModal } =
    useContext(LoginModalContext);

  const handleClick = () => {
    setOpenLoginModal(true);
    setOnLogin(true);
  };
  return (
    <header className={styles["header-container"]}>
      {ReactDOM.createPortal(
        <Modal openModal={openLoginModal} setOpenModal={setOpenLoginModal}>
          {onLogin && <LoginForm />}
          {onRegister && <RegisterForm />}
        </Modal>,
        document.querySelector("#modal")
      )}
      <div className={styles["logo-container"]}>
        <img className={`${styles.logo}`} src={logo} alt="" />
      </div>

      <div className={styles["nav-container"]}>
        <div className={`${styles.navbar}`}>
          <FaIcons.FaBars onClick={showSidebar} />
        </div>

        <nav
          className={
            sidebar
              ? `${styles["nav-menu"]} ${styles.active}`
              : `${styles["nav-menu"]}`
          }
        >
          <ul className={`${styles["nav-menu-items"]}`} onClick={showSidebar}>
            <li className={`${styles["navbar-toggle"]}`}>
              <Link to="/" className={`${styles["menu-bars"]}`}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map(({ path, title }, index) => {
              return (
                <li key={index} className={`${styles["nav-text"]}`}>
                  <Link to={path}>
                    <span>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={`${styles.btns}`}>
            <button className={`${styles.btn}`} onClick={handleClick}>
              Login / Register
            </button>

            <div className={`${styles.icon}`}>
              <FontAwesomeIcon
                icon={faUser}
                role="button"
                onClick={handleClick}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
