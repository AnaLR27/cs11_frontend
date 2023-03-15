import classes from "../styles/ForgottenPassword.module.css";
import Input from "./UI/Input";
import Button from "./UI/Button";
import InfoAlert from "./UI/InfoAlert";
import { useState, useEffect } from "react";
import { EMAIL_REGEX } from "../utils/regExp";
import { useNavigate } from "react-router";
import ApiRequest from "../services/apiRequest";
const ForgottenPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const result = EMAIL_REGEX.test(email); //email validation with regex
    setValidEmail(result);
    setErrMsg("");
  }, [email]);

  const handleSubmit = async () => {
    if (!validEmail) {
      setErrMsg("Introduce por favor un email válido");
      return;
    }
    const response = await ApiRequest.forgottenPassword({ email });
    if (response.message === "Failed to fetch") {
      setErrMsg("Conection error. Please reload the app");
      return;
    }
    if (response.status === 200) {
      console.log("email enviado");
      setEmail("");
    }
  };
  return (
    <div className={classes["main-container"]}>
      <div className={classes.container}>
        <h3>Has olvidado tu contraseña?</h3>
        <p>
          Introduce tu email y te enviaremos un enlace para que puedas cambiarla
        </p>
        {errMsg && <InfoAlert alertTxt={errMsg} className='alert-red' />}
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='email'>Email</label>
          <Input
            type='email'
            id='email'
            className='forgot-password'
            placeholder='Email'
            autoFocus={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className={classes["btn-container"]}>
            <Button
              type='button'
              className='cancel'
              buttonTxt='Cancelar'
              onClick={() => navigate("/")}
            />
            <Button
              type='submit'
              disabled={!email}
              className='submit'
              buttonTxt='Enviar'
              onClick={() => handleSubmit()}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgottenPassword;
