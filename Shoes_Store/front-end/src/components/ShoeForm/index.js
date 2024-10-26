import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Shoe.css';

const ShoeForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { shoesId } = useParams();

    useEffect(() => {
        if (shoesId) {
            axios.get(`http://localhost:8080/shoes/getShoes/${shoesId}`)
                .then(response => {
                    const shoe = response.data;
                    setValue('name', shoe.name);
                    setValue('categoryId', shoe.categoryId);
                    setValue('manufactureId', shoe.manufactureId);
                    setValue('price', shoe.price);
                    setValue('stockQuantity', shoe.stockQuantity);
                    setValue('description', shoe.description);
                    setValue('size', shoe.size);
                    setValue('colorId', shoe.colorId);
                })
                .catch(error => console.error('Error fetching medicine:', error));
        }
    }, [shoesId, setValue]);

    const onSubmit = (data) => {
        const shoe = {
            ...data,

        };

        if (shoesId) {
            axios.put(`http://localhost:8080/shoes/update/${shoesId}`, shoe)
                .then(() => {
                    toast.success('Shoe updated successfully!');
                    setTimeout(() => navigate('/shoes'), 2000);
                })
                .catch(error => console.error('Error updating shoe:', error));
        } else {
            axios.post('http://localhost:8080/shoes/create', shoe)
                .then(() => {
                    toast.success('Shoe created successfully!');
                    setTimeout(() => navigate('/shoes'), 2000);
                })
                .catch(error => console.error('Error creating shoe:', error));
        }
    };

    return (
        <div className="form-container">
            <h2>{shoesId ? 'Edit Shoe' : 'New Shoe'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-input"
                        id="name"
                        {...register('name', {required: 'Shoe is required'})}
                    />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="categoryId" className="form-label">Category ID</label>
                    <input
                        type="text"
                        className="form-input"
                        id="categoryId"
                        {...register('categoryId', {required: 'Category is required'})}
                    />
                    {errors.categoryId && <span className="form-error">{errors.categoryId.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="manufactureId" className="form-label">Manufacture ID</label>
                    <input
                        type="text"
                        className="form-input"
                        id="manufactureId"
                        {...register('manufactureId', {required: 'Manufacture is required'})}
                    />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-input"
                        id="price"
                        {...register('price', {required: 'Price is required'})}
                    />
                    {errors.price && <span className="form-error">{errors.price.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="stockQuantity" className="form-label">Quantity </label>
                    <input
                        type="text"
                        className="form-input"
                        id="stockQuantity"
                        {...register('stockQuantity', {required: 'Quantity is required'})}
                    />
                    {errors.stockQuantity && <span className="form-error">{errors.stockQuantity.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description </label>
                    <input
                        type="text"
                        className="form-input"
                        id="description"
                        {...register('description', {required: 'Description is required'})}
                    />
                    {errors.description && <span className="form-error">{errors.description.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="size" className="form-label">Size </label>
                    <input
                        type="text"
                        className="form-input"
                        id="size"
                        {...register('size', {required: 'Size is required'})}
                    />
                    {errors.size && <span className="form-error">{errors.size.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="colorId" className="form-label">Color ID </label>
                    <input
                        type="text"
                        className="form-input"
                        id="colorId"
                        {...register('colorId', {required: 'Color is required'})}
                    />
                    {errors.colorId && <span className="form-error">{errors.colorId.message}</span>}
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="button-save">Save</button>
                    <button type="button" className="button-cancel" onClick={() => navigate('/medicines')}>Cancel
                    </button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default ShoeForm;