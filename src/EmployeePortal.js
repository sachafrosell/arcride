// components
import React from 'react';
import VerificationDashboard from './VerificationDashboard.js';
import Navbar from './components/Navbars/LoginPageNavbarAdmin.js';
import DarkFooter from './components/Footers/DarkFooter.js';
import InfoFooter from './components/Footers/InfoFooter.js';
import EmployeePortalHeader from './components/Headers/EmployeePortalHeader.js';
import UserProfile from './UserProfile.js';
import { useAuth0 } from "@auth0/auth0-react";
import './DimmerStyle.css'



const EmployeePortal = () => {

  const [isUserClicked, setIsUserClicked] = React.useState(false);
  const [userId, setUserId] = React.useState('');


  const { isAuthenticated, user } = useAuth0();

  let pageHeader = React.createRef();


  const handleUserClicked = e => {

    setUserId(e.target.id);
    setIsUserClicked(true);
  }
  const handleBackButtonClick = () => {
    setIsUserClicked(false);
    pageHeader.current.style.transform = "translate3d(0,0,0)";
  }

//  React.useEffect(() => {
//    if (!isAuthenticated) {
//      window.location.reload();
//    }
//  }, [])





  return (
    <>
      <div id='dimmer'>
      </div>
      <Navbar />
      <EmployeePortalHeader pageHeader={pageHeader}/>
      {!isUserClicked && isAuthenticated && user.sub === 'auth0|6007329f6f7cb80069f8c737' ?
        <VerificationDashboard handleUserClicked={handleUserClicked}/>
      : isUserClicked && isAuthenticated && user.sub === 'auth0|6007329f6f7cb80069f8c737' ?
        <UserProfile userId={userId} handleBackButtonClick={handleBackButtonClick}/>
      :
      ""

      }

      <InfoFooter />
      <DarkFooter />



    </>);

}

export default EmployeePortal;
