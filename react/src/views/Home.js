import React, { Component } from 'react';
import '../main.css';
import CigarCard from '../components/CigarCard';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            cigars: []
        }
    }

    componentDidMount = async () => {
        const res = await fetch('http://127.0.0.1:5000/api/cigar_smdb/1')
        const data = await res.json()
        const cigar_card = data.data
        this.setState({cigars: cigar_card})
    }

    render() {
        return (
        <div>
            {this.state.cigars.map(c => <CigarCard  card={c} />)}
        </div>
        )
    }
}
