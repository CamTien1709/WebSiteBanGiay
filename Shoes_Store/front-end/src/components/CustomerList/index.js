import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import styles from './CustomerList.module.scss';
import '../CategoryList/Category.css';
import cart from "../../assets/images/cart.jpg";
import shoe from "../../assets/images/shoe.png";
import customer from '../../assets/images/customer.png';
import account from '../../assets/images/account.png';
import category from "../../assets/images/category.png";

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/customers/getAll')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customers:', error));
    }, []);

    const handleEdit = (customerId) => {
        navigate(`/customers/edit/${customerId}`);
    };

    const handleDelete = (customerId) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            axios.delete(`http://localhost:8080/customers/delete/${customerId}`)
                .then(() => {
                    setCustomers(customers.filter(customer => customer.customerId !== customerId));
                    toast.success('Customer deleted successfully!');
                })
                .catch(error => console.error('Error deleting customer:', error));
        }
    };

    const filteredCustomers = customers.filter(customer =>
        customer.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.customerId.toString().includes(searchQuery.toString())
    );

    return (
        <div>
            <div id="mySidenav">
                <div className="sidenav">
                    <p className="logo"><span>Shoe</span>Shop</p>
                    {/* <Link to="/dashboard" className="icon-a"><img src="/Images/controlpanel.png" alt="menu" className="icons"/><span>Dashboard</span></Link> */}
                    <Link to="/categories" className="icon-a"><img src={category} alt="menu"
                                                                   className="icons"/><span>Category</span></Link>
                    <Link to="/shoes" className="icon-a"><img src={shoe} alt="menu"
                                                              className="icons"/><span>Shoes</span></Link>
                    <Link to="/customers" className="icon-a"><img src={customer} alt="menu"
                                                                  className="icons"/><span>Customers</span></Link>
                    <Link to="/carts" className="icon-a"><img src={cart} alt="menu"
                                                              className="icons"/><span>Carts</span></Link>
                    <Link to="/accounts" className="icon-a"><img src={account} alt="menu"
                                                                 className="icons"/><span>Accounts</span></Link>

                    {/* <Link to="/settings" className="icon-a"><img src="/Images/settings.png" alt="menu" clasclassNames="icons"/><span>Settings</span></Link>
                    <Link to="" className="icon-a"><img src="/Images/logout.png" alt="menu" className="icons"/><span>Logout</span></Link> */}
                </div>
            </div>
            <div className="container mt-5">
                <h2>Customer List</h2>
                <div className="">
                    <div className="search">
                        <input
                            type="text"
                            className=" "
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="btn-new" onClick={() => navigate('/customers/new')}>Add New Customer
                    </button>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredCustomers.map(customer => (
                        <tr key={customer.customerId}>
                            <td>{customer.customerId}</td>
                            <td>{customer.fullName}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button className="btn btn-warning me-2"
                                        onClick={() => handleEdit(customer.customerId)}>Edit
                                </button>
                                <button className="btn btn-danger"
                                        onClick={() => handleDelete(customer.customerId)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default CustomerList;