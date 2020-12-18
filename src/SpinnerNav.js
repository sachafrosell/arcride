import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

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
        <MoonLoader
          size={20}
          color={"#000"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default AwesomeComponent;
