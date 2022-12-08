import React, { Component } from 'react';
import '../main.css';
import cigar_parts from './../static/images/cigar_parts.jpg';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            cigars: []
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col'><img src={cigar_parts} alt='Cigar Parts' /></div>
                    <div className='col'>
                        <div className='home-text-style'>
                            <p>Thank you for visiting the Cigar Database. This is a work in progress to catalog all the cigars in the world. There will be mistakes, but with a little crowdsourcing, perhaps we can all have something to help others bring new things to our passion.</p>
                            <p>For a little help with this, the "Database" in the navigation bar at the top of the page is the entire database of more than 56,000 cigars. It takes time to load, so be aware that it may not be the fastest way to get information. Please feel free to use the search functions in the "Filter" page to whittle down the database to a manageable size.</p>
                            <p>Should you find a mistake or a correction that should be made, please send an email to <a href='mailto:my.help@cigar-db.com'>my.help@cigar-db.com</a>. I will try to make the corrections in a timely manner.</p>
                            <p>Thanks again and enjoy your time on the Cigar Database...</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
