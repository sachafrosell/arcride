import React from "react";
import Team from './Team.js'
import InfoFooter from "./components/Footers/InfoFooter.js"
import Pillars from './Pillars.js'


// core ./components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import DarkFooter from "./components/Footers/DarkFooter.js";
import PillarPageHeader from "./components/Headers/PillarPageHeader.js";


function PillarPage() {


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
        <ExamplesNavbar />
        <div className="wrapper">
          <PillarPageHeader />
        </div>
        <Pillars />
        <Team />
        <InfoFooter />
        <DarkFooter />

      </>
    );


}

export default PillarPage;
