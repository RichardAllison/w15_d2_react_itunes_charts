import React, { Component } from 'react';

const MusicDetails = (props) => {

  if (!props.musicItem) return null;

  return (
    <div>
      <h3>{props.musicItem['im:name']['label']}</h3>
    </div>
  )
}

export default MusicDetails;
