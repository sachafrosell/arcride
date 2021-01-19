import React from 'react';
import { Link } from 'react-router-dom'

import {
  Button,
  Row,
  Col,
} from "reactstrap";


import City3 from './assets/img/city3.jpg'

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"
}

const ButtonStyle = {
  background: "none",
  color: "black",
  outlineColor: "black",
  border:"solid 0.7px black",
  borderRadius: "0px",
  float: "left",
  marginRight: "5px",
  marginLeft: "3px",
  marginTop: "2px",
  fontSize: "12px"
}



class Big extends React.Component {
  render() {
    return (
      <>

        <div className="wrapper" style={{backgroundColor: "black"}}>

          <div className="section section-about-us" style={{paddingTop:"0px", paddingBottom: "0px"}}>

            <Row>
              <Col md="6">
                <img
                  src={City3}
                  alt='City'
                  style={{objectFit: "fill"}}>
                </img>
              </Col>

              <Col className="text-left" md="6">
                <div style={{paddingTop: "10%", paddingRight: "30%", paddingLeft: "1%"}}>
                  <h1 style={titleStyle} className="title">
                    <span style={{fontWeight: "900px"}}>
                      OUR APPROACH

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

                    ARC ride encompasses Four Operational Pillars,
                    which are replicable and scalable across all operational countries and cities.
                    Assembly plants for E3 vehicles, establishment of solar charging networks,
                    ownership and management of E3-fleets and a centralised ride and delivery app make up these Four Pillars.




                  </h5>
                  <Link to='/arcride/our-approach'>
                    <Button style={ButtonStyle}>
                      MORE INFO
                    </Button>
                  </Link>

                </div>

              </Col>





            </Row>
            <div className="separator separator-primary"></div>

          </div>
        </div>
      </>
    )
  }
}

export default Big
