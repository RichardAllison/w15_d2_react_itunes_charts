import React, { Component } from 'react';
import MusicList from '../components/MusicList';

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: []
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const chartObject = JSON.parse(jsonString);
      this.setState({chart: chartObject.feed.entry})
    });

    request.send();
  }

  render() {
    const chartMusicNames = this.state.chart.map(item => item['im:name']['label'])

    return (
      <div>
        <MusicList chartMusicNames={chartMusicNames}/>
      </div>
    )
  }
}

export default ChartContainer;
