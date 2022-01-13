import React, { useState } from 'react';
import '../App.scss';
import testrose from '../assets/testrose.jpeg';

interface cardProps {
    title: string;
    text: string;
    extras: string;
}

export default function Card(props: cardProps) {

    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            <img className="card-img" src={testrose} />
            <p className="card-extras">{props.extras}</p>
            <p className="card-text">{props.text}</p>
        </div>
    )
}