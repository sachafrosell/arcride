import React from 'react'

import {
  Container,
  Row,
  Col,
} from "reactstrap";




const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px",
   color: "white"

}

const divStyle = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid white"
}

function Challenge() {
  
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

      <div className="wrapper" style={{background: "#191b1d"}}>

        <div className="section section-about-us" style={{paddingTop: "80px", paddingBottom: "60px", background: "#191b1d"}}>
          <Container>
            <Row>
              <Col className="text-center" md="6">
                <div style={divStyle}>
                  <h1 style={titleStyle} className="title">
                    <span style={{fontWeight: "900px"}}>
                      THE CHALLENGE

                    </span>
                  </h1>
                  <hr style={{border: "0.5px solid white",
                    marginTop: "15px",
                    marginBottom: "15px",
                    display: "block",
                  maxWidth: "50px"}}></hr>
                  <h5 className="description" style={{fontSize: "17px", color: "#FFF", fontWeight: "500px", opacity: "60%"}}>

                    By 2050, more than 1.3 billion Africans will call a city home.
                    75% of public transit rides in African cities are currently supplied by informal,
                    independent operators using petrol and diesel solutions.

                  </h5>
                </div>

              </Col>

              <Col className="text-center" md="6">
                <div style={divStyle}>
                  <h1 style={titleStyle} className="title">
                    <span style={{fontWeight: "900px"}}>
                      THE OPPORTUNITY

                    </span>
                  </h1>
                  <hr style={{border: "0.5px solid white",
                    marginTop: "15px",
                    marginBottom: "15px",
                    display: "block",
                  maxWidth: "50px"}}></hr>
                  <h5 className="description" style={{fontSize: "17px", color: "#FFF", fontWeight: "500px", opacity: "60%"}}>


                    ARC Ride has the opportunity to reduce emissions and pollution in African cities.
                    If we converted all 3,000,000 Taxis in East Africa to E3s,
                    we would save approximately 12,540,000 Tonnes of Co2 a year.

                  </h5>
                </div>

              </Col>

            </Row>
            <Row style={{paddingTop: "35px", justifyContent: "center"}}>
              <Col className="text-center" md="9" >

                <div style={divStyle} >
                  <div>
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px"}}>
                        THE SOLUTION

                      </span>
                    </h1>
                    <hr style={{border: "0.7px solid white",
                        marginTop: "15px",
                        marginBottom: "15px",
                        display: "block",
                    maxWidth: "50px"}}></hr>
                    <h5 className="description" style={{fontSize: "17px", color: "#FFF", fontWeight: "500px", opacity: "60%"}}>

                      We are building and operating a 100% renewable charging infrastructure for Electric Vehicle fleets in each city we partner with.
                      This gives commuters Affordable, Reliable and Clean alternatives to buses and taxis.
                      Our aim is to support existing transport infrastructure with secondary routes and make green transport accessible to all.
                      The solution offers a clean delivery network for E-Commerce, food and post.
                      We use the latest technology to target the busiest times and routes, receive cashless payments, and provide a user-friendly interface for the driver and customer.



                    </h5>
                  </div>
                </div>


              </Col>
            </Row>
            <div className="separator separator-primary"></div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Challenge;
