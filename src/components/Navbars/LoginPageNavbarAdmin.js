import React from "react";
import { Link } from "react-router-dom";
import LogoDark from "../../assets/img/logo_dark_ride.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../../LoginButton.js'
import LogoutButtonAdmin from '../../LogoutButtonAdmin.js'
import Spinner from '../../SpinnerNav.js';

// reactstrap components
import {
  Button,

  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";

var Logo = LogoDark
var ButtonColor = "black"
var navbarColor = "navbar-white"

function LoginPageNavbarAdmin(props) {

  const { isAuthenticated, isLoading } = useAuth0();

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

  const checkAuth = () => {
    if (!isLoading) {
      return isAuthenticated
    }
  }




  return (
    <>

      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg" style={{height: 120}}>

        <Container>
          <div className="navbar-translate" style={{position: "absolute", top: "8px"}}>

            <Link to="/arcride">
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
              <NavItem>
                <Link to="/employee-portal" >
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
                    }} onClick={props.forceUpdate} > DASHBOARD </Button>
                </Link>
              </NavItem>
              {checkAuth() && !isLoading ?
                <NavItem>
                  <LogoutButtonAdmin />
                </NavItem>
              : !checkAuth() && isLoading ?
                <NavItem>
                  <LoginButton />
                </NavItem>
              :
              <NavItem>
                <div style={{marginTop: '30px', marginLeft: '20px'}}>
                  <Spinner />
                </div>

              </NavItem>
              }

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

export default LoginPageNavbarAdmin;
