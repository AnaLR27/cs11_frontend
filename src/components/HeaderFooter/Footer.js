import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className={classes.footer}>
      <p>
        <FontAwesomeIcon icon={faCopyright} /> 2023Made wiht{" "}
        <FontAwesomeIcon className={classes.heart} icon={faHeart} /> by{" "}
        <a href="https://github.com/cod3spac3Academy/Team-Edition-11">
          FULL STACK WEB DEVELOPMENT, 11 EDITION.
        </a>{" "}
        All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
