import React from 'react';
import logo from '../../../images/logos/logo.png'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faHdd, faShoppingCart, faCommentDots } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ navigation, setNavigation }) => {
    return (
        <aside className='col-md-2 sidebar text-center p-0'>
            <div className="container">
                <img className='my-4' src={logo} width='150' alt="" />
                <ul className='list-unstyled text-left ml-4 mt-4'>
                    <li className='mb-3' onClick={() => setNavigation('Order')}>
                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faShoppingCart} /> <span>Order</span>
                    </li>
                    <li className='mb-3' onClick={() => setNavigation('Service list')}>
                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faHdd} /> <span>Service list</span>
                    </li>
                    <li className='mb-3' onClick={() => setNavigation('Review')}>
                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faCommentDots} /> <span>Review</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;