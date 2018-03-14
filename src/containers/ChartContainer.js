import React, { Component } from 'react';
import MusicList from '../components/MusicList';

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartsMusic: []
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const chartObjects = JSON.parse(jsonString);
      this.setState({charts: chartObjects})
    });

    request.send();
  }

  render() {
    return (
      <div>
        <MusicList chartsMusic={this.state.chartsMusic}/>
      </div>
    )
  }
}

export default ChartContainer;
