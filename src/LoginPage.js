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



function Contact (props) {

  const [page, setPage] = React.useState({
    number: 1
  })

  // const [count, setCount] = React.useState(0);

  const { isAuthenticated, isLoading } = useAuth0();

  const [totalPercentage, setTotalPercentage] = React.useState({
    passport: 0,
    cv: 0,
    nationalId: 0,
    driversLicense: 0,
    commendation: 0
    }
  )


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


  const uploadPercentage = (document, percentage) => {
      const previousPercentage = Number(totalPercentage.[document])
      console.log()

      setTotalPercentage((prevState) => ({
        ...prevState,
        [document]: percentage + previousPercentage
      }));
  }








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
    {console.log(window.location.hash)}
    {isAuthenticated && !isLoading ? props.history.push(`${window.location.hash}`) : ""}
      <ExamplesNavbar2 />
      {isLoading ?
        <LoginHeader2 />
      :
      <LoginHeader totalPercentage={totalPercentage} signUpFormActive={signUpFormActive} isFormActive={signUpActive.active} documentStatus={documentsUploaded} checkFinished={finishedUploadProcess}/>
      }

      {!(checkLoading() && signUpActive.active) ?
        ""
      : (page.number === 1) ? <SignUp changePage={changePage} />
      : (page.number === 2 && !finishedUploadProcess)? <Uploads uploadPercentage={uploadPercentage} changePage={changePage} checkDocumentsUploaded={checkDocumentsUploaded} setFinishUpload={finishedUploadingDocumentation} finishedUploadProcess={finishedUploadProcess} finishedUpload={finishedUpload}/>
      : ""}



      <InfoFooter />
      <DarkFooter />


    </>);

}

export default Contact;
