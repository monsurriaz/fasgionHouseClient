import React from 'react';
import clothesInfo from '../fakeData/clothesInfo';
import MensInfo from '../fakeData/MensInfo';
import womensInfo from '../fakeData/womenInfo';
import goodsInfo from '../fakeData/goodsInfo';
import booksInfo from '../fakeData/booksInfo';

const AddtoDb = () => {

    const handleAddProduct = () => {
        fetch('https://still-ridge-49659.herokuapp.com/addBooks', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booksInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data){
                alert('products added from fkd to db');
            }
        })
    }

    return (
        <div>
            <button onClick={handleAddProduct}>add products</button>
        </div>
    );
};

export default AddtoDb;