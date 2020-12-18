import React from 'react'

import {
  Container,
  Row,
  Col
} from "reactstrap";

import TukTukImg from './assets/img/800px_COLOURBOX25316311.jpg'


const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

function About() {

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>

      <div className="wrapper" style={{backgroundColor: "black"}}>

        <div className="section section-about-us" style={{paddingTop: "60px", paddingBottom: "130px"}}>
          <Container>
            <Row>
              <Col className="text-left" md="6">
                <div style={{paddingTop: "17px"}}>
                  <h1 style={titleStyle} className="title">
                    <span style={{fontWeight: "900px"}}>
                      OUR STORY

                    </span>
                  </h1>
                  <p style={{
                    border: "0.5px solid black",
                    marginTop: "15px",
                    marginBottom: "15px",
                    display: "block",
                    maxWidth: "50px"
                  }}></p>
                <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px"}}>

                    ARC Ride was set up in 2020 to address clean transportation, delivery and connectivity issues in rapidly growing cities.
                    We are working to create a 100% renewable solution, creating 1000s of high skilled jobs in each city we operate.
                    As e-commerce grows and populations expand cities are at a crucial crossroads.
                    They have the opportunity to reduce an over-reliance on out-dated heavily polluting methods of transport and build an affordable,
                    reliable & clean integrated green transport system. ARC Ride is one part of the clean intermobility solution.

                  </h5>
                </div>

              </Col>
              <Col>
                <img
                  src={TukTukImg}
                  alt="TukTuk"
                  style={{
                    paddingTop: "35px"
                  }}
                >

                </img>
              </Col>



            </Row>
            <div className="separator separator-primary"></div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default About;
