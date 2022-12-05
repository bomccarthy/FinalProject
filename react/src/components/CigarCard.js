import React, { Component } from 'react'
import '../main.css';

export default class CigarCard extends Component {

  render() {
    const c = this.props.card
    return (
      <div className="card" style={{ backgroundColor: '#343a40', color: '#FFFFFF' }}>
        <img src={c.img_url} className="card-img-top" alt={c.cigar} style={{ width: '10rem', backgroundColor: '#FFFFFF' }} />
        <div className="card-body">
          <h5 className="card-title">{c.cigar}</h5>
          <p className="card-text">Length: {c.length}</p>
          <p className="card-text">Ring Gauge: {c.ring_gauge}</p>
          <p className="card-text">Origin: {c.country}</p>
          <p className="card-text">Shape: {c.shape}</p>
          <p className="card-text">Wrapper: {c.wrapper}</p>
          <p className="card-text">Binder: {c.binder}</p>
          <p className="card-text">Filler: {c.filler}</p>
          <p className="card-text">Color: {c.color}</p>
          <p className="card-text">Strength: {c.strength}</p>
          <p className="card-text">Start Mfg Year: {c.start_mfg_yr}</p>
          <p className="card-text">Last Mfg Year: {c.end_mfg_yr}</p>
          <p className="card-text">Image of Cigar: </p>
          <img src={c.img_cigar} alt='None' />
          <p className="card-text">More information can be found at...</p>
          <a href={c.mfg_website} target='_blank' rel='noreferrer'>{c.mfg_website}</a>
        </div>
      </div>
    )
  }
}
