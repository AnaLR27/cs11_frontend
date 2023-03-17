// import './BurgerButton.css';
import styled from "styled-components";

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
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </StyledBurger>
  );
}

export default BurgerButton;

const StyledBurger = styled.button`
  .row .three {
    padding: 80px 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: black;
    text-align: center;
  }

  .hamburger .line {
    width: 30px;
    height: 3px;
    background-color: #4a4a4a;
    display: block;
    margin: 10px 30px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
  }

  .hamburger:hover {
    cursor: pointer;
  }


  #hamburger-1.is-active {
    background-color: #e5f0ed;
    position: absolute;
    top: 3.7rem;
    left: 232px;
    margin-top: 1rem;
  }

  #hamburger-1.is-active .line:nth-child(2) {
    opacity: 0;
  }

  #hamburger-1.is-active .line:nth-child(1) {
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }

  #hamburger-1.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }
`;
