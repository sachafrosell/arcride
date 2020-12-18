import React from 'react'

import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";

import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import ContentCard from "./ContentCard.js"
import Popup from "./Popup.js"
import ContentNewCard from "./ContentNewCard.js"
import DarkFooter from "./components/Footers/DarkFooter.js";
import store from './Store.js'

import TukTukImg from './assets/img/800px_COLOURBOX25316311.jpg'
import TukTukImg2 from './assets/img/tuk-tuk22.jpg'


const titleStyle = {
   fontWeight: "900px",
   fontSize: "20px",
   marginBottom: "5px"

}

const divStyle = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid black",
  textAlign: "center"
}

function Solution() {
  store.dispatch({
    type: "COLOR",
    payload: "BLACK"
  })
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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

        <div className="section section-about-us" style={{paddingBottom: "150px"}}>
          <Container>


            <div style={divStyle}>
              <h1 style={titleStyle} className="title">
                <span style={{fontWeight: "900px"}}>
                  THE SOLUTION

                </span>
              </h1>
              <hr style={{border: "0.5px solid black",
                marginTop: "15px",
                marginBottom: "15px",
                display: "block",
              maxWidth: "50px"}}></hr>
              <h5 className="description" style={{fontSize: "10px", color: "#6d747c", fontWeight: "500px"}}>

                We are building and operating a 100% renewable charging infrastructure for Electric Vehicle fleets in each city we partner with.
                This gives commuters Affordable, Reliable and Clean alternatives to buses and taxis.
                Our aim is to support existing transport infrastructure with secondary routes and make green transport accessible to all.
                The solution offers a clean delivery network for E-Commerce, food and post.
                We Use latest technology to target busiest times and routes, receive cashless payments,
                and provide a user-friendly interface for the driver and customer.


              </h5>
            </div>





            <div className="separator separator-primary"></div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Solution;
