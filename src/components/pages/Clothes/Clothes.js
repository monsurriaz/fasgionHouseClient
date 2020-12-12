import React from 'react';
import './Clothes.css'

const Clothes = ({clothes}) => {
    const {name, price, image } = clothes;
    return (
        <div className="align">
            <img width="300px"   src={image} alt=""/>
            <h1 className="head1">{name}</h1>
            <h3 className="head3">{price} </h3>
        </div>
    );
};

export default Clothes;