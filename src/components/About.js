import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Row} from "react-bootstrap";
import "../App.css";
import js from "../assets/js.png";
import html from "../assets/html.png";
import scss from "../assets/scss.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.gif";
import react from "../assets/react.webp";
import me from "../assets/ME.jpg";
//import { clear } from '@testing-library/user-event/dist/clear';


const About = (props) => {
  const skills = [{src: html, alt :"html"},
  {src: css, alt: "css"},
  {src: scss, alt: "scss"},
  {src: bootstrap, alt: "bootstrap"},
  {src: js, alt: "javascript"},
  {src: react, alt: "react"}
  ]

  const certifications = [
    {id: 0, text: "Responsive Web Design, FreeCodeCamp", src: "https://www.freecodecamp.org/certification/Vasilis_Altzerinis/responsive-web-design"},
    {id: 1, text: "Javascript Algorithms and Data Structures, FreeCodeCamp", src: "https://www.freecodecamp.org/certification/Vasilis_Altzerinis/javascript-algorithms-and-data-structures"},
    {id: 2, text: "Front end development libraries, FreeCodeCamp", src: "https://www.freecodecamp.org/certification/Vasilis_Altzerinis/front-end-development-libraries"},
    {id: 3, text: "Relational Database Certification, FreeCodeCamp", src: "https://www.freecodecamp.org/certification/Vasilis_Altzerinis/relational-database-v8"},
    {id: 4, text: "Cs50x by Harvard, 80% complete", src: "https://github.com/code50/107632771"}
  ]
  
  const toCome = [
    {id: 0, text: "Back End Certification, FreeCodeCamp"},
    {id: 1, text: "Cs50w by Harvard"},
    {id: 2, text: "Scheduler: A discord bot to see annd arrange the daily schedule of a small team of people"},
    {id: 3, text: "Personal Blog"}
  ]
  
  /*setTimeout(() => {
    
    let arr = skills
    let skill = skills.pop()
    arr.unshift(skill)
    setSkills([...arr])
    
  }, 1000)
  
  clearInterval()*/
  return (
    
    <Row className="about">
      <div className='intro'>
        <strong>
          <h3 className='welcome'>Welcome to my portfolio!!!</h3>
        </strong>

        <div className="intro-par">
          <img className="me" src={me} alt="Vasileios" />
          <p>I'm Vasileios Altzerinis. I'm born and currently located in Greece! I'm a self-taught web developer pursuing my dream of entering web development. I love <strong style={{color: "white"}}>Coding</strong> and takes a big part in my life!</p>
        </div>
      </div>

      <div className="known">
        <div style={{height: "1px", backgroundColor:"white"}}></div>
        <div className='btns'>
          <button style={{textDecoration: props.onSkills === true ? "underline" : "line-through"}} onClick={props.handleSkills}>skills:</button>
          <button style={{textDecoration: props.onCertifications === true ? "underline" : "line-through"}} onClick={props.handleCertifications}>Certifications:</button>
          <button style={{textDecoration: props.onToCome === true ? "underline" : "line-through"}} onClick={props.handleToCome}>To Come:</button>
        </div>
        { props.onSkills === true ? 
          <div className='skills'>
            {skills.map(skill => <img key={skill.alt} src={skill.src} alt={skill.alt} />)} 
          </div>
        :
          props.onCertifications === true ?
          <div className='certifications'>
            {certifications.map(certification => 
                                <div key={certification.id} className='certification'>
                                  <p>{certification.text}</p>
                                  <a href={certification.src} target='_blank' rel='noreferrer'>View</a>
                                </div>
                                )
            }
          </div>
        :
          <div className='toCome'>
           {toCome.map(item => <p key={item.id}>{item.text}</p>)}
          </div>
        }
      </div>

      <div className="conclusion">
        <div sm={12} style={{height: "1px", backgroundColor:"white"}}></div>
        <p>I would love for you to give me any project you have in mind
           I will try my best possible and will deliver everything you ask,be it a one page website or a larger scale project!</p>   
        <p>Thank you for checking my portfolio.The source code of it is <strong><a href="https://github.com/Bill-1991/altzeport" target="_blank" rel="noreferrer" style={{color: "black"}}>here</a></strong></p>
      </div>
    </Row>
  )
}

export default About;