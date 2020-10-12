import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const { img, title, description } = service;
    return (
        <div className="col-md-4">
            <div className="service-card">
                <div className='m-auto'>
                    <img className='mt-5' src={img} alt="" />
                    <p className="mt-4 service-title">{title}</p>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;