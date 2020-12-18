import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function PillarPageHeader() {
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
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/city4.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
      <div className="content-left">
          <Container style={{padding: "0px", paddingTop: "200px"}}>
            {dimensions.width >= 507 ? <h1 className="title" style={{textAlign: "left", fontSize: "60px", letterSpacing: "5px", fontWeight: "300"}}>
              <span>
                OUR APPROACH:
              </span>
              <br />
              <span style={{fontWeight: "900"}}>
                FOUR OPERATIONAL PILLARS
              </span>
            </h1> : <h1 className="title" style={{textAlign: "left", fontSize: "35px", letterSpacing: "5px", fontWeight: "300"}}>
              <span>
                OUR APPROACH:
              </span>
              <br />
              <span style={{fontWeight: "900"}}>
                FOUR OPERATIONAL PILLARS
              </span>


            </h1>}



          </Container>

        </div>
      </div>
    </>
  );
}

export default PillarPageHeader;
