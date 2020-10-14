import React from 'react';
import './OurServices.css'
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const services = [
    {
        title: 'Web & Mobile design',
        img: service1,
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
    },
    {
        title: 'Graphic design',
        img: service2,
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        title: 'Web development',
        img: service3,
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const OurServices = () => {

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