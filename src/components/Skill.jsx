import React, { Component } from 'react'
import './skill.css';
export default class Skill extends Component {
  render() {
    return (
      <div>
      <div>
      <h1 className='s'>SKILLS</h1>
        <div className='d'>
            <h1 className='h1'>PERSONAL SKILLS</h1>
             <li><b>Time management</b></li>
             <li><b>Teamwork</b></li>
             <li><b>Adaptability</b></li>
             <li><b>Self-learning</b></li>
             <li><b>Responsibility</b></li>

        </div>
        <div className='b'>
            <h1 className='h1'>TECHNICAL SKILLS</h1>
             <li><b>Programming Languages : C, Java</b></li>
             <li> <b>Web Development : HTML, CSS, JS , Node js,React js</b></li>
             <li><b>DBMS : MySQL , MongoDB</b></li>
             <li><b>IDE & Tools : VSCode, Eclipse</b></li>
             <li><b>UI/UX : Figma,Adobe XD</b></li>

        </div>
        </div>

      </div>
    )
  }
}
