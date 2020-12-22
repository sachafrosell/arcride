import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Button } from "reactstrap";
import '../../Firestore.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

import Spinner from '../../Spinner.js';

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"
}

const LoginHeader = (props) => {

  let pageHeader = React.createRef();

  const [submittedStatus, setSubmittedStatus] = React.useState(false)
  const [verified, setVerified] = React.useState(false)

  const [userData, setUserData] = React.useState(null)
  const [count, setCount] = React.useState(1)


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
    const { user, isAuthenticated, isLoading } = useAuth0();

  React.useEffect(() => {

    if (isLoading === false && user) {

      const userID = user.sub.replace('auth0|', '')
      const db = firebase.firestore();
      const docRef = db.collection("users").doc(userID);
      docRef.get().then(function(doc) {
          if (doc.exists && count === 1) {
              setUserData(doc.data())
              setSubmittedStatus(doc.data().submitted);
              setVerified(doc.data().verified);

              setCount(2)

          } else {
              // doc.data() will be undefined in this case
              //  console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    }
  })

  const percentageLogic = () => (
    Math.round(((props.totalPercentage.passport + props.totalPercentage.cv + props.totalPercentage.nationalId + props.totalPercentage.commendation + props.totalPercentage.driversLicense) / 500) * 100)
  )




  const checkAuth = () => {
    if (!isLoading) {
      return isAuthenticated
    }
  }

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
          {!checkAuth() && !isLoading ?
            <div style={{textAlign: "left", marginTop: "15px"}}>
              <h1 style={{
                fontWeight: "900px",
              fontSize: "20px"}}>
                <span>
                  Login to view your dashboard
                </span>
              </h1>
            </div> : (props.documentStatus.status === true && props.checkFinished === false)  ?
              <div>
                <div style={{textAlign: "left", marginTop: "23px"}}>
                  <h1 style={{

                    fontWeight: "900px",
                  fontSize: "20px"}}>
                    <Spinner />

                    {percentageLogic()}%

                  </h1>

                </div>
              </div>
            : (props.checkFinished === true) ?
              <div>
                <div style={{textAlign: "left", marginTop: "15px"}}>
                  <h1 style={{
                    fontWeight: "900px",
                  fontSize: "20px"}}>
                    <span>
                      Thanks for submitting your documents. Our team will now verify them manually. Please allow up to a week for confirmation via email

                    </span>

                  </h1>

                </div>
              </div>
            : (submittedStatus === true && !verified) ?
              <div>
                <div style={{textAlign: "left", marginTop: "15px"}}>
                  <h1 style={{
                    fontWeight: "900px",
                  fontSize: "20px"}}>
                    Welcome back {userData.firstname}. Your application is currently going through the verification process
                  </h1>
                </div>
              </div>
            : (submittedStatus === true && verified === true) ?
              <div>
                <div style={{textAlign: "left", marginTop: "15px"}}>
                  <h1 style={{
                    fontWeight: "900px",
                  fontSize: "20px"}}>
                    Welcome back {userData.firstname}. Your documents have been verified!
                  </h1>
                </div>
              </div>
            : (!isLoading && submittedStatus) ?
              <div>
                <div style={{textAlign: "left", marginTop: "23px"}}>
                  <h1 style={{
                    fontWeight: "900px",
                  fontSize: "20px"}}>
                    <Spinner />


                </h1>

              </div>
            </div>
            :
            <div>
              <div style={{textAlign: "left", marginTop: "15px"}}>
                <h1 style={{
                  fontWeight: "900px",
                fontSize: "20px"}}>

                  <span>
                    Please complete the sign up process below to be verified by Arc Ride

                  </span>

                </h1>

              </div>
              <div style={{textAlign: "left"}}>
                {!props.isFormActive ?
                  <Button
                    onClick={props.signUpFormActive}
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      color: "white",
                      position: "relative",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "0px"
                    }} > SIGN UP </Button> :
                ""}

              </div>
            </div>

          }
        </Container>
      </div>

    </>
  );
}

export default LoginHeader;
