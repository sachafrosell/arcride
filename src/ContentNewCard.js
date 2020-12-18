import React from "react";
// reactstrap components
import{
  Card,
  CardHeader,
  CardBody,
  //CardTitle,
  //Button,
  NavItem,
  NavLink
} from "reactstrap";
// core components

const NavStyle = {
  borderRadius: "0px",
  fontSize: "10px",
  padding: "5px"
}

class ContentNewCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: <ul>
        <li>Create skilled jobs by assembling and maintaining the E3’s on a city by city basis.</li>
        <li>Ongoing innovation and design to  meet city needs. </li>
        <li>Support and improve local economies, enable connectivity and significantly reduce pollution. </li>
      </ul>,
      class: {
      one: "active nav-link",
      two: "nav-link",
      three: "nav-link",
      four: "nav-link"
      }

    };
  }

  toggle(x) {
    this.activate(x)
    if (x === 1) {
      this.setState((state) => {
        return {
          ...state,
          class: {
          one: "active nav-link",
          two: "nav-link",
          three: "nav-link",
          four: "nav-link"
          }
        }
      })
    } else if (x === 2) {
      this.setState((state) => {
        return {
          ...state,
          class: {
          one: "nav-link",
          two: "active nav-link",
          three: "nav-link",
          four: "nav-link"
          }
        }
      })
    } else if (x ===3) {
      this.setState((state) => {
        return {
          ...state,
          class: {
          one: "nav-link",
          two: "nav-link",
          three: "active nav-link",
          four: "nav-link"
          }
        }
      })
    } else if (x === 4) {
      this.setState((state) => {
        return {
          ...state,
          class: {
          one: "nav-link",
          two: "nav-link",
          three: "nav-link",
          four: "active nav-link"
          }
        }
      })
    }
  }

  activate(x) {
    if (x === 1) {
      this.setState((state) => {
        return {text: <ul>
          <li>Create skilled jobs by assembling and maintaining the E3’s on a city by city basis.</li>
          <li>Ongoing innovation and design to  meet city needs. </li>
          <li>Support and improve local economies, enable connectivity and significantly reduce pollution. </li>
        </ul>}
      })
    } else if (x === 2) {
      this.setState((state) => {
        return {text: <ul>
          <li>Enabling electric mobility and maximising time on the road.</li>
          <li>Battery swapping facilities </li>
          <li>Provide the essential backbone for electric vehicle market growth. </li>
        </ul>}
      })
    } else if (x ===3) {
      this.setState((state) => {
        return {text: <ul>
          <li>Affordable, reliable and clean mass transport and delivery solution for all.</li>
          <li>Innovative and dynamic service solutions creating 1000’s of jobs per city. </li>
          <li>Clean last mile:
            - Ride Hailing
            - Food and Goods Delivery
            - Secondary Transport Routes
          </li>
        </ul>}
      })
    } else if (x === 4) {
      this.setState((state) => {
        return {text: <ul>
          <li>ARC Ride fleet integrates with all leading app’s and enables real time booking.</li>
          <li>A driver for every customer supporting transparent pricing and a cashless economy. </li>
          <li>Providing clean infrastructure for mass transport and ecommerce. </li>
        </ul>}
      })
    }

  }

  render () {
    return (
      <>
        <div className="ml-auto mr-auto col-md-10 col-xl-6" style={{width: "600px"}}>

          <Card>
            <CardHeader>
              <ul data-background-color="black" role="tablist" className="nav-tabs-neutral justify-content-center nav nav-tabs">
                <NavItem>
                  <NavLink
                    className={this.state.class.one}
                    style={NavStyle}
                    href="#pablo"
                    onClick={e => e.preventDefault(this.toggle(1))}
                  >
                    Investing in the cities we operate
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.class.two}
                    style={NavStyle}
                    href="#pablo"
                    onClick={e => e.preventDefault(this.toggle(2))}
                  >
                    Solar Charging infrastructure
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.class.three}
                    style={NavStyle}
                    href="#pablo"
                    onClick={e => e.preventDefault(this.toggle(3))}
                  >
                    E3s Electric Swarm
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.class.four}
                    style={NavStyle}
                    href="#pablo"
                    onClick={e => e.preventDefault(this.toggle(4))}
                  >
                    Technology
                  </NavLink>
                </NavItem>
              </ul>
            </CardHeader>
            <CardBody>
              <div className="tab content">
                {this.state.text}
              </div>
            </CardBody>
          </Card>

        </div>

      </>
    );
  }
}


export default ContentNewCard
