import React from 'react';
import './Goods.css'

const Goods = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-md-6 relative1 text-decoration">
                        <a href="/goods">
                            <div className="background-goods ">
                                <h1 className="title" >Goods</h1>
                            </div>
                        </a>
                    </div>
                <div className="col-md-6 relative text-decoration">
                    <a href="/books">
                        <div className="background-books">
                            <h1 className="title" >Books</h1>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Goods;