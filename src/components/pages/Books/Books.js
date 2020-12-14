import React, { useState } from 'react';
import './Books.css'
import booksInfo from "../../fakeData/booksInfo"
import NavBar from '../NavBar/NavBar';
import BooksAll from "../BooksAll/BooksAll"
import Footer from '../Footer/Footer';

const Books = () => {
    const [books, setBooks] = useState(booksInfo);
    return (
        <div>
            <NavBar></NavBar>
            <div className="body9">
                <h1 className="h11">Books</h1>
            </div>
            <div className="background5">
                <div className="flex9">
                    <div className="width9">
                        <img width="48px" src="https://i.imgur.com/QG3eRW8.png" alt="" />
                        <h4 className="order9">15% Off First Order</h4>
                        <h5 className="list9">Subscribe to our mailing list for 15% off your first order.</h5>
                    </div>
                    <div className="width9 two-margin9">
                        <img width="70px" src="https://i.imgur.com/ljjjXHf.png" alt="" />
                        <h4 className="order9">30 Day Returns</h4>
                        <h5 className="list9">Shop with certainty with
                    a 30 day returns policy.</h5>
                    </div>
                    <div className="width9 two-margin9">
                        <img width="48px" src="https://i.imgur.com/unoZlgu.png" alt="" />
                        <h4 className="order9">Worldwide shipping</h4>
                        <h5 className="list9">Free worldwide shipping on
                     all orders over $65</h5>
                    </div>
                </div>
            </div>

            <div class="background5" style={{ paddingLeft: "17px" }}>
                <div class="row justify-content " style={{ margin: "0" }} >
                    {
                        books.map(page => <BooksAll
                            page={page}
                            key={page.key}
                        ></BooksAll>)
                    }
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Books;