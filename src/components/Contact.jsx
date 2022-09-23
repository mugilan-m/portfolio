import React, { Component } from 'react'
import './contact.css';
export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className='n'>
<div class="contact-container">
  <div class="contact-left">
    <h2>Get In Touch</h2>
    <form class="contact-form">
      <div class="single-row">
          <input type="text" placeholder="First Name" class="form-in mr" />
          <input type="text" placeholder="Last Name"class="form-in ml" />
      </div>
      <div class="multiple-row">
          <input type="email" placeholder="Email" class="form-in" />
          <textarea placeholder="Your Message" class="form-in"></textarea>
          <button  style={{borderRadius:"20px",color:"white",backgroundColor:"blue"}}>submit</button>
      </div>
                
    </form>
  </div>
  <div class="contact-right">
    <h2>Contact Informations</h2>
    <div class="contact-info">
      <p><i class="fas fa-phone-alt"></i> +91 9361302471 </p>
      <p><i class="fas fa-envelope" href="mailto:mugilanmurugan429@gmail.com"></i> mugilanmurugan429@gmail.com</p>
      <p><i class="fas fa-map-marker-alt"></i> Chennai ,Tamil Nadu</p>
      <img src="/img/Mugilan.png" alt='qr' className='qr'></img>
    </div>

    <div class="social-links">
      <a href="facebook"><i class="fab fa-facebook"></i></a>
      <a href="instagram"><i class="fab fa-instagram"></i></a>
      <a href="twitter"><i class="fab fa-twitter"></i></a>
      <a href="youtube"><i class="fab fa-youtube"></i></a>
    </div>
  </div>
</div>
</div>
      </div>
    )
  }
}
