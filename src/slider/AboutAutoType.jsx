import React from "react";
import Typewriter from "typewriter-effect";

function AboutAutoType() {
  const typewriterContainerStyles = {
    color: "#183152",
    lineHeight: "1.5rem",
    fontSize:'1.5rem',
    fontFamily: 'Montserrat Subrayada',
    margin:'15px 0px'
  };

  return (
    <div className="typewriter-container" style={typewriterContainerStyles}>
      <Typewriter
        options={{
          strings: [
            " About Me....",
          ],
          autoStart: true,
          loop: true,
          pause: 200,
        }}
      />
    </div>
  );
}

export default AboutAutoType;