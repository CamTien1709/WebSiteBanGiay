import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CategoryList/Category.css';
import cart from '../../assets/images/cart.jpg';
import shoe from '../../assets/images/shoe.png';
import customer from '../../assets/images/customer.png';
import account from '../../assets/images/account.png';
import category from '../../assets/images/category.png';


const ShoeList = () => {
    const [shoes, setShoes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/shoes/getAll')
            .then(response => setShoes(response.data))
            .catch(error => console.error('Error fetching Shoe:', error));
    }, []);

    const handleEdit = (shoesId) => {
        navigate(`/shoes/edit/${shoesId}`);
    };

    const handleDelete = (shoesId) => {
        if (window.confirm('Are you sure you want to delete this shoes?')) {
            axios.delete(`http://localhost:8080/shoes/delete/${shoesId}`)
                .then(() => {
                    setShoes(shoes.filter(shoe => shoe.shoeId !== shoesId));
                    toast.success('Shoe deleted successfully!');
                })
                .catch(error => console.error('Error deleting Shoe:', error));
        }
    };

    const filteredShoe = shoes.filter(shoe =>
        shoe.name.includes(searchQuery) ||
        shoe.shoesId.toString().includes(searchQuery.toString())
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
                <h2>Shoes List</h2>
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
                    <button className="btn-new" onClick={() => navigate('/shoes/new')}>Add New Medicine
                    </button>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th style={{width: '30px', height: '50px'}}>ID</th>
                        <th>Name</th>
                        <th style={{width: '30px', height: '50px'}}>Category ID</th>
                        <th style={{width: '30px', height: '50px'}}>Manufacture ID</th>
                        <th>Price</th>
                        <th style={{width: '30px', height: '50px'}}>Quantity</th>
                        <th>Description</th>
                        <th>Size</th>
                        <th>Color</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredShoe.map(shoe => (
                        <tr key={shoe.shoesId}>
                            <td>{shoe.shoesId}</td>
                            <td>{shoe.name}</td>
                            <td>{shoe.categoryId}</td>
                            <td>{shoe.manufacturerId}</td>
                            <td>${shoe.price}</td>
                            <td>{shoe.stockQuantity}</td>
                            <td>{shoe.description}</td>
                            <td>{shoe.size}</td>
                            <td>{shoe.colorId}</td>
                            <td>
                                <button className="btn btn-warning me-2"
                                        onClick={() => handleEdit(shoe.shoesId)}>Edit
                                </button>
                                <button className="btn btn-danger"
                                        onClick={() => handleDelete(shoe.shoesId)}>Delete
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

export default ShoeList;