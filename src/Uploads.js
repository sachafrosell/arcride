import React from 'react'
import PassportUpload from './PassportUpload.js'
import CVupload from './CVupload.js'
import DriversLicenseUpload from './DriversLicenseUpload.js'
import CertificateOfGoodConduct from './CertificateOfGoodConductUpload.js'
import Commendation from './CommendationUpload.js'
import PoliceClearance from './PoliceClearanceUpload.js'
import DciReciept from './DciUpload.js'
import PelezaCertificate from './PelezaVerificationCertificateUpload.js'
import './Firestore.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

import { withAuth0 } from '@auth0/auth0-react';


//material UI
import {  Button } from "reactstrap";
//import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


class Uploads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passport: false,
      passportURL: "",
      id: this.props.auth0.user.sub.replace('auth0|', ''),
      cv: false,
      cvURL: "",
      driversLicense: false,
      driversLicenseURL: "",
      certificateOfGoodConduct: false,
      certificateOfGoodConductURL: "",
      commendation: false,
      commendationURL: "",
      pelezaCertificate: false,
      pelezaCertificateURL: "",
      policeClearance: false,
      policeClearanceURL: "",
      dciReciept: false,
      dciRecieptURL: "",
      verification: false

    }
  }

  componentWillUnmount() {
    let urlObj = {}
    urlObj["passport"] = this.state.passportURL
    urlObj["cv"] = this.state.cvURL
    urlObj["drivers-licence"] = this.state.driversLicenseURL
    urlObj["certificate-of-good-conduct"] = this.state.certificateOfGoodConductURL
    urlObj["certificate-of-commendation"] = this.state.commendationURL
    urlObj["peleza-certificate"] = this.state.pelezaCertificateURL
    urlObj["police-clearance"] = this.state.policeClearanceURL
    urlObj["dci-reciept"] = this.state.dciRecieptURL

    console.log(urlObj)
    this.updateUserData(urlObj)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }




  updateUserData = (urlObj) => {

    //e.preventDefault();
    const db = firebase.firestore();
    db.collection("users").doc(this.state.id).update({

        URLs: urlObj,
				submitted: true,
        verified: false

    });

  };

  documentURL = (document, url) => {
    this.setState({
      ...this.state,
      [`${document}URL`]: url
    })
  }

  checkDocumentSubmission = (e) => {
    //e.preventDefault()
    this.setState({
      ...this.state,
      [e.target.name]: true
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    window.scrollTo(0, 0);
    this.props.changePage()
    this.props.checkDocumentsUploaded()
    //this.updateUserData()
    this.setState({
      ...this.state,
      verification: true
    })
  }

//  disabled={
//    !this.state.passport ||
//    !this.state.cv ||
//    !this.state.driversLicense ||
//    !this.state.nationalId
//  }


// <Grid item xs={12}>
//   <CVupload uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
// </Grid>
// <Grid item xs={12}>
//   <DriversLicenseUpload uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
// </Grid>
// <Grid item xs={12}>
//   <NationalId uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
// </Grid>
// <Grid item xs={12}>
//   <Commendation uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
// </Grid>

  render() {
    return (

      <Container component="main" maxWidth="md" style={{paddingTop: "50px", paddingBottom: "50px"}}>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PassportUpload uploadPercentage={this.props.uploadPercentage} uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <p style={{
            border: "0.5px solid black",
            marginTop: "15px",
            marginBottom: "15px",
            display: "block",
            maxWidth: "100px"
          }}></p>
          <Grid item xs={12}>
            <CVupload uploadPercentage={this.props.uploadPercentage} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <p style={{
            border: "0.5px solid black",
            marginTop: "15px",
            marginBottom: "15px",
            display: "block",
            maxWidth: "100px"
          }}></p>
          <Grid item xs={12}>
            <DriversLicenseUpload uploadPercentage={this.props.uploadPercentage} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <p style={{
            border: "0.5px solid black",
            marginTop: "15px",
            marginBottom: "15px",
            display: "block",
            maxWidth: "100px"
          }}></p>
          <Grid item xs={12}>
            <CertificateOfGoodConduct uploadPercentage={this.props.uploadPercentage} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <p style={{
            border: "0.5px solid black",
            marginTop: "15px",
            marginBottom: "15px",
            display: "block",
            maxWidth: "100px"
          }}></p>
          <Grid item xs={12}>
            <PoliceClearance uploadPercentage={this.props.uploadPercentage} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <p style={{
            border: "0.5px solid black",
            marginTop: "15px",
            marginBottom: "15px",
            display: "block",
            maxWidth: "100px"
          }}></p>
          <Grid item xs={12}>
            <DciReciept uploadPercentage={this.props.uploadPercentage} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <p style={{
            border: "0.5px solid black",
            marginTop: "15px",
            marginBottom: "15px",
            display: "block",
            maxWidth: "100px"
          }}></p>
          <Grid item xs={12}>
            <PelezaCertificate uploadPercentage={this.props.uploadPercentage} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <p style={{
            border: "0.5px solid black",
            marginTop: "15px",
            marginBottom: "15px",
            display: "block",
            maxWidth: "100px"
          }}></p>
          <Grid item xs={12}>
            <Commendation uploadPercentage={this.props.uploadPercentage} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <p style={{
            border: "0.5px solid black",
            marginTop: "15px",
            marginBottom: "15px",
            display: "block",
            maxWidth: "100px"
          }}></p>


          <Grid item xs={12}>
            <div className="col text-center">
              <Button
                type="submit"
                className="submit"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  color: "black",
                  position: "relative",
                  fontSize: "15px",
                  borderRadius: "0px",
                  padding: "15px",
                  marginTop: "0px",
                  width: "100%"
                }}
                onClick={this.handleClick}
                disabled={
                  !this.state.passport ||
                  !this.state.cv ||
                  !this.state.driversLicense ||
                  !this.state.certificateOfGoodConduct ||
                  !this.state.pelezaCertificate ||
                  !this.state.dciReciept ||
                  !this.state.policeClearance ||
                  !this.state.commendation
                }
              >
                Submit Documents For Verification

              </Button>
            </div>


          </Grid>
        </Grid>


      </Container>
    )
  }

}

export default withAuth0(Uploads);
