import React from "react";

// reactstrap ./components
import { Container } from "reactstrap";

// core ./components
import TeamBig from './TeamBig.js'
import TeamSmall from './TeamSmall.js'

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"
}

function Team() {

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

      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          id="scrolla"
          style={{
            background: "#d2d2d2 !important"
          }}

        ></div>
        <Container style={{textAlign: "left"}}>
          <h1 style={titleStyle} className="title">
            <span style={{fontWeight: "900px"}}>
              OUR TEAM

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

            The Directors are a team of dedicated experienced professionals with a shared passion.
            Jo brings the energy, ambition and entrepreneurship to ARC Ride,
            whilst Joanna and Richard create the organisational processes and governance to make the group mission a success.
            The team draw on their wide network of influencers across the sectors they operate,
            to build the teams needed for the emerging businesses within the group.


          </h5>

        </Container>
      </div>
      {dimensions.width >= 600 ? <TeamBig /> : <TeamSmall />}




    </>
  );
}

export default Team;
