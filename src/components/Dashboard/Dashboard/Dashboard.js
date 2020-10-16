import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import Order from '../Customer/Order/Order';
import ServiceList from '../Customer/ServiceList/ServiceList';
import Review from '../Customer/Review/Review';
import AdminServiceList from '../Admin/AdminServiceList/AdminServiceList';
import AddService from '../Admin/AddService/AddService';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import jwt_decode from 'jwt-decode'
import './Dashboard.css'

const Dashboard = () => {
    const decodedToken = jwt_decode(sessionStorage.getItem('token'));
    const { email, picture } = decodedToken
    const [isAdmin, setIsAdmin] = useState(false)
    console.log(isAdmin)
    const [navigation, setNavigation] = useState(isAdmin ? 'Admin Service list' : 'Order')
    useEffect(() => {
        fetch('https://creative-agency-site.herokuapp.com/allAdmins/' + email)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
                if (data) {
                    setNavigation("Admin Service list")
                }
            })
    }, [])
    return (
        <section className='CustomerDashboard'>
            <div className='row'>
                <Sidebar navigation={navigation} setNavigation={setNavigation} isAdmin={isAdmin} />
                <div className="col-md-10 p-0">
                    <Topbar />
                    {
                        isAdmin ?
                            <>
                                {navigation === 'Add Service' && <AddService />}
                                {navigation === 'Admin Service list' && <AdminServiceList />}
                                {navigation === 'Make Admin' && <MakeAdmin />}
                            </>
                            :
                            <>
                                {navigation === 'Order' && <Order />}
                                {navigation === 'Service list' && <ServiceList />}
                                {navigation === 'Review' && <Review />}
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
