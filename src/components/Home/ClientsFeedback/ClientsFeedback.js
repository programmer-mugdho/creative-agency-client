import React, { useEffect, useState } from 'react';
import './ClientsFeedback.css'
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';

const ClientsFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('https://creative-agency-site.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <section className='container py-4'>
            <h1 className='feedback-title text-center mb-3'>Clients <span>Feedback</span></h1>
            <div className="container">
                <div className="row my-5 py-5">
                    {
                        feedbacks.map(feedback => <FeedbackDetail feedback={feedback} key={feedback.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedback;