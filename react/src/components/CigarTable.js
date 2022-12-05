import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CigarTable extends Component {
    render() {
        const c = this.props.card
        return (
            <tbody>
                <tr>
                    <td><Link className='no-deco' key={c.cigar_id} to={`/api/cigars/${c.cigar_id}`}>{c.cigar}</Link></td>
                    <td><Link className='no-deco' key={c.cigar_id} to={`/api/cigars/${c.cigar_id}`}>{c.length}</Link></td>
                    <td><Link className='no-deco' key={c.cigar_id} to={`/api/cigars/${c.cigar_id}`}>{c.ring_gauge}</Link></td>
                    <td><Link className='no-deco' key={c.cigar_id} to={`/api/cigars/${c.cigar_id}`}>{c.country}</Link></td>
                    <td><Link className='no-deco' key={c.cigar_id} to={`/api/cigars/${c.cigar_id}`}>{c.shape}</Link></td>
                    <td><Link className='no-deco' key={c.cigar_id} to={`/api/cigars/${c.cigar_id}`}>{c.color}</Link></td>
                    <td><Link className='no-deco' key={c.cigar_id} to={`/api/cigars/${c.cigar_id}`}>{c.strength}</Link></td>
                </tr>
            </tbody>
        )
    }
}
