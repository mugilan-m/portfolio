import React, { Component } from 'react'
import './home.css';
export default class Home extends Component {
  render() {
    return (
      <div>
      <div className='m' style={{backgroundColor:"grey"}}>
        <nav  >

  <div  >
    <ul class="navbar-nav mr-auto" style={{backgroundColor:"grey"}}>
    <li>
       <a class="nav-brand " href="home" className='a' style={{marginLeft:"800px",backgroundColor:"grey"}}> Home</a>
       
      </li>
      <li class="nav-item ">
        <a class="nav-brand" href="about" className='a' style={{marginLeft:"20px"}}>About </a>
      </li>
      <li class="nav-item">
        <a class="nav-brand" href="projects" className='a' style={{marginLeft:"20px"}}>Projects</a>
      </li>
       <li>
       <a class="nav-brand " href="skill"  className='a' style={{marginLeft:"15px"}}> Skill</a>
      </li>
      <li>
      <a class="nav-brand " href="contact" className='a'  style={{marginLeft:"15px"}}> Contact Me</a>
      </li>
    </ul>
 
  </div>
</nav>
</div>
      </div>
    )
  }
}
