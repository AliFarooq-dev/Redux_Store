import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

const CategoryWise = () => {
    
    const { categoryName } = useParams();
    const fetchCategoryProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`).catch(err => console.log(err));
        console.log(response.data);
    };

    useEffect(() => {
        fetchCategoryProduct();
        // eslint-disable-next-line
    }, [categoryName]);

    return (
        <>

        </>
    )
}

export default CategoryWise