import React from 'react';
import About from './About.js'
import Competition from './Competition.js'
import Challenge from './Challenge.js'
import Overview from './Overview.js'
import InfoFooter from "./components/Footers/InfoFooter.js"
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DarkFooter from "./components/Footers/DarkFooter.js";



const top = () => {
  window.scrollTo(0, 0);
}


function LandingPage() {



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






  return (
    <>



      <ExamplesNavbar forceUpdate={top()}/>
      <div className="wrapper">
        <LandingPageHeader/>

      </div>
      <About />
      <Challenge />
      <Overview />
      <Competition />
      <InfoFooter />
      <DarkFooter />
    </>
  );
}

export default LandingPage;
