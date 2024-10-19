import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import styles from './CustomerList.module.scss';

const ColorList = () => {
    const [colors, setColors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/colors/getAll')
            .then(response => setColors(response.data))
            .catch(error => console.error('Error fetching colors:', error));
    }, []);

    const handleEdit = (colorID) => {
        navigate(`/colors/edit/${colorID}`);
    };

    const handleDelete = (colorID) => {
        if (window.confirm('Are you sure you want to delete this color?')) {
            axios.delete(`http://localhost:8080/colors/delete/${colorID}`)
                .then(() => {
                    setColors(colors.filter(color => color.colorID !== colorID));
                    toast.success('Color deleted successfully!');
                })
                .catch(error => console.error('Error deleting color:', error));
        }
    };

    const filteredColors = colors.filter(color =>
        color.colorName.toUpperCase().includes(searchQuery.toUpperCase())
    );

    return (
        <div className="container mt-5">
            <h2>Color List</h2>
            <div className="">
                <div className="mb-3">
                    <input
                        type="text"
                        className=" "
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={() => navigate('/colors/new')}>Add New Color</button>
            </div>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Color ID</th>
                    <th>Color Name</th>
                </tr>
                </thead>
                <tbody>
                {filteredColors.map(color => (
                    <tr key={color.colorID}>
                        <td>{color.colorID}</td>
                        <td>{color.colorName}</td>
                        <td>
                            <button className="btn btn-warning me-2" onClick={() => handleEdit(color.colorID)}>Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => handleDelete(color.colorID)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default ColorList;