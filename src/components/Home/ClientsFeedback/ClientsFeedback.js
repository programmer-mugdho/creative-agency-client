import React from 'react';
import './ClientsFeedback.css'
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';

const feedbacks = [
    {
        name: 'Nash Patrik',
        img: customer1,
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        name: 'Miriam Barron',
        img: customer2,
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        name: 'Bria Malone',
        img: customer3,
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },

]

const ClientsFeedback = () => {
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