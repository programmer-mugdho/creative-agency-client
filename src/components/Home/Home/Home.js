import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import OurPartners from '../OurPartners/OurPartners';
import OurServices from '../OurServices/OurServices';
import OurWorks from '../OurWorks/OurWorks';

const Home = () => {
    return (
        <div>
            <Header />
            <OurPartners />
            <OurServices />
            <OurWorks />
            <ClientsFeedback />
            <ContactUs />
        </div>
    );
};

export default Home;