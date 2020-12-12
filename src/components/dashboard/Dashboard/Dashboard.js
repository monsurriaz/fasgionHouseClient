import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';



const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="">
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
                    <div className="col-md-10 d-flex justify-content-center dashboard">
                        <h2 className="mt-5">welcome to Dashboard {loggedInUser.name} </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;