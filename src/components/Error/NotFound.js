import classes from "./NotFound.module.css";
import fondo from "../../assets/img/not-found.jpg"

function NotFound() {
  return (
  
      <div className={classes.notFound}>
        <img className={classes.fondo} src={fondo} alt="" />
        <p className={classes.num}>404</p>
        <p className={classes.text}>The page you are looking for could not be found</p>
        <a className={classes.btn} href="/">
          BACK TO HOME
        </a>
      </div>
      
  );
}

export default NotFound;
