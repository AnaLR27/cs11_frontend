import classes from "../styles/Unauthorized.module.css";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <div className={classes["unauthorized"]}>
      <h2>Unauthorized</h2>
      <p>Parece que estas intentando acceder a un contenido protegido</p>
      <button className={classes["unauthorized-btn"]} onClick={()=>navigate("/")}>VOLVER AL INICIO</button>
    </div>
  );
};

export default Unauthorized;
