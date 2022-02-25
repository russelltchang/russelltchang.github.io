import React from "react";
import headshot from "/client/public/headshot.png";
import votenow from "/client/public/votenow.png";
import pinterest from "/client/public/pinterest.png";
import habitastic from "/client/public/habitastic.png";
import sleekpages from "/client/public/sleekpages.png";
import resume from "/client/public/resume.pdf";

const Portfolio = () => {
  let handleAnchor1Click = () => {
    var element = document.getElementById("projects-section");
    element.scrollIntoView({ behavior: "smooth" });
  };

  let handleAnchor2Click = () => {
    var element = document.getElementById("contact-section");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="portfolio-page">
      <div id="navbar">
        <nav>
          <div id="logoContainer">
            <a id="logo" href="/"></a>
            <span id="logoText">RC</span>
          </div>
          <div id="navItems">
            <a id="anchor1" className="navItem" onClick={handleAnchor1Click}>
              Projects
            </a>
            <a id="anchor2" className="navItem" onClick={handleAnchor2Click}>
              Contact
            </a>
          </div>
        </nav>
      </div>

      <div id="about-section">
        <h1 className="section-title">ABOUT</h1>
        <div className="section-content">
          <div id="headshot-container">
            <img id="headshot" src={headshot} />
          </div>
          <div id="bio-container">
            <div id="summary-container">
              <p id="summary">
                Hi, I'm Russ. I'm a software engineer based in Los Angeles, CA.
                <br /> <br />
                My 3 years of professional experience in real estate encompasses
                designing and writing software, training personnel on software,
                providing technical support, and client facing work.
                <br /> <br />
                I'm currently seeking a role where I can take on collaborative
                team responsibilities and contribute to building scalable and
                maintainable software solutions.
                <br /> <br />
              </p>
            </div>
            <div id="resume-button-container">
              <a id="resume-button" href={resume} target="_blank">
                <span>
                  <b>View Resume</b>{" "}
                </span>
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="projects-section">
        <h1 className="section-title">PROJECTS</h1>
        <div className="section-content">
          <div className="row">
            <div className="project">
              <a
                href="https://landingpagetemplates.herokuapp.com/"
                target="_blank"
              >
                <div className="bar">
                  <div className="buttons-container">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <p>SLEEKPAGES</p>
                </div>
                <div className="content-overlay"></div>
                <img className="content-image" src={sleekpages} />
                <div className="content-details fadeIn-top">
                  <h3>Landing Page Templates</h3>
                  <hr style={{ borderColor: "white" }} />
                  <p>React</p>
                  <p>Express</p>
                  <p>Node</p>
                  <p>MongoDB</p>
                  <p>React Router</p>
                  <p>Webpack</p>
                </div>
              </a>
            </div>
            <div className="project">
              <a
                href="https://serene-mesa-24578.herokuapp.com/"
                target="_blank"
              >
                <div className="bar">
                  <div className="buttons-container">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <p>HABITASTIC</p>
                </div>
                <div className="content-overlay"></div>
                <img className="content-image" src={habitastic} />
                <div className="content-details fadeIn-top">
                  <h3>Habit Tracker</h3>
                  <hr style={{ borderColor: "white" }} />
                  <p>React</p>
                  <p>Express</p>
                  <p>Node</p>
                  <p>MongoDB</p>
                  <p>React Router</p>
                  <p>Passport</p>
                  <p>Webpack</p>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="project">
              <a
                href="https://evening-tundra-91223.herokuapp.com/"
                target="_blank"
              >
                <div className="bar">
                  <div className="buttons-container">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <p>PINTEREST CLONE</p>
                </div>
                <div className="content-overlay"></div>
                <img className="content-image" src={pinterest} />
                <div className="content-details fadeIn-top">
                  <h3>Pinterest Clone</h3>
                  <hr style={{ borderColor: "white" }} />
                  <p>React</p>
                  <p>Express</p>
                  <p>Node</p>
                  <p>MongoDB</p>
                  <p>React Router</p>
                  <p>Passport</p>
                  <p>Webpack</p>
                  <p>Material UI</p>
                </div>
              </a>
            </div>
            <div className="project">
              <a
                href="https://mighty-retreat-37311.herokuapp.com/"
                target="_blank"
              >
                <div className="bar">
                  <div className="buttons-container">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <p>VOTENOW</p>
                </div>
                <div className="content-overlay"></div>
                <img className="content-image" src={votenow} />
                <div className="content-details fadeIn-top">
                  <h3>Social Voting Application</h3>
                  <hr style={{ borderColor: "white" }} />
                  <p>React</p>
                  <p>Express</p>
                  <p>Node</p>
                  <p>MongoDB</p>
                  <p>React Router</p>
                  <p>Passport</p>
                  <p>Chart.js</p>
                  <p>Webpack</p>
                  <p>Axios</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="contact-border" />

      <div id="contact-section">
        <div id="contactMessage">
          <h2>Want to get in touch?</h2>
        </div>
        <a id="emailButton" href="mailto:russelltchang@gmail.com">
          <span style={{ marginRight: "5px" }}>
            <b>Email Me</b>
          </span>
          <i className="fa fa-long-arrow-right"></i>
        </a>
      </div>

      <hr className="contact-border" />

      <footer id="footer">
        <div id="icons">
          <a
            href="https://linkedin.com/in/russelltchang"
            className="social"
            target="_blank"
          >
            <i className="fa fa-lg fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/russelltchang"
            className="social"
            target="_blank"
          >
            <i className="fa fa-lg fa-github"></i>
          </a>
        </div>
        <div>
          <h4 id="copyright">Russell Chang &copy; 2022</h4>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
