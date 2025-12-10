import { Link } from "react-scroll";
import "./Portfolio.css";
import backImg from "./backImg.jpg"; // background circle image

const Portfolio = () => {
   // mobile menu toggle

  return (
    <div className="Portfolio-container" id="portfolio">
      
      

     
      <div className="left-container">
        {/* SOCIAL ICONS */}
        <div className="icons">
          <a href="https://www.facebook.com/sa.mehar.16" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/in/sakshi-mehar-s01/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/SakshiMehar" target="_blank"  rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:smehar2002@gmail.com">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>

       
        <div className="content">
          <p className="intro">
             Hi ! I am <br />
            <span className="name"> Sakshi Mehar</span>
          </p>

          <h1>Web Developer</h1>

          <p className="detail">
            I'm a web developer who loves turning ideas into reality on the web!
            With a knack for both design and functionality, I craft visually
            stunning and highly responsive websites. I thrive on problem-solving
            and enjoy creating seamless user experiences that are intuitive and
            engaging.
          </p>

          <div className="btn-container">
            <button   onClick={() => window.open("./resume.pdf", "_blank")}>
              Resume
            </button>
             <Link  to="works" smooth={true} duration={300} offset={-30}> <button id="viewProject"> View Project</button></Link>
           
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-container"></div>

      {/* BACKGROUND DESIGN */}
      <div className="design">
        <div className="circle"></div>
        <div
          className="circle img-circle"
          style={{ backgroundImage: `url(${backImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default Portfolio;
