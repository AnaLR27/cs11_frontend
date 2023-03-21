import React from "react";
import styles from "../../styles/navbarpublic.module.css";

const AboutUs = () => {
  return (
    <>
      <h1 className={`${styles.h1Tit}`}>About Us</h1>
      <div className={`${styles.pall}`}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut turpis
        at risus pharetra convallis vel eu sapien. Sed in consequat dolor. Proin
        aliquam convallis quam, a vulputate risus malesuada at. Praesent rutrum
        arcu quis leo bibendum, non dictum eros ornare. Nullam feugiat lorem non
        odio commodo, ut pulvinar dolor bibendum. Fusce laoreet felis a dolor
        interdum, eget imperdiet magna malesuada. Sed viverra, arcu eu fermentum
        dignissim, velit velit pharetra lorem, a egestas nibh nulla quis nulla.
      </p>
    
      </div>
    </>
  );
};

export default AboutUs;
