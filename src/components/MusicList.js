import React, { Component } from 'react';

class MusicList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const musicListItems = this.props.chartMusicNames.map((chartMusicName, index) => {
      return <li key={index}>{chartMusicName}</li>
    })

    return (
      <ul>
        {musicListItems}
      </ul>
    )
  }

}

export default MusicList;
