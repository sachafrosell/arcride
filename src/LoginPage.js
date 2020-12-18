// components
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


// core ./components
import ExamplesNavbar2 from "./components/Navbars/LoginPageNavbar.js";
import DarkFooter from "./components/Footers/DarkFooter.js";
import InfoFooter from "./components/Footers/InfoFooter.js"
import LoginHeader from "./components/Headers/LoginHeader.js"
import LoginHeader2 from "./components/Headers/LoginHeader2.js"
import SignUp from './Signup.js'
import Uploads from './Uploads.js'



function Contact () {

  const [page, setPage] = React.useState({
    number: 1
  })


  const [documentsUploaded, setDocumentsUploaded] = React.useState({
    status: false
  })


  const [finishedUploadProcess, setFinishedUploadProcess] = React.useState(false)


  const checkDocumentsUploaded = () => {
    setDocumentsUploaded({
      status: true
    })
  }

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const [signUpActive, setsignUpActive] = React.useState({
    active: false
  })
  const [finishedUpload, setFinishUpload] = React.useState({
    passport: false,
    driversLicense: false,
    cv: false,
    nationalId: false,
    commendation: false
  })




  const { isAuthenticated, isLoading } = useAuth0();



  const checkLoading = () => {
    if (!isLoading) {
      return isAuthenticated
    }
  }

  const signUpFormActive = () => {
    setsignUpActive({
      active: !signUpActive.active
    })
  }

  const finishedUploadingDocumentation = (document) => {
    setFinishUpload({
      ...finishedUpload,
      [document]: true
    })
  }

  React.useEffect(() => {
    if (
    finishedUpload.passport
    && finishedUpload.driversLicense
    && finishedUpload.cv
    && finishedUpload.nationalId
    && finishedUpload.commendation) {

    setFinishedUploadProcess(true)
    }
  }, [finishedUpload.passport, finishedUpload.commendation, finishedUpload.driversLicense, finishedUpload.cv, finishedUpload.nationalId])




    const changePage = () => {
      setPage({
        number: 2
      })
    }


  return (
    <>

      <ExamplesNavbar2 />
      {isLoading ?
        <LoginHeader2 />
      :
      <LoginHeader signUpFormActive={signUpFormActive} isFormActive={signUpActive.active} documentStatus={documentsUploaded} checkFinished={finishedUploadProcess}/>
      }

      {!(checkLoading() && signUpActive.active) ?
        ""
      : (page.number === 1) ? <SignUp changePage={changePage} />
      : (page.number === 2 && !finishedUploadProcess)? <Uploads changePage={changePage} checkDocumentsUploaded={checkDocumentsUploaded} setFinishUpload={finishedUploadingDocumentation} finishedUploadProcess={finishedUploadProcess} finishedUpload={finishedUpload}/>
      : ""}



      <InfoFooter />
      <DarkFooter />


    </>);

}

export default Contact;
