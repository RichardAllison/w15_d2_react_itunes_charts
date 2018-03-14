import React from 'react';

const ChartItemDetails = (props) => {

  if (!props.chartItem) return null;

  return (
    <div>
      <h3><a href={props.chartItem['im:collection'].link.attributes.href}>{props.chartItem.title.label}</a></h3>
      <img src={props.chartItem['im:image'][2].label}/>
      <p>{props.chartItem['im:contentType'].attributes.term} {props.chartItem['im:collection']['im:contentType']['im:contentType'].attributes.term} {props.chartItem['im:contentType']['im:contentType']['attributes']['term']}</p>
      <p><a href={props.chartItem['im:artist'].attributes}>{props.chartItem['im:artist'].label}</a></p>
      <p>{props.chartItem.category.attributes.term}</p>
    </div>
  )
}

export default ChartItemDetails;
