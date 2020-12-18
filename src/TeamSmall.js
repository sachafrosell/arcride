import React from "react";



// reactstrap ./components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core ./components


function Team() {


  return (
    <>
      <Container>


        <div className="team" style={{paddingTop: "100px", paddingBottom: "50px", background: "white", textAlign: "center"}}>
          <Row>
            <Col md="2">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/bede.png")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Bede Hesmondhalgh</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>HEAD OF BUSINESS DEVELOPMENT</p>

              </div>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/John.png")}
                  style={{width: "200%"}}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>John Nkongoli</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>ADVISOR</p>

              </div>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/Felix.png")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Felix Saro-Wiwa</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>VICE PRESIDENT OF OPERATIONS</p>

              </div>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/Eric.png")}
                  style={{width: "200%"}}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Eric Hafashimana</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>LEAD MECHANIC</p>

              </div>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/jo-hurst-croft.jpg")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Jo Hurst-Croft</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>FOUNDER / CEO</p>

              </div>
            </Col>

          </Row>

          <Row>
            <Col md="2">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/joanna-cheong.jpg")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Joanna Cheong</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>CFO</p>

              </div>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/karl-boyce.jpg")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Karl Boyce</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>FOUNDER / DIRECTOR</p>

              </div>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/richard-bouma.jpg")}
                  style={{width: "200%"}}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Richard Bouma</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>CHAIRMAN</p>

              </div>
            </Col>
          </Row>


        </div>
      </Container>

    </>
  );
}

export default Team;
