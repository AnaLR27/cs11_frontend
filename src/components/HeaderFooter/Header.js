import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/Logo/logo-code.png";

function Header() {
  return (
    <div className={classes.header}>
      <img className={classes.logo} src={logo} alt="" />
      <div className={classes.links}>
        <div className={classes.btns}>
          <a className={classes.btns} href="">Login / Register </a> 
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
}

export default Header;
