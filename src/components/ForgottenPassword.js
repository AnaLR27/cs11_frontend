import classes from "../styles/ForgottenPassword.module.css";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useState, useEffect } from "react";
import { EMAIL_REGEX } from "../utils/regExp";
import { useNavigate } from "react-router";
const ForgottenPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const result = EMAIL_REGEX.test(email); //email validation with regex
    setValidEmail(result);
  }, [email]);

  const handleSubmit = () => {
    if (!validEmail) {
      setErrMsg("Introduce por favor un email válido");
    } else {
      setErrMsg("");
    }
    console.log("email enviado");
  };
  return (
    <div className={classes["main-container"]}>
      <div className={classes.container}>
        <h3>Has olvidado tu contraseña?</h3>
        <p>
          Introduce tu email y te enviaremos un enlace para que puedas cambiarla
        </p>
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
              onClick={() =>handleSubmit()}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgottenPassword;
