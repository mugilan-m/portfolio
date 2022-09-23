import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="pro">Navbar</a>
    <div class="navbar-nav" style={{marginLeft:"500px"}} >
      <a class="nav-item nav-link active" href="home">Home </a>
      <a class="nav-item nav-link active" href="home">Home </a>
      <a class="nav-item nav-link active" href="home">Home </a>
      <a class="nav-item nav-link active" href="about">Features</a>
      <a class="nav-item nav-link active" href="skill">Pricing</a>
      <a class="nav-item nav-link active " href="projects">Disabled</a>
  
  </div>
</nav> 
        </div>
      </div>
    )
  }
}
