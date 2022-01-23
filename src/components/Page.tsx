import React from 'react';
import '../App.scss';
import testrose from '../assets/testrose.jpeg';
import { MdArrowBack } from 'react-icons/md';

interface pageProps {
    title: string;
    text: string;
    extras: string[];
    price?: string;
    back: () => void;
}

export default function Page(props: pageProps) {

    return (
        <div className="page">
            <h3 className="page-title">{props.title}</h3>
            <button className="back" onClick={() => props.back()}>
                <MdArrowBack className="back-icon" />
                <span className="back-text">Back</span>
            </button>
            <img className="page-img" src={testrose} />
            <p className="page-text">{props.text}</p>
            <p className="page-extras">
                <h3>Popular Add Ons</h3>
                {props.extras.map((extra: string) => {
                    return <li>{extra}</li>
                })}
            </p>
        </div>
    )
}