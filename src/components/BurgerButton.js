import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function BurgerButton(props) {
  return (
    <StyledBurger>
      {/* Cuando hagamos click, se ejecuta la función handleClick y cambia el
      estado de clicked a true o false */}
      <div
        onClick={props.handleClick}
        className={`hamburger ${props.clicked ? "is-active" : ""}`}
        id="hamburger-1"
      >
        <button >
          <FontAwesomeIcon className="icon" icon={faBars} /> 
        </button>
      </div>

      {/* <div
        onClick={props.handleClick}
        className={`hamburger ${props.clicked ? "is-active" : ""}`}
        id="hamburger-1"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div> */}
    </StyledBurger>
  );
}

export default BurgerButton;

const StyledBurger = styled.button`

#hamburger-1.hamburger.is-active{
  background-color: #e5f0ed;
width: 110%;
} 
.icon{
  font-size: 1.5rem;

}

  div.is-active {
    position: relative;
    padding: 10px 30px;
    border-radius: 8px;
    top: 0rem;
    transition: 0.8s ease-in-out;
  }

button{
  opacity: 0;
  @media (max-width: 821px) {
    color: #4a4a4a;
    background-color: #e5f0ed;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    position: relative;
    line-height: 25px;
    padding: 3px auto;
    border-radius: 8px;
    top: 1rem;
    left: 13rem;
    opacity: 1;
 
}
@media (min-width: 821px) {
display: none;
}
 

`;
