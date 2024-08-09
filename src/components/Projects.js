import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row, Card, Button} from "react-bootstrap";
import "../App.css";
import winsu from "../assets/Winsu.png";
import ecom from "../assets/e-com.png";
import stepForm from "../assets/form.png";
import qr from "../assets/qrcode.png";
import cat from "../assets/cat.png"
//import { Spring } from "react-spring/renderprops"


const Projects = () => {

  const [done, setDone] = useState([
    {id: "0", name: "Dynamic styled qrCode generator", img: qr, desc: "Style your qrCode as you like and select between redirection to a website or to a Vcard *(render server takes up to 50 secs to wake up and serve content)", delay: 500, liveSite: "https://demo-project1-lhwe.onrender.com", source: "https://github.com/Bill-1991/Demo-project1", skills: ["Html", "Css", "React", "Node.js", "MongoDB"], flip: false},
    {id: "1", name: "Companies Catalogue", img: cat, desc: "A catalogue for companies to display their products *(render server takes up to 50 secs to wake up and serve content)", delay: 1000, liveSite: "https://demo-project2.onrender.com", source: "https://github.com/Bill-1991/Demo-project2", skills: ["Html", "Css", "React", "json server"], flip: false},
    {id: "2", name: "E-commerce", img: ecom, desc: "Responsive e-commerce site for anime.(Back-end is down at the moment)", delay: 1000, liveSite: "https://splendid-granita-8f1e4f.netlify.app/", source: "https://github.com/Bill-1991/bill-commerce/tree/master", skills: ["Html", "Css", "Bootstrap", "Javascript", "React", "Node", "MySQL", "React-Router", "Anime API"], flip: false},
    {id: "3", name: "Insurances site", img: winsu, desc: "A site for a company called Worthinsurance. Descriptions and packets of every insurance the company offers", delay: 1500, liveSite: "https://worthinsurance.netlify.app", source: "https://github.com/Bill-1991/insurances-site/tree/main/src", skills: ["Html", "Css", "Javscript", "React"], flip: false},
    {id: "4", name: "Multistep form", img: stepForm, desc: "Multistep Form. (Not fully constructed in rsponsiveness. A project by frontendmentor.io!)", delay: 1500, liveSite: "https://warm-sfogliatella-1b0cc2.netlify.app/", source: "https://github.com/Bill-1991/multistep-form-frontmentor/tree/master/src", skills: ["Html", "Css", "Javscript", "React"], flip: false},
    {id: "5", name: "Tic Tac Toe", img: "", desc: "Tic Tac Toe minigame. (Not fully constructed. There's no live site on this only the source code. VScom mode only does random moves)", delay: 1500, livesite: "", source: "https://github.com/Bill-1991/Tic-tac-toe", skills: ["Html", "Css", "Javscript"], flip: false}])  
  
  const handleFlipBack = (id) => {
    let arr = [...done]
    let project = arr.filter(project => project.id === id)
    project[0].flip = true
    setDone([...arr])
  }

  const handleFlipFront = (id) => {
    let arr = [...done]
    let project = arr.filter(project => project.id === id)
    project[0].flip = false
    setDone([...arr])
  }

  return (
    <Row className='projects' style={{position: "relative"}}>{done.map(project => 
      <Col xs={12} sm={6} md={6} lg={4} key={project.id}>
        <Card className={project.flip === false ? "card" : "cardflip"}>
          { project.flip === false ?
            <div className="card-front">
              <p className='title'>{project.name}</p>
              <img style={{width: "100%"}} src={project.img} alt="No img for this one" />
              <div className="outer-flip">
                <div className='inner-flip'>
                  <button className="flip" onClick={() => handleFlipBack(project.id)}>Push</button>
                </div>
              </div>
            </div> 
            :
            <div className="card-back">
              <div style={{color: "white"}}>
                <p className='desc'>{project.desc}</p>
                <div className="skills" style={{color: "black", width: "100%"}}>
                  <Row style={{width: "90%", position: "relative", left: "5%"}}>
                    {project.skills.map(skill => <Col key={skill}><p className='skill'>{skill}</p></Col>)}
                  </Row>
                </div>
              </div>
              <div className='d-flex' style={{justifyContent: "center", gap: "10%"}}>
                {
                project.liveSite ? 
                  <a href={project.liveSite} target="_blank" rel="noreferrer">
                    <Button>Live</Button>
                  </a>
                :
                  undefined
                }
                <a href={project.source} target="_blank" rel="noreferrer">
                  <Button>Source Code</Button>
                </a>
              </div>
              <div className='outer-flip'>
                <div className="inner-flip">
                <button className="flip" onClick={() => handleFlipFront(project.id)}>Push</button>
              </div>
            </div>
          </div>
          }
        </Card>
      </Col>
      )}
    </Row>
  )
}

export default Projects;