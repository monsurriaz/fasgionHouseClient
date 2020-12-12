import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://rocky-tundra-21843.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then(success => {
            if(success){
                alert('Admin created successfully');
                document.getElementById('gmail').value = '';
            }
        })
    }

    return (
        <div>
            <div className="container-fluid">
                <DashboardNavbar />
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 dashboard">
                        <h3 className="my-4 ml-5">Add a admin</h3>
                        <div className="form-inner p-3">
                            <form className="px-4" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input id="gmail" type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                                        {errors.user_email && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <button type="submit" className="btn-admin btn px-5">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;