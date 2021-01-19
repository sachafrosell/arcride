import React from "react";
import {Link} from "react-router-dom"

// reactstrap components
import { Button, Container } from "reactstrap";

// core components



const ButtonStyle = {
  background: "none",
  outlineColor: "#FFFFFF",
  border:"solid 0.7px white",
  borderRadius: "0px",
  float: "left",
  marginRight: "5px",
  marginLeft: "3px",
  marginTop: "-15px",
  fontSize: "13px"
}

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 500) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }

      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

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
      <div className="page-header page-header-large">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/city1.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
      <div className="content-left">
          <Container style={{paddingTop: "300px", width: "200%"}}>
            {dimensions.width >= 400 ? <h1 className="title" style={{textAlign: "left", fontSize: "60px", letterSpacing: "5px", fontWeight: "300"}}>
              <span style={{fontWeight: "900"}}>
                ENERGISING
              </span>
              <span> </span>
              <span>
                A TRANSPORT REVOLUTION
              </span>

            </h1> : <h1 className="title" style={{textAlign: "left", fontSize: "35px", letterSpacing: "5px", fontWeight: "300"}}>
              <span style={{fontWeight: "900"}}>
                ENERGISING
              </span>
              <span> </span>
            <br />
              <span>
                A TRANSPORT
              </span>
              <br />
              <span>
                REVOLUTION
              </span>

            </h1>}

            <span>
              <Link to='/our-approach'>
                <Button style={ButtonStyle}>
                  OUR APPROACH
                </Button>
              </Link>

              <Link to='/contact'>
                <Button style={ButtonStyle}>
                  GET IN TOUCH
                </Button>
              </Link>

            </span>

          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
