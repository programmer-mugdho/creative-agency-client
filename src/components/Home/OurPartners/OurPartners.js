import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import './OurPartners.css'

const OurPartners = () => {
    return (
        <section className='our-partners pt-5 pb-5 d-flex m-auto justify-content-between align-items-center'>
            <img src={slack} alt=""/>
            <img src={google} alt=""/>
            <img src={uber} alt=""/>
            <img src={netflix} alt=""/>
            <img src={airbnb} alt=""/>
        </section>
    );
};

export default OurPartners;