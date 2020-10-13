import React from 'react';
import './OrderDetail.css'

const OrderDetail = ({ order }) => {
    const { img, title, description } = order;
    return (
        <div className="col-md-6">
            <div className="order-card p-4 mb-5">
                <div className="order-top d-flex justify-content-between align-items-start">
                    <img width='74' src={img} alt="" />
                    <button className="btn btn-danger">Pending</button>
                </div>
                <p className="order-title mt-3">{title}</p>
                <p style={{ color:'rgba(0, 0, 0, 0.7)'}} className="text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default OrderDetail;