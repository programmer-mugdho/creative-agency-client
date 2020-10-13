import React from 'react';
import './Order.css'

const Order = () => {
    return (
        <div className='order-container py-4'>
            <div className="container">
                <form className="order-form form-group mt-5 pt-3">
                    <input placeholder="Your name / company's name" className='form-control mb-3' type="text" name="" id=""/>
                    <input placeholder='Your email address' className='form-control mb-3' type="email" name="" id=""/>
                    <input placeholder='Graphic Design' className='form-control mb-3' type="text" name="" id=""/>
                    <textarea placeholder='Project Detail' name="" id="" cols="30" rows="10" className="form-control mb-3"></textarea>
                    <input placeholder='Price' className='form-control mb-3 d-inline mr-4' type="number" name="" id=""/>
                    <input type="file" className='form-control mb-3 d-inline ml-1' name="" id=""/>
                    <button className="btn btn-brand">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Order;