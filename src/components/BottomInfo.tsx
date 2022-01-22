import React from 'react';
import '../App.scss';

interface bottomProps {
    title: string;
    text: string;
    click: () => void;
}

export default function Card(props: bottomProps) {

    return (
        <div className="bottom" onClick={() => props.click()}>
            <h3 className="bottom-title">{props.title}</h3>
            <p className="bottom-text">{props.text}</p>
            <p className="bottom-text-2">Click to get started!</p>
        </div>
    )
}