import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import './OurPartners.css'

const OurPartners = () => {
    return (
        <section className='our-partners container text-center pt-5 pb-5'>
            <div className="d-md-flex d-flex-column justify-content-between align-items-center">
                {/* <div className="row">
                    <div className="py-3 py-md-0 col-md-2 col-sm-4 col-xs-12 align-items-center m-auto"><img className='img-fluid' src={slack} alt="" /></div>
                    <div className="py-3 py-md-0 col-md-2 col-sm-4 col-xs-12 align-items-center m-auto"><img className='img-fluid' src={google} alt="" /></div>
                    <div className="py-3 py-md-0 col-md-2 col-sm-4 col-xs-12 align-items-center m-auto"><img className='img-fluid' src={uber} alt="" /></div>
                    <div className="py-3 py-md-0 col-md-3 col-sm-4 col-xs-12 align-items-center m-auto"><img className='img-fluid' src={netflix} alt="" /></div>
                    <div className="py-3 py-md-0 col-md-3 col-sm-4 col-xs-12 align-items-center m-auto"><img className='img-fluid' src={airbnb} alt="" /></div>
                </div> */}
                <img src={slack} alt="" />
                <img src={google} alt="" />
                <img src={uber} alt="" />
                <img src={netflix} alt="" />
                <img src={airbnb} alt="" />
            </div>
            {/* <div className="">
                <div>
                    <img className="img-fluid" style={{ maxWidth: '100px' }} src={client.image} alt="" />
                </div>
            </div> */}
        </section>
    );
};

export default OurPartners;