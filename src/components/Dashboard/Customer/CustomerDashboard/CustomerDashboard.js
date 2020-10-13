import React, { useState } from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import Topbar from '../../../Shared/Topbar/Topbar';
import Order from '../Order/Order';
import ServiceList from '../ServiceList/ServiceList';
import Review from '../Review/Review';
import './CustomerDashboard.css'

const CustomerDashboard = () => {
    const [navigation, setNavigation] = useState('Review')
    return (
        <section className='CustomerDashboard'>
            <div className='row'>
                <Sidebar navigation={navigation} setNavigation={setNavigation} />
                <div className="col-md-10 p-0">
                    <Topbar />
                    {navigation === 'Order' && <Order />}
                    {navigation === 'Service list' && <ServiceList />}
                    {navigation === 'Review' && <Review />}
                </div>
            </div>
        </section>
    );
};

export default CustomerDashboard;