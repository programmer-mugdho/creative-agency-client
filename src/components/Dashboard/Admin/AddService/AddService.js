import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

import './AddService.css'

const AddService = () => {
    return (
        <div className='AddService p-5'>
            <form className='w-100'>
                <div className="service-form row p-4">
                    <div className="col-md-6">
                        <p className='m-0'>Service Title</p>
                        <input className='form-control mb-4' type="text" />
                        <p className='m-0'>Description</p>
                        <textarea className='form-control' name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="col-md-6">
                        <p className='m-0'>Icon</p>
                        <input className='upload-file-inp' type="file" name="file" id="uploadImg" />
                        <label htmlFor="uploadImg" className='upload-file-btn text-center'><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                    </div>
                </div>
                <button className="btn btn-success mt-3 px-4">Submit</button>
            </form>
        </div>
    );
};

export default AddService;