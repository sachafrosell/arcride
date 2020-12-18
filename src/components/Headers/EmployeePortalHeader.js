import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "reactstrap";
import Spinner from '../../Spinner.js';


const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"
}

const EmployeePortalHeader = (props) => {

  const { isAuthenticated, isLoading } = useAuth0();

  // let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 500) {
      const updateScroll = () => {

        let windowScrollTop = window.pageYOffset / 3;
        if (props.pageHeader.current) {
          props.pageHeader.current.style.transform =
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
            backgroundImage: "url(" + require("../../assets/img/giraffe.jpg") + ")",
          }}
          ref={props.pageHeader}
        ></div>
        <Container>
          <div style={{textAlign: "left", paddingTop: "80px"}}>
            <h1 style={titleStyle} className="title">
              <span style={{fontWeight: "900px"}}>
                ARC Ride Admin Portal
              </span>
            </h1>
            <p style={{
              border: "0.5px solid white",
              marginTop: "15px",
              marginBottom: "15px",
              display: "block",
              maxWidth: "50px"
            }}></p>
            {!isAuthenticated && !isLoading?
              <h1 style={{
                fontWeight: "900px",
              fontSize: "20px"}}>

                Please login to continue

              </h1>
            : isLoading ?
              <h1 style={{
                fontWeight: "900px",
              fontSize: "20px"}}>

                <Spinner />

              </h1>
            :
            ''}
          </div>
        </Container>
      </div>

    </>
  );
}

export default EmployeePortalHeader;
