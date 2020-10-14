import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const { img, title, description } = service;
    const history = useHistory()
    return (
        <div className="col-md-4">
            <div className="service-card" onClick={()=>history.push('/dashboard')}>
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
