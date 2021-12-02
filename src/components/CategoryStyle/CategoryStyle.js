import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryStyle.scss';

const CategoryStyle = (props) => {
    const { name, image, apiVal } = props.category;
    const color = props.colors;

    const categoryBackStyle = {
        background: `${color}`,
        borderRadius: '5px'
    }
    return (
        <NavLink to={`/selection/${name}/${apiVal}`} className="col-lg-4 col-md-6 category-container mt-4 mb-5">
            <div className="category-name">
                <h2 className="px-4 py-1" style={categoryBackStyle}>{name}</h2>
            </div>
            <div className="category-image text-center">
                <img src={image} alt="" />
            </div>
        </NavLink>
    );
};

export default CategoryStyle;