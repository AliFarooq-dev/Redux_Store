import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Categories = () => {
    const categories = useSelector(state => state.category.categories);
    const renderCategory = categories.map((category, index) => {
        return (
            <div className="four wide column" key={index}>
                <Link to={`/category/${category}`} >
                    <button className=" medium ui button ui inverted orange button">{category}</button>
                </Link>
            </div>
        )
    });

    return (
        <>
            {renderCategory}
        </>
    )
};

export default Categories;