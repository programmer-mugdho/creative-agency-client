import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Order.css'

const Order = () => {
    return (
        <div className='order-container p-4'>
            <div className="container">
                <form className="order-form form-group pt-3">
                    <input placeholder="Your name / company's name" className='form-control mb-3' type="text" name="" id="" />
                    <input placeholder='Your email address' className='form-control mb-3' type="email" name="" id="" />
                    <input placeholder='Graphic Design' className='form-control mb-3' type="text" name="" id="" />
                    <textarea placeholder='Project Detail' name="" id="" cols="30" rows="10" className="form-control mb-3"></textarea>
                    <input placeholder='Price' className='form-control mb-3 d-inline mr-4' type="number" name="" id="" />
                    <input className='upload-file-inp' type="file" name="file" id="uploadImg" />
                    <label htmlFor="uploadImg" id='upload-label' className='upload-file-btn text-center'><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                    <button className="btn btn-brand mb-4">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Order;