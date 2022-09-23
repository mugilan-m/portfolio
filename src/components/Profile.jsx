import React, { Component } from 'react'
import './profile.css';
export default class Main extends Component {
  render() {
    return (
      <div>
     
        <div>
        <img src="/img/Programmer-Engineering-Development-Illustration-on-transparent-background-PNG.png" alt="imgages" className='img1'></img>
        <div className='c' >
  
       <a class="nav-brand " href="home" className='a' style={{marginLeft:"800px",marginBottom:"-100px"}}> </a>
       <button type="button" href="home" class="btn btn-outline-info" style={{marginLeft:"10px",marginBottom:"-100px"}}>Home</button>

        <button type="button" href="about" class="btn btn-outline-info" style={{marginLeft:"10px",marginBottom:"-100px"}}>About</button>
 
        <button type="button"  href="project" class="btn btn-outline-info" style={{marginLeft:"10px",marginBottom:"-100px"}}>Projects</button>
      
       <button type="button" href="skill" class="btn btn-outline-info" style={{marginLeft:"10px",marginBottom:"-100px"}}>Skills</button>

      <button type="button" href="conatct"  class="btn btn-outline-info" style={{marginLeft:"10px",marginBottom:"-100px"}}>Contact Me</button>
</div>
        <div  className='pro'>
            <h1 className='f'><span style={{color:"#E76D9D"}}>HI</span>       I Am  Mugilan</h1>
             <h3 className='container'>Software Developer</h3>
             <p className='p1' style={{marginRight:"200px"}} ><a href='/img/resume.pdf' download="Mugilan_Resume">Download Resume<img src="/img/d.png" style={{width:"30px",height:"30px"}}alt="dwonload"></img></a></p>
             
             </div>

             <div>

             </div>
             <div className='c1'>
             <img src="/img/node.png" alt="node" className="node"></img>
             <img src="/img/react.png" alt="node" className="react"></img>
             <img src="/img/h.png" alt="node" className="h"></img>
             <img src="/img/css.png" alt="node" className="css"></img>
             <img src="/img/figma.png" alt="node" className="figma"></img>
             <img src="/img/xd.png" alt="node" className="xd"></img>
             <img src="/img/js.png" alt="js" className="js"></img>
             <img src="/img/heroku.png" alt="node" className="heroku"></img>
             <img src="/img/aws.png" alt="node" className="aws"></img>
            <img src="/img/photo.jpeg" alt="profile" className='photo'></img>
            </div>

        </div>
      </div>
    )
  }
}
