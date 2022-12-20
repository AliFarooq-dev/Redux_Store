import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from './Categories';
import { showCategories } from './redux/actions/productCreators'
const CategoryList = () => {

    const Disptach = useDispatch();
    const fetchCategories = async () => {
        const respone = await axios.get('https://fakestoreapi.com/products/categories').catch(err => console.log(err));
        Disptach(showCategories(respone.data));
    };

    useEffect(() => {
        fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{ marginTop: '8px' }} className="ui grid container">
            <Categories />
        </div>
    )
}

export default CategoryList;