import React from 'react'
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { setProduct } from '../containers/redux/actions/productCreators'

const ProductListing = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(error => {
            console.log(error);
        });
        dispatch(setProduct(response.data));
    };

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line 
    }, []);

    return (
        <div style={{ marginTop: '12px' }} className="ui grid container">
            <ProductComponent />
        </div>
    )
};

export default ProductListing