import React from "react";
import { Link } from "react-router-dom";
import LogoDark from "../../assets/img/logo_dark_ride.png";

// reactstrap components
import {
  Button,
  Navbar,
  Nav,
  Container,
} from "reactstrap";

var Logo = LogoDark
var ButtonColor = "black"
var navbarColor = "navbar-white"



function ExamplesNavbar(props) {

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  })




  return (
    <>

      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg" style={{height: 120}}>

        <Container>
          <div className="navbar-translate" style={{position: "absolute", top: "8px"}}>


              <Link to="/home">
                <img
                  src={Logo}
                  alt='Arc Ride Logo'
                  style={{
                    width: "110px",
                    position: "10px"
                  }}
                >
                </img>
              </Link>


            {dimensions.width > 450 ? <Nav style={{float: "right", marginRight: "-950px"}}>

                <Link to="/home" >
                  <Button
                    style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                    }} onClick={props.forceUpdate} > HOME </Button>
                </Link>

                  <Link to="/our-approach">
                    <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                    }} > APPROACH </Button>
                  </Link>

                  <Link to="/contact">
                    <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                    }} > GET IN TOUCH </Button>
                  </Link>




            </Nav>
 : ""}
            <div className="topnav-right" style={{paddingRight: "150px", marginTop: "-10px"}}>







            </div>

          </div>

          </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
