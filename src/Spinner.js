import React from "react";
import BarLoader from "react-spinners/BarLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;


class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <BarLoader
          height={10}
          width={200}
          color={"#fff"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default AwesomeComponent;
