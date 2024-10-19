import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ColorForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { colorId } = useParams();

    useEffect(() => {
        if (colorId) {
            axios.get(`http://localhost:8080/colors/getColor/${colorId}`)
                .then(response => {
                    const color = response.data;
                    setValue('categoryName', color.colorName);
                })
                .catch(error => console.error('Error fetching color:', error));
        }
    }, [colorId, setValue]);

    const onSubmit = (data) => {
        const color = {
            ...data,

        };

        if (colorId) {
            axios.put(`http://localhost:8080/colors/update/${colorId}`, color)
                .then(() => {
                    toast.success('Color updated successfully!');
                    setTimeout(() => navigate('/colors'), 2000);
                })
                .catch(error => console.error('Error updating color:', error));
        } else {
            axios.post('http://localhost:8080/colors/create', color)
                .then(() => {
                    toast.success('Color created successfully!');
                    setTimeout(() => navigate('/colors/'), 2000);
                })
                .catch(error => console.error('Error creating color:', error));
        }
    };

    return (
        <div className="container mt-5">
            <h2>{colorId ? 'Edit Color' : 'New Color'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="colorName" className="form-label">Color Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="colorName"
                        {...register('colorName', { required: 'Color is required' })}
                    />
                    {errors.colorName && <span className="text-danger">{errors.colorName.message}</span>}
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-success me-2">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/colors')}>Cancel</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ColorForm;