import {
  Tab,
  Tabs,
} from '@material-ui/core';
import React, { Component } from 'react';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange(event, value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        <Tabs value={this.state.value} onChange={(event, value) => this.handleChange(event, value)}>
          <Tab label="Text" href="#text" />
          <Tab label="URL" href="#url" />
          <Tab label="Contact" href="#contact" />
          <Tab label="Phone" href="#phone" />
          <Tab label="SMS" href="#sms" />
          <Tab label="WiFi" href="#wifi" />

        </Tabs>
        {this.state.value === 0 && <div>Text</div>}
        {this.state.value === 1 && <div>URL</div>}
        {this.state.value === 2 && <div>Contact</div>}
        {this.state.value === 3 && <div>Phone</div>}
        {this.state.value === 4 && <div>SMS</div>}
        {this.state.value === 5 && <div>WiFi</div>}
      </div>
    );
  }
}

export default IndexPage;
