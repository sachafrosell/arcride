/*eslint-disable*/
import React from "react";
import LogoLight from "../../assets/img/logo_light_ride.png"
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Container,
  Row,
  Col
 } from "reactstrap";

const aStyle = {
  fontSize: "15px",
  textAlign: "center"
}

const aPadd = {
  marginTop: "10px"
}

function InfoFooter() {
  return (
    <div style={{background: "#191b1d", color: "white"}}>
      <Container >
        <Row  style={{paddingTop: "20px", paddingBottom: "20px"}}>
          <Col  md="5">
            <div>
              <img
                src={LogoLight}
                style={{
                  width: 100,
                  position: 10,
                  paddingBottom: 20
                }}
              >
              </img>
            </div>
            <h5 style={{fontSize: "13px", opacity: "30%"}}>
              To create a scalable and sustainable green transport solution across Africa,
              with minimal impact on the environment to enhance local communities by ensuring access for all.
            </h5>
          </Col>
          <Col md="2">
          </Col>
          <Col md="2" style={{paddingLeft: "15px"}}>
            <h5 style={{color: "white", fontSize: "15px"}}>
              MENU
            </h5>
            <div style={{fontSize: "13px", opacity: "30%"}}>
              <Link to='/home'>
              <h5 style={{color: "white", fontSize: "13px"}}>
                HOME
              </h5>
              </Link>
              <p style={{marginTop: "-10px"}}></p>
              <Link to='/our-approach'>
                <h5 style={{color: "white", fontSize: "13px"}}>
                  OUR APPROACH
                </h5>
              </Link>
                <p style={{marginTop: "-10px"}}></p>
                <Link to='/our-approach'>
                  <h5 style={{color: "white", fontSize: "13px"}}>
                    OUR TEAM
                  </h5>
                </Link>
                  <p style={{marginTop: "-10px"}}></p>
                  <Link to='/contact'>

                    <h5 style={{color: "white", fontSize: "13px"}}>
                      CONTACT US
                    </h5>
                    </Link>
                    <p style={{marginTop: "-10px"}}></p>
                      <a target="_blank" href="https://arcgroup.co/" style={{color: "inherit"}}>
                        ARC GLOBAL
                      </a>
                      <p style={{marginTop: "-10px"}}></p>
              <a target="_blank" href="https://www.facebook.com/ARC-Ride-100580288315491" style={{color: "inherit"}}>
                FACEBOOK
              </a>
              <p style={{marginTop: "-10px"}}></p>
              <a target="_blank" href="https://www.instagram.com/arc_ride/" style={{color: "inherit"}}>
                INSTAGRAM
              </a>




              <p style={{marginTop: "-10px"}}></p>
                <a target="_blank" href="https://twitter.com/arc_ride" style={{color: "inherit"}}>
                  TWITTER
                </a>
            </div>
          </Col>
          <Col md="3" style={{paddingLeft: "15px"}}>

            <h5 style={{fontSize: "15px"}}>
              UK OFFICE
            </h5>
            <div style={{fontSize: "13px", opacity: "30%"}}>

              <a>
                11 Crucifix Lane,
              </a>
              <br />
              <a>
                London,
              </a>
              <br />
              <a>
                SE1 3JW
              </a>
            </div>

            <br style={{paddingTop:"50px"}}/>
            <h5 style={{fontSize: "15px"}}>
              RWANDA OFFICE
            </h5>
            <div style={{fontSize: "13px", opacity: "30%"}}>
              <a>
                NR5,
              </a>
              <br />
              <a>
                Nyabivumu Village,
              </a>
              <br />
                <a>
                  Nyamata Bugesera,
                </a>
                <br />
              <a>
                Rwanda
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default InfoFooter;
