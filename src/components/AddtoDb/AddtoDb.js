import React from 'react';
import clothesInfo from '../fakeData/clothesInfo';
import MensInfo from '../fakeData/MensInfo';
import womensInfo from '../fakeData/womenInfo';

const AddtoDb = () => {

    const handleAddProduct = () => {
        fetch('http://localhost:5000/addWomensProducts', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(womensInfo)
        })
    }

    return (
        <div>
            <button onClick={handleAddProduct}>add products</button>
        </div>
    );
};

export default AddtoDb;