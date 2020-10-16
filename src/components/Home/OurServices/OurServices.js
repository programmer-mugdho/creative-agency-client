import React, { useEffect, useState } from 'react';
import './OurServices.css'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const OurServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://creative-agency-site.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className='container text-center my-5 py-5'>
            <h2 className='services-title'>Provide awesome <span>services</span></h2>
            <div className="row mt-5">
                {
                    services.map(service => <ServiceDetail service={service} key={service.description} />)
                }
            </div>
        </section>
    );
};

export default OurServices;
