import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div>
      <div style={{marginTop:"300px"}}>
      <h1 style={{marginLeft:"600px"}}>PROJECTS </h1>
      <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card" style={{height:"190px"}}>
      <img src="/img/e.png" class="card-img-top" alt="..."  />
      <div class="card-body">
        <h5 class="card-title"><a  target="_blank" rel="noopener noreferrer" href="https://mensfashions.herokuapp.com/">Ecomerse Website</a></h5>
        <p class="card-text">(mensfashions) an Ecomerse Website for the Fashioner company  to sell their products in Online platform using MERN Stack.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{height:"190px"}}>
      <img src="/img/em.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"><a    target="_blank" rel="noopener noreferrer" href="https://emergencyhelpcare.herokuapp.com/">Emergency Helpcare</a></h5>
        <p class="card-text">An online platform to buy or checking the  availability of medicines in near by area or not using MERN stack .</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{height:"190px"}}>
      <img src="/img/iot.jpg" class="card-img-top" alt="..." style={{height:"190px"}} />
      <div class="card-body">
        <h5 class="card-title" ><a href="socialIot"> Social Internet of Things </a></h5>
        <p class="card-text">By using the IoT and SIoT techinequies finding the realationships between Iot devices using Artificial Social Intellegence.</p>
      </div>
    </div>
  </div>

</div>
</div>
      </div>
      </div>
    )
  }
}
