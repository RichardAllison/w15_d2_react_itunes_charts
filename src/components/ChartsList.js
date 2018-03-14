import React, { Component } from 'react';

class ChartsList extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChartItemSelected(event.target.value);
  }

  render() {
    const chartListItems = this.props.chartItemNames.map((chartItemName, index) => {
      return <li key={index}><input type="radio" name="chart-items" id={"chart-item-"+index} value={index}></input><label htmlFor={"chart-item-"+index}>{chartItemName}</label></li>
    })

    return (
      <div id="chart">
        <form onChange={this.handleChange}>
          <ol>
            {chartListItems}
          </ol>
        </form>
      </div>
    )
  }

}

export default ChartsList;
