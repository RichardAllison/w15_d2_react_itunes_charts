import React, { Component } from 'react';

class MusicList extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onMusicItemSelected(event.target.value);
  }

  render() {
    const musicListItems = this.props.chartMusicNames.map((chartMusicName, index) => {
      return <li key={index}><input type="radio" name="chart-items" id={"chart-item-"+index} value={index}></input><label htmlFor={"chart-item-"+index}>{chartMusicName}</label></li>
    })

    return (
      <form onChange={this.handleChange}>
        <ul>
          {musicListItems}
        </ul>
      </form>
    )
  }

}

export default MusicList;
