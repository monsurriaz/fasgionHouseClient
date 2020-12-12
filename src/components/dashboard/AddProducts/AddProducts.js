import React, { useState } from 'react';
import Axios from 'axios';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Sidebar from '../Sidebar/Sidebar';

const AddProducts = () => {

    const [productInfo, setProductInfo] = useState({
        title: '',
        price: '',
        imageUrl: ''
    });

    const handleOnBlur = (e) => { //----------------------- handleOnBlur
        const eName = e.target.name;
        const eValue = e.target.value;
        const newObject = { ...productInfo }

        if (eName === 'title') {
            newObject.title = eValue;
        } else if (eName === 'price') {
            newObject.price = eValue;
        }
        setProductInfo(newObject);
    }

    const handleFormSubmit = (e) => { //-------------------------- handleFormSubmit
        console.log(productInfo)
        fetch('https://still-ridge-49659.herokuapp.com/addProducts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert("Product added successfully!")
                    setProductInfo({ title: '', price: '', imageUrl: '' })
                } else {
                    window.alert("This Product already added!")
                }

            })
        e.preventDefault();
    }

    const uploadImage = (img) => {
        let body = new FormData()
        body.set('key', '50cab0522c80d4cf7791e68d210142fa')
        body.append('image', img)

        return Axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        })
    }


    const upload = (e) => {
        uploadImage(e.target.files[0])
            .then(resp => {
                const newObject = { ...productInfo }
                newObject.imageUrl = resp.data.data.thumb.url;
                setProductInfo(newObject);
            })
        e.preventDefault();
    }
   
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <DashboardNavbar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <form onSubmit={handleFormSubmit}>
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Service Title</label>
                                        <input onBlur={handleOnBlur} type="text" class="form-control" name="title" id="exampleInputEmail1" placeholder="Product Title" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputName1">Price</label>
                                        <input onBlur={handleOnBlur} type="number" class="form-control" name="price" id="exampleInputName1" placeholder="Pricedetail" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Thumbnail </label>
                                        <input onChange={upload} type="file" name="myFile" class="form-control-file" id="exampleFormControlFile1" />
                                        {
                                            productInfo.imageUrl ? <img src={setProductInfo.imageUrl}  alt="" /> : <small className="text-mute">Image will be appeared here</small>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="ml-5">
                                <button type="submit" className="brand-green-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProducts;