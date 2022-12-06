import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CigarCard from '../components/CigarCard';

export default function SingleCigar() {
    const [cigar, setCigar] = useState({})
    const { cigarId } = useParams()

    useEffect(()=>{
        const getCigarInfo = async () => {
            const res = await fetch(`http://127.0.0.1:5000/api/cigars/${cigarId}`);
            console.log(res);
            const data = await res.json();
            console.log(data);
            if (data.status === 'ok') {
                setCigar(data.data)
            }
        };
        console.log(getCigarInfo())
    }, [cigarId])

    console.log(cigar)

    return (
        <div>
            <CigarCard c = {cigar}/>
        </div>

    )
}