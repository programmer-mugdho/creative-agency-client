import React from 'react';
import './AdminServiceList.css'

const AdminServiceList = () => {
    return (
        <div className='service-list p-4'>
            <div className="all-services p-4">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Project Detail</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mugdho Snigdho</td>
                            <td>mugdho@gmail.com</td>
                            <td>Graphic Design</td>
                            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>Mugdho Snigdho</td>
                            <td>mugdho@gmail.com</td>
                            <td>Graphic Design</td>
                            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceList;
