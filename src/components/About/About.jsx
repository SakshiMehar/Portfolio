import React from "react";
import "./About.css";
import HtmlCss from "../../components/assets/HtmlCss.png";
import JavaScript from "../../components/assets/JavaScript.png";
import ReactImg from "../../components/assets/React.png";
import MySql from "../../components/assets/MySql.png";
import Java from "../../components/assets/Java.png";


export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <p className="about-description">
        I build responsive and user-friendly web applications using HTML, CSS,
        JavaScript, and React. I focus on creating clean interfaces, smooth user
        experiences, and functional features that solve real problems.
      </p>

      <div className="skills-container">
        <h3 className="skills-heading">What I Do</h3>

        <div className="skillBars">
          <div className="skillBar">
            <img src={HtmlCss} alt="htmlcss" className="skillBarImg1" />
            <div className="skillBarText">
              <h2>HTML/CSS</h2>
              <p>I create clean, responsive, and well-structured web pages.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={JavaScript} alt="javascript" className="skillBarImg" />
            <div className="skillBarText">
              <h2>JavaScript</h2>
              <p>I build interactive and dynamic website features.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={ReactImg} alt="reactjs" className="skillBarImg" />
            <div className="skillBarText">
              <h2>ReactJS</h2>
              <p>I develop fast, component‑based UI using React.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={MySql} alt="mysql" className="skillBarImg" />
            <div className="skillBarText">
              <h2>MySQL</h2>
              <p>I work with SQL to manage and retrieve data efficiently.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={Java} alt="java" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Java</h2>
              <p>I understand Java basics for problem‑solving and OOP.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
