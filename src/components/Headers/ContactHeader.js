import React from 'react'

import { Container } from "reactstrap";

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

function ContactHeader() {

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 500) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0,"+ windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/road1.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>

          <div style={{textAlign: "left", paddingTop: "80px"}}>
            <h1 style={titleStyle} className="title">
              <span style={{fontWeight: "900px"}}>
                GET IN TOUCH


              </span>
            </h1>
            <p style={{
              border: "0.5px solid white",
              marginTop: "15px",
              marginBottom: "15px",
              display: "block",
              maxWidth: "50px"
            }}></p>
          <h5 className="description" style={{fontSize: "17px", fontWeight: "500px", color: "#FFF"}}>

              Are you a city who wants a fleet of E3’s,
              an investor looking to be part of the next big thing,
              or someone who cares about Green Mass-Transport?
            </h5>

            <h5 className="description" style={{fontSize: "17px", color: "#FFF", fontWeight: "500px"}}>

              We would love to hear from you.
            </h5>
              </div>


          <div className="separator separator-primary"></div>
        </Container>
      </div>

    </>
  );
}

export default ContactHeader;
