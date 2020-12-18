import React from "react";
import ContentNewCard from "./ContentNewCard.js"


function ContentCard() {


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

      <div className="wrapper">
        <div className="section section-team text-center" style={{paddingTop: "150px"}}>
          <ContentNewCard />
        </div>
      </div>
    </>
  );
}

export default ContentCard;
