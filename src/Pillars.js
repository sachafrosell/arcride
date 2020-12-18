import React from 'react'

import {
  Container,
  Row,
  Col
} from "reactstrap";



const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px",
   color: "black"
}

const divStyle1 = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid black",
  minHeight: "375px",
  height: "100%"
}

const divStyle2 = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid black",
  minHeight: "300px",
    height: "100%"
}

const colStyle = {
  paddingTop: "5px",

}

class Pillars extends React.Component {
constructor(props){
  super(props);
  this.state = {
    1: false,
    2: false,
    3: false,
    4: false
  }
}

  top() {
    window.scrollTo(0, 0);
  }

  handleHover = (e) => {
    console.log(e.target)
  }

  render() {
    return (
      <>
        {this.top()}
        <div className="wrapper" style={{background: "white"}}>

          <div className="section section-about-us" style={{paddingTop: "50px", paddingBottom: "60px", background: "white"}}>
            <Container>
              <Row style={{display: "tableCell"}}>
                <Col className="text-center" style={colStyle} md="6" id="assembly" onMouseEnter={this.handleHover} >
                  <div className="1" style={divStyle1} >
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px"}}>
                        ASSEMBLY PLANTS

                      </span>
                    </h1>
                    <hr style={{border: "0.5px solid black",
                      marginTop: "15px",
                      marginBottom: "15px",
                      display: "block",
                    maxWidth: "50px"}}></hr>
                    <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px"}}>


                      ARC Ride is focused on creating skilled job opportunities in each of the cities we operate.
                      We want to foster in-country innovation and develop local workforce skills,
                      feeding back into the countries in which we operate.
                    </h5>
                    <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px"}}>
                      The local assembly plant allows an ongoing R&D process to optimise E3 design and technical specifications,
                      bespoke to each city. For example in Kigali, the topography requires a powerful vehicle to negotiate the many hills,
                      and our vehicle will reflect those needs. Each country will have it's own design preferences,
                      and our vehicles will aesthetically match the country in which they operate.
                    </h5>


                  </div>

                </Col>

                <Col className="text-center" md="6" style={colStyle}>
                  <div style={divStyle1}>
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px"}}>
                        CHARGING STATIONS

                      </span>
                    </h1>
                    <hr style={{border: "0.5px solid black",
                      marginTop: "15px",
                      marginBottom: "15px",
                      display: "block",
                    maxWidth: "50px"}}></hr>
                    <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px"}}>

                      ARC Ride is creating the charging transport infrastructure of the future.
                      This will revolutionise the existing transport network.
                      We build an EV charging and battery swap network across the city.
                      This creates the backbone for an EV transport network and lay the foundations for future green growth.
                      Our stations use solar generated electricity, helping pave the way for a more sustainable transport system.
                    </h5>
                    <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px"}}>
                      Each charging station is a valuable social asset.
                      They also provide public space such as cafes, electrical goods charging centres,
                      and rest stops for drivers.
                    </h5>
                  </div>

                </Col>

              </Row>
              <Row style={{paddingTop: "30px", }}>
                <Col className="text-center" style={colStyle} md="6">
                  <div style={divStyle2}>
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px"}}>
                        E3s

                      </span>
                    </h1>
                    <hr style={{border: "0.5px solid black",
                      marginTop: "15px",
                      marginBottom: "15px",
                      display: "block",
                    maxWidth: "50px"}}></hr>
                    <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px"}}>

                      ARC Ride has identified Electric 3 wheelers (E3s) as a key component to the future of transport in African cities.
                      Put simply, E3s offer a clean and affordable electric vehicle solution that other alternatives can not.
                      We aim to emulate and improve upon the success of these vehicles in Asia and ultimately create an optimised vehicle model for African Cities’ roads.



                    </h5>
                    <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px"}}>
                      E3s are only the first step in ARC Ride’s long-term goal to be a dynamic and adaptable green public transport service in African cities.
                      E3s will naturally progress to E4s as battery technology makes them commercially viable,
                      and there is no limit to the diverse set of options that will become available as the EV market progresses.
                    </h5>



                  </div>

                </Col>

                <Col className="text-center" md="6" style={colStyle}>
                  <div style={divStyle2}>
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px"}}>
                        RIDE APP

                      </span>
                    </h1>
                    <hr style={{border: "0.5px solid black",
                      marginTop: "15px",
                      marginBottom: "15px",
                      display: "block",
                    maxWidth: "50px"}}></hr>

                    <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px"}}>
                      ARC Ride fleet not only integrates with all leading ride hailing services we are also exploring the creation of our own technology that manages our fleet and tracks all rides. Our aim is to provide a solution which encompasses multiple payment solutions, can host both internal and external Drivers, use live GPS monitoring, app function for gender specific rides and offer 24/7 hr customer support.


                    </h5>
                    <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px"}}>

                      Our app interface will work across IOS and Android - for those who do not have smartphones, a USSD payment solution will be also integrated. Watch this space for exciting partnership announcements and updates to our core operating system.

                    </h5>

                  </div>

                </Col>

              </Row>

              <div className="separator separator-primary"></div>
            </Container>
          </div>
        </div>
      </>
    );
  }

}

export default Pillars;
