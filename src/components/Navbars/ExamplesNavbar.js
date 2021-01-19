import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/img/logo_light_ride.png";
import LogoDark from "../../assets/img/logo_dark_ride.png";

// reactstrap components
import {
  Button,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container
} from "reactstrap";


function ExamplesNavbar(props) {

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  const [colors, setColors] = React.useState({
    bCol: "white",
    logo: LogoLight
  })

    React.useEffect(() => {
      function handleColors() {

      if(window.pageYOffset < 50) {
          setColors({
            bCol: "white",
            logo: LogoLight
          })
        } else if (window.pageYOffset > 49) {

          setColors({
            bCol: "black",
            logo: LogoDark
          })
        }

        };
        window.addEventListener("scroll", handleColors);
        return function cleanup() {
          window.removeEventListener("scroll", handleColors);

      }
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



  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        (document.documentElement.scrollTop > 49 ||
        document.body.scrollTop > 49)
      ) {
        setNavbarColor("navbar-white");

      } else if (
        document.documentElement.scrollTop < 50 ||
        document.body.scrollTop < 50
      ) {
        setNavbarColor("navbar-transparent");

      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>

      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg" style={{height: 120}}>

        <Container>
          <div className="navbar-translate" style={{position: "absolute", top: "8px"}}>

            <NavbarBrand style={{padding: "0px"}}>
              <img
                src={colors.logo}
                alt='Arc Ride Logo'
                style={{
                    width: "110px",
                    position: "10px"
                }}
              >
              </img>
            </NavbarBrand>
            {dimensions.width >= 1200 ? <Nav style={{float: "right", marginRight: "-950px"}}>
              <NavItem>
                <Link to="/arcride/home" >
                  <Button
                    style={{
                      background: "none",
                      color: colors.bCol,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                    }} onClick={props.forceUpdate} > HOME </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arcride/our-approach">
                  <Button style={{
                      background: "none",
                      color: colors.bCol,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > APPROACH </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arcride/contact">
                  <Button style={{
                      background: "none",
                      color: colors.bCol,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > GET IN TOUCH </Button>
                </Link>
              </NavItem>





            </Nav>
            : dimensions.width >= 992 && dimensions.width < 1200 ? <Nav style={{float: "right", marginRight: "-800px"}}>
              <NavItem>
                <Link to="/arcride/home" >
                  <Button
                    style={{
                      background: "none",
                      color: colors.bCol,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                    }} onClick={props.forceUpdate} > HOME </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arcride/our-approach">
                  <Button style={{
                      background: "none",
                      color: colors.bCol,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > APPROACH </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arcride/contact">
                  <Button style={{
                      background: "none",
                      color: colors.bCol,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > GET IN TOUCH </Button>
                </Link>
              </NavItem>



            </Nav> : dimensions.width >= 768 && dimensions.width < 992 ? <Nav style={{float: "right", marginRight: "-350px"}}>
              <NavItem>
                <Link to="/arcride/home" >
                  <Button
                    style={{
                      background: "none",
                      color: colors.bCol,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                    }} onClick={props.forceUpdate} > HOME </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arcride/our-approach">
                  <Button style={{
                      background: "none",
                      color: colors.bCol,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > APPROACH </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arcride/contact">
                  <Button style={{
                      background: "none",
                      color: colors.bCol,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > GET IN TOUCH </Button>
                </Link>
              </NavItem>



            </Nav> :  ""}

            <div className="topnav-right" style={{paddingRight: "150px", marginTop: "-10px"}}>


            </div>
          </div>

          </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
