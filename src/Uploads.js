import React from 'react'
import PassportUpload from './PassportUpload.js'
import CVupload from './CVupload.js'
import DriversLicenseUpload from './DriversLicenseUpload.js'
import NationalId from './NationalId.js'
import Commendation from './CommendationUpload.js'
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
      nationalId: false,
      nationalIdURL: "",
      commendation: false,
      commendationURL: "",
      verification: false

    }
  }

  componentWillUnmount() {
    let urlObj = {}
    urlObj["passport"] = this.state.passportURL
    urlObj["cv"] = this.state.cvURL
    urlObj["drivers-licence"] = this.state.driversLicenseURL
    urlObj["national-id"] = this.state.nationalIdURL
    urlObj["certificate-of-commendation"] = this.state.commendationURL
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

  render() {
    return (

      <Container component="main" maxWidth="md" style={{paddingTop: "50px", paddingBottom: "50px"}}>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PassportUpload uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <Grid item xs={12}>
            <CVupload uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <Grid item xs={12}>
            <DriversLicenseUpload uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <Grid item xs={12}>
            <NationalId uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>
          <Grid item xs={12}>
            <Commendation uploadProgress={this.props.uploadProgress} finishedUploadProcess={this.props.finishedUploadProcess} checkDocumentSubmission={this.checkDocumentSubmission} verifyUpload={this.state.verification} setFinishUpload={this.props.setFinishUpload} documentURL={this.documentURL}/>
          </Grid>

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
                  !this.state.nationalId
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
