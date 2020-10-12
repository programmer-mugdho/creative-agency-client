import React from 'react';
import './FeedbackDetail.css'

const FeedbackDetail = ({ feedback }) => {
    const { name, img, description, designation } = feedback
    return (
        <div className="col-md-4">
            <div className='feedback-card'>

            </div>
        </div>
    );
};

export default FeedbackDetail;