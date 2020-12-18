import React from 'react';
import { Container } from "reactstrap";


import Spinner from '../../Spinner.js';

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"
}

const LoginHeader = (props) => {

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
            backgroundImage: "url(" + require("../../assets/img/road2.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>

          <div style={{textAlign: "left", paddingTop: "80px"}}>
            <h1 style={titleStyle} className="title">
              <span style={{fontWeight: "900px"}}>
                ARC Ride Driver Portal
              </span>
            </h1>
            <p style={{
              border: "0.5px solid white",
              marginTop: "15px",
              marginBottom: "15px",
              display: "block",
              maxWidth: "50px"
            }}></p>
          </div>
          <Spinner />
        </Container>
      </div>

    </>
  );
}

export default LoginHeader;
