import React from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    return (
        <div className='MakeAdmin p-4'>
            <div className="service-form p-4">
                <form>
                    <p className="m-0">Email</p>
                    <input type="email" placeholder='jon@gmail.com' name="" id="" className="form-control" />
                    <button className="btn btn-success ml-2 px-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;