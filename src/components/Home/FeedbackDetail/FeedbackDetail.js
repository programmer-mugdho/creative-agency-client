import React from 'react';
import './FeedbackDetail.css'

const FeedbackDetail = ({ feedback }) => {
    const { name, img, detail, designation} = feedback
    return (
        <div className="col-md-4">
            <div className='feedback-card mb-3'>
                <div className="p-4">
                    <div className='pb-1'>
                        <img src={img} alt="" className="rounded-circle" />
                        <div className="d-inline-block pl-3 name-container">
                            <p className='p-0 m-0'>{name}</p>
                            <p className='m-0'>{designation}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-secondary'>{detail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackDetail;