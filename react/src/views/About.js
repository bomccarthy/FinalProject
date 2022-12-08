import React, { Component } from 'react'
import '../main.css';
import boOscarV from './../static/images/Bo&OscarValladares.jpg';

export default class About extends Component {
    render() {
        return (
            <>
                <div className='col-12 about '>
                    <img src={boOscarV} alt='Bo & Oscar Valladares' />
                </div>
                <div className='col-12 about'>
                    <p>Oscar Valladares (Oscar Valladares Tobacco and maker of The Oscar Habano)<br />and me at Train Car Cigar Bar in Big Spring, TX.  Hey, Brent!!</p>
                </div>
            </>
        )
    }
}
