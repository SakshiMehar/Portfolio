import React from 'react';
import './Projects.css';
import gossipBuddy from "../../components/assets/gossipBuddy.png";
import healthcareChatbot from "../../components/assets/healthcareChatBot.png";
import gameOfLife from "../../components/assets/gameOfLife.png";
import AmazoneClone from "../../components/assets/AmazoneClone.png";

const Projects = () => {
  return (
    <section id='works'>
      <h2 className='workTitle'>My Projects</h2>
      <span className='workDesc'>
        These projects showcase my experience with HTML, CSS, JavaScript, Python, and React.
        Through each build, <br />I’ve explored UI design, logic implementation, API usage,
        and responsive layouts to develop practical and efficient solutions.
      </span>

      <div className='workImgs'>
        <div className='workImg'>
          <img src={gossipBuddy} alt='GossipBuddy' className='workImages' />
          <div className='workText'>
            <h2>GossipBuddy</h2>
            <p>A chat platform with integrated weather and news features for an engaging user experience.</p>
            <h4>HTML, CSS, JavaScript, Python</h4>
          </div>
        </div>

        <div className='workImg'>
          <img src={healthcareChatbot} alt='Healthcare Chatbot' className='workImages' />
          <div className='workText'>
            <h2>Healthcare ChatBot</h2>
            <p>An intelligent chatbot built using Python to help users with basic medical advice and symptom guidance.</p>
            <h4>HTML, CSS, JavaScript, Python</h4>
          </div>
        </div>

        <div className='workImg'>
          <img src={gameOfLife} alt='Game of Life' className='workImages' />
          <div className='workText'>
            <h2>Game Of Life</h2>
            <p>A web-based project simulating Conway's Game of Life for learning algorithmic logic.</p>
            <h4>HTML, CSS, JavaScript, ReactJS</h4>
          </div>
        </div>

        <div className='workImg'>
          <img src={AmazoneClone} alt='Amazon Clone' className='workImages' />
          <div className='workText'>
            <h2>Amazon Clone</h2>
            <p>A fully responsive e-commerce clone implementing UI, product pages, and shopping cart functionality.</p>
            <h4>HTML, CSS, JavaScript</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
