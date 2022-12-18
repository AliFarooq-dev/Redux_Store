import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Categories = () => {
    const Disptach = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    const fetchCategories = async () => {
        const respone = await axios.get('https://fakestoreapi.com/products/categories').catch(err => console.log(err));
        console.log(respone.data);
        Disptach(respone.data);
    };
    useEffect(() => {
        fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <></>
    )
};

export default Categories;