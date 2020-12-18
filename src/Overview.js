import React from 'react'

import store from './Store.js'
import Big from './OverviewBig.js'
import Small from './OverviewSmall.js'


function Overview() {
  store.dispatch({
    type: "COLOR",
    payload: "BLACK"
  })

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  })



  return (
    <>
    {dimensions.width > 1025 ? <Big /> : <Small />}

    </>
  );
}

export default Overview;
