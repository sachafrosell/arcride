import React from 'react'

import { Container } from "reactstrap";


const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

function Competition() {


  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            background: "#d2d2d2 !important",
          }}

        ></div>
        <Container>

          <div style={{textAlign: "left", marginTop: "-20px"}}>
            <h1 style={titleStyle} className="title">
              <span style={{fontWeight: "900px"}}>
                R&D COMPETITION


              </span>
            </h1>
            <p style={{
              border: "0.5px solid white",
              marginTop: "15px",
              marginBottom: "15px",
              display: "block",
              maxWidth: "50px"
            }}></p>
          <h5 className="description" style={{fontSize: "17px", color: "#FFF", fontWeight: "500px"}}>

              Calling all Rwandan Design Graduates: ARC Ride invites you to take part in a Research and Development competition.
              We are looking for innovative minds to help design the future of our electric three wheelers in Rwanda.
              The design brief is to create an attractive, aerodynamic pod to sit on the chassis of our E3s.
              Huge credit given to any designs that utilise recycled or locally-sourced materials.
              ARC Ride wants to be environmentally efficient from vehicle assembly through to everyday use and charging.
              Competition runs from now until the end of October 2020.
              A successful design implementation would grant the opportunity of taking on a full-time job as an in-house designer for ARC Ride Rwanda.

                </h5>
              </div>


          <div className="separator separator-primary"></div>
        </Container>
      </div>

    </>
  );
}

export default Competition;
