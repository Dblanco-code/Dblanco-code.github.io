import React from "react";

const About = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        padding: "20rem",
        letterSpacing: ".5px",
        lineHeight: "25px",
      }}
    >
      <h1
        style={{
          paddingBottom: "15px",
        }}
      >
        Dominick J. Blanco
      </h1>
      <body
        style={{
          paddingBottom: "15px",
        }}
      >
        <p>
          Hi there! I'm currently a Junior at the University of Notre Dame âï¸
          majoring in Computer Scienceð¨ð½âð» with a minor in Latino Studies.
        </p>
        <p>I am a first-gen Dominican-American ð©ð´ from the Bronx, NYC ð½.</p>
      </body>
      <body>
        <h2>Education:</h2>
        <p>B.S. in Computer Science University of Notre Dame 2020 - May 2024</p>
      </body>
    </div>
  );
};

export default About;
