import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <div className='review-container order-container p-4'>
            <div className="container">
                <form className="order-form form-group pt-1">
                    <input placeholder="Your name" className='form-control mb-3' type="text" name="" id="" />
                    <input placeholder="Company's name, Designation" className='form-control mb-3' type="text" name="" id="" />
                    <textarea placeholder='Project Detail' name="" id="" cols="30" rows="8" className="form-control mb-3"></textarea>
                    <button className="btn btn-brand">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;