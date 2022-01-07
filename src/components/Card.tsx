import React, { useState } from 'react';
import '../App.scss';
import testrose from '../assets/testrose.jpeg';

interface cardProps {
    title: string;
    text: string;
}

export default function Card(props: cardProps) {

    const [flipped, setFlipped] = useState(false);

    const cardBack = (
        <div onClick={() => setFlipped(!flipped)} onMouseLeave={() => setFlipped(!flipped)} className="Card">
            <h3 className="Card-title">back</h3>
            <img className="Card-img" src={testrose} />
            <p className="Card-text">back</p>
        </div>
    )

    const cardFront = (
        <div onClick={() => console.log('clicked')} onMouseLeave={() => setFlipped(!flipped)} className="Card">
            <h3 className="Card-title">{props.title}</h3>
            {/* <img className="Card-img" src={testrose} /> */}
            <p className="Card-text">{props.text}</p>
        </div>
    )

    return (
        <>
            {!flipped ? cardFront : cardBack}
        </>
    )
}