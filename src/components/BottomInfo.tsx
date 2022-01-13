import React from 'react';
import '../App.scss';

interface bottomProps {
    title: string;
    text: string;
}

export default function Card(props: bottomProps) {

    return (
        <div className="bottom">
            <h3 className="bottom-title">{props.title}</h3>
            <p className="bottom-text">{props.text}</p>
        </div>
    )
}