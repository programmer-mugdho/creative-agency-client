import React from 'react';
import './OurWorks.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'


const OurWorks = () => {
    return (
        <section className='our-works text-center py-5 mb-5'>
            <h1 className='works-title py-5'>Here are some of <span>our works</span></h1>
            <OwlCarousel className='owl-theme mt-5'
                loop
                autoplay
                autoplayTimeout={2000}
                margin={20}
                dots
                >
                <div><img src={carousel1} alt="" /></div>
                <div><img src={carousel5} alt="" /></div>
                <div><img src={carousel2} alt="" /></div>
                <div><img src={carousel4} alt="" /></div>
                <div><img src={carousel2} alt="" /></div>
                <div><img src={carousel5} alt="" /></div>
                <div><img src={carousel4} alt="" /></div>
            </OwlCarousel>
        </section>
    );
};

export default OurWorks;
