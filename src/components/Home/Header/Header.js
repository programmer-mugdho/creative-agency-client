import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import headerImage from '../../../images/logos/Frame.png'

const Header = () => {
    return (
        <section className='header mb-5'>
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-5">
                        <h1 className='header-title mt-5'>
                            Let’s Grow Your <br />
                            Brand To The <br />
                            Next Level
                        </h1>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                        </p>
                        <button className="btn px-5 btn-brand mt-4">Hire Us</button>
                    </div>
                    <div className="col-md-7">
                        <img className='header-image' src={headerImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;