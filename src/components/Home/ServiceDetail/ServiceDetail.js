import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const { title, description, image } = service;
    const history = useHistory()
    return (
        <div className="col-md-4">
            <div className="service-card" onClick={()=>history.push('/dashboard')}>
                <span className='service-span'></span>
                <span className='service-span'></span>
                <span className='service-span'></span>
                <span className='service-span'></span>
                <div className='m-auto'>
                    <img className='service-image' src={`data:image/png;base64,${image.img}`} className='mt-5 rounded-circle' alt=""/>
                    <p className="mt-4 service-title">{title}</p>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
