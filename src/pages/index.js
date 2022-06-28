import React from "react";
// import dominickBlancoImage from "../photos/DominickBlanco.JPG"
import './pages.css'

const Home = () => {
  return (
    <div className="parent" >
        <div className="child">
            <h1 className="main-header">Hi there!</h1>
            <h1 className="name">My name is Dominick.</h1>
            <h1 className="name">I'm a CS👨🏽‍💻 student from the Bronx, NYC 🗽</h1>
            <p className={"under-name1"}>B.S. in CS from the <b>University of Notre Dame</b> <span className={"tab"}></span> May 2024 </p>
            <p className={"under-name2"}>SWE intern at <b>Ford Motor Company</b></p>
            <p className={"under-name2"}>MLT Cohort of 2024, Takeoff Institute Fellow</p>
            <p className={"under-name3"}>Fan of <b>Web dev</b>, <b>Venture Captial</b>, and <b>One Piece</b></p>
            <button onClick="window.location.href='https://docs.google.com/document/d/17IIxubLSzMe4YCKxmBEXDaqvvY_kHkNwkFaa0urrPZw/edit?usp=sharing'" className="btn">Resume</button>


            {/*<p>I'm currently a Junior at the University of Notre Dame ☘️*/}
            {/*    majoring in Computer Science👨🏽‍💻 with a minor in Latino Studies.</p>*/}
            {/*<p>I am a first-gen Dominican-American 🇩🇴 from the Bronx, NYC 🗽.</p>*/}
            {/*<h1 className="subject-header">Education:</h1>*/}
            {/*<p>B.S. in Computer Science from the University of Notre Dame <span class="tab"></span> May 2024</p>*/}
            {/*<p>Technical Languages: C/C++, Python, JavaScript/HTML/CSS</p>*/}
            {/*<h1 className="subject-header">Experience:</h1>*/}
            {/*<p>Software Engineering Intern at Ford Motor Company</p>*/}
            {/*<h1 className="subject-header">Projects:</h1>*/}
            {/*<p>Cadabra: A Blackjack Simulator with Help Feature</p>*/}
        </div>
    </div>
  );
};

export default Home;
