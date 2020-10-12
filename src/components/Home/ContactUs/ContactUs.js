import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>
            <section id='contact-us' className='py-5'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className='contact-title'>Let us handle your <br /> project, professionally.</h1>
                            <p className='contact-description mt-4'>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={e => e.preventDefault()} className='form-group'>
                                <input style={{ height: '70px' }} placeholder='Your email address' className='form-control mb-3' type="text" name="" id="" />
                                <input style={{ height: '70px' }} placeholder='Your name / company’s name' className='form-control mb-3' type="text" name="" id="" />
                                <textarea style={{ height: '270px' }} placeholder='Your message' className='form-control mb-3' type="text" name="" id="" />
                                <button style={{ width: '170px' }} className="btn btn-brand px-5">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <footer className='text-center mt-5'>
                    <p>&copy; Orange labs {new Date().getFullYear()} | All Rights Reserved</p>
                </footer>
            </section>
        </>
    );
};

export default ContactUs;