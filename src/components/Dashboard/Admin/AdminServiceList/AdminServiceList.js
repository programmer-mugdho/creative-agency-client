import React, { useEffect, useState } from 'react';
import './AdminServiceList.css'

const AdminServiceList = () => {
    const [orders, setOrders] = useState([])

    // const optionStyles = {}
    // const selectStyles = {}

    // if (status === "Pending") {
    //     optionStyles.color = "#FF4545"
    //     selectStyles.color = "#FF4545"

    // } else if (status === "On Going") {
    //     optionStyles.color = "#FFBD3E"
    //     selectStyles.color = "#FFBD3E"
    // } else if (status === "Done") {
    //     optionStyles.color = "#009444"
    //     selectStyles.color = "#009444"
    // }

    const status = ['Pending', 'On Going', 'Done']
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name);
        const data = { id: e.target.name, status: e.target.value }
        console.log(data);
        fetch('http://localhost:5000/updateOrder', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className='service-list p-4'>
            <div className="all-services p-4">
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email ID</th>
                            <th scope='col'>Service</th>
                            <th scope='col'>Project Detail</th>
                            <th scope='col'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length === 0
                                ?
                                <div className="spinner-border text-success text-center" style={{ width: "3rem", height: "3rem" }} role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                :
                                orders.map(order => <tr key={order._id} scope='row'>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.work}</td>
                                    <td>{order.detail}</td>
                                    <td>
                                        <select className='selectDropdown' onChange={handleChange} name={order._id} id="">
                                            <option value={order.status}>{order.status}</option>
                                            {
                                                status.filter(sts => order.status !== sts).map(sts => <option key={sts} value={sts}>{sts}</option>)
                                            }
                                        </select>
                                    </td>
                                </tr>)
                        }
                        {/* <tr>
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
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceList;
