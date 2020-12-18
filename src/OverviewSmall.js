import React from 'react'

import { Container } from "reactstrap";

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

function Small() {

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("./assets/img/lake-burera.jpg") + ")",
          }}

        ></div>
        <Container>

          <div style={{textAlign: "left"}}>
            <h1 style={titleStyle} className="title">
              <span style={{fontWeight: "900px"}}>
                OUR APPROACH


              </span>
            </h1>
            <p style={{
              border: "0.5px solid white",
              marginTop: "15px",
              marginBottom: "15px",
              display: "block",
              maxWidth: "50px"
            }}></p>
          <h5 className="description" style={{fontSize: "17px", color: "#FFF", fontWeight: "500px"}}>

            ARC ride encompasses Four Operational Pillars,
            which are replicable and scalable across all operational countries and cities.
            Assembly plants for E3 vehicles, establishment of solar charging networks,
            ownership and management of E3-fleets and a centralised ride and delivery app make up these Four Pillars.

                </h5>
              </div>


          <div className="separator separator-primary"></div>
        </Container>
      </div>

    </>
  );
}

export default Small;
