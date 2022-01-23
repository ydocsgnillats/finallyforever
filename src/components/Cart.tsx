import React, { useState } from 'react';
import '../App.scss';
import testrose from '../assets/testrose.jpeg';

interface cartProps {
    open: boolean;
    close: () => void;
}

export default function Cart(props: cartProps) {

    return (
        <div className={`container ${props.open ? "cart-overlay" : "cart-overlay-hidden"}`}>
            <header>Cart</header>
        </div>
    )
}