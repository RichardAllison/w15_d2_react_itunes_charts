import React, { Component } from 'react';
import ChartsList from '../components/ChartsList';
import ChartItemDetails from '../components/ChartItemDetails';

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: [],
      selectedChartItem: null
    }
    this.handleChartItemSelected = this.handleChartItemSelected.bind(this)
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

  handleChartItemSelected(index) {
    this.setState({selectedChartItem: index});
  }

  render() {
    const chartItemNames = this.state.chart.map(item => item['im:name']['label'])
    const selectedChartItem = this.state.chart[this.state.selectedChartItem];

    return (
      <div>
        <h1>UK Top Charts</h1>
        <div id="container">
          <ChartsList chartItemNames={chartItemNames}
            onChartItemSelected={this.handleChartItemSelected}/>
            <ChartItemDetails chartItem={selectedChartItem}/>
          </div>
        </div>
      )
    }
  }

  export default ChartContainer;
