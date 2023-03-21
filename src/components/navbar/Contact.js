import React from "react";
import mapsCodespace from "../../assets/Logo/mapsCodespace.png";
import styles from "../../styles/navbarpublic.module.css";

const Contact = () => {
  return (
    <div className={`${styles.containerall}`}>
      <img className={`${styles.mapsCode}`} src={mapsCodespace} alt="" />
      <div className={`${styles.public}`}>
        <h1 className={`${styles.h1Tit}`}>Contacto</h1>
        <ul className={`${styles.ullist}`}>
          <li>
            <strong>Dirección:</strong> C. Compositor Lehmberg Ruiz, 13, 29007
            Málaga
          </li>
          <li>
            <strong>Télefono:</strong> 952 300 426 / 682 827 017
          </li>
          <li>
            <strong className={`${styles.link}`}>
              <a href="https://codespaceacademy.com/">
                www.codesaceacademy.com
              </a>
            </strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
