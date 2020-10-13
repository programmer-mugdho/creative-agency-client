import React from 'react';
import './FeedbackDetail.css'

const FeedbackDetail = ({ feedback }) => {
    const { name, img, description} = feedback
    return (
        <div className="col-md-4">
            <div className='feedback-card'>
                <div className="p-4">
                    <div className='pb-1'>
                        <img src={img} alt="" className="rounded" />
                        <div className="d-inline-block pl-3 name-container">
                            <p className='p-0 m-0'>{name}</p>
                            <p className='m-0'>CEO, Manpol</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-secondary'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackDetail;