import React, { Component } from 'react';
import chart from './../static/images/CigarSize&ShapeChart_sm.jpg';

export default class Chart extends Component {
  render() {
    return (
      <div>
        <img src={chart} alt='Cigar Chart' className='chart-width' />
      </div>
    )
  }
}