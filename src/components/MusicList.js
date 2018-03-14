import React, { Component } from 'react';

class MusicList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const musicListItems = this.props.chartMusicNames.map((chartMusicName, index) => {
      return <li key={index}><input type="radio" name="chart-items" id={"chart-item-"+index} value={index}></input><label htmlFor={"chart-item-"+index}>{chartMusicName}</label></li>
    })

    return (
      <ul>
        {musicListItems}
      </ul>
    )
  }

}

export default MusicList;
