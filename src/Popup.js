import React from 'react';
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Row
} from 'reactstrap';

const ButtonStyle = {
  padding: "20px"
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen1: false,
      popoverOpen2: false,
      popoverOpen3: false,
      popoverOpen4: false,
    };
  }

  toggle(x) {
    if (x === 1) {
      this.setState({
        popoverOpen1: !this.state.popoverOpen1,
        popoverOpen2: false,
        popoverOpen3: false,
        popoverOpen4: false
      });
    } else if (x === 2) {
      this.setState({
        popoverOpen1: false,
        popoverOpen2: !this.state.popoverOpen2,
        popoverOpen3: false,
        popoverOpen4: false
      });
    } else if (x === 3) {
      this.setState({
        popoverOpen1: false,
        popoverOpen2: false,
        popoverOpen3: !this.state.popoverOpen3,
        popoverOpen4: false
      });
    } else if (x === 4) {
      this.setState({
        popoverOpen1: false,
        popoverOpen2: false,
        popoverOpen3: false,
        popoverOpen4: !this.state.popoverOpen4
      });
    }
  }


  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Button style={ButtonStyle} id="Popover1" onClick={e => e.preventDefault(this.toggle(1))} size="lg" color="default">
            Click to toggle popover
          </Button>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen1}
            target="Popover1"
            className="popover-primary"
          >
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. bottom?
            </PopoverBody>
          </Popover>
          <Button style={ButtonStyle} id="Popover2" onClick={e => e.preventDefault(this.toggle(2))} size="lg" color="default">
            Click to toggle popover
          </Button>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen2}
            target="Popover2"
            className="popover-primary"
          >
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. bottom?
            </PopoverBody>
          </Popover>
          <Button style={ButtonStyle} id="Popover3" onClick={e => e.preventDefault(this.toggle(3))} size="lg" color="default">
            Click to toggle popover
          </Button>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen3}
            target="Popover3"
            className="popover-primary"
          >
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. bottom?
            </PopoverBody>
          </Popover>
          <Button style={ButtonStyle} id="Popover4" onClick={e => e.preventDefault(this.toggle(4))} size="lg" color="default">
            Click to toggle popover
          </Button>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen4}
            target="Popover4"
            className="popover-primary"
          >
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              And here's some amazing content. It's very engaging. bottom?
            </PopoverBody>
          </Popover>

        </Row>

      </>
    );
  }
}
